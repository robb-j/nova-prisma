import { console, createDebug, execute } from "./utils";

type ServerOptions = ConstructorParameters<typeof LanguageClient>[2];
type ClientOptions = ConstructorParameters<typeof LanguageClient>[3];

const debug = createDebug("prisma-language-server");

const DEBUG_INSPECT = false;
const DEBUG_LOGS = false;

export class PrismaLanguageServer {
  languageClient: LanguageClient | null = null;

  constructor() {
    debug("#new");

    this.start();
  }

  deactivate() {
    debug("#deactivate");

    this.stop();
  }

  async start() {
    try {
      debug("#start");

      if (this.languageClient) {
        this.languageClient.stop();
        nova.subscriptions.remove(this.languageClient as any);
        this.languageClient = null;
      }

      const packageDir = nova.inDevMode()
        ? nova.extension.path
        : nova.extension.globalStoragePath;

      const { stdout } = await execute("/usr/bin/env", {
        args: ["npm", "install", "--no-audit", "--only=production"],
        cwd: packageDir,
      });
      debug(stdout.trim());

      const serverOptions = await this.getServerOptions(
        packageDir,
        DEBUG_LOGS ? nova.workspace.path : null
      );
      const clientOptions: ClientOptions = {
        syntaxes: ["prisma"],
      };

      debug("serverOptions", serverOptions);
      debug("clientOptions", clientOptions);

      const client = new LanguageClient(
        "robb-j.prisma",
        nova.extension.name,
        serverOptions,
        clientOptions
      );

      client.start();

      nova.subscriptions.add(client as any);
      this.languageClient = client;

      this.setupLanguageServer(client);
    } catch (error) {
      console.log(error);
      console.log(error.stack);
    }
  }

  async stop() {
    debug("#stop");

    if (this.languageClient) {
      this.languageClient.stop();
      nova.subscriptions.remove(this.languageClient as any);
      this.languageClient = null;
    }
  }

  //

  setupLanguageServer(client: LanguageClient) {
    // ...
  }

  async getServerOptions(packageDir: string, debugPath: string | null) {
    const nodeArgs = ["--unhandled-rejections=warn"];
    const serverPath = nova.path.join(
      packageDir,
      "node_modules/@prisma/language-server/dist/src/cli.js"
    );

    if (DEBUG_INSPECT) {
      nodeArgs.push("--inspect-brk=9231", "--trace-warnings");
    }

    const nodePath = await this.findNodeJsPath();
    debug("nodePath", nodePath);

    if (!nodePath) {
      throw new Error("Node.js not installed on your $PATH");
    }

    if (debugPath) {
      const stdinLog = nova.path.join(debugPath, "stdin.log");
      const stdoutLog = nova.path.join(debugPath, "stdout.log");

      const args = nodeArgs.join(" ");
      const command = `${nodePath} ${args} "${serverPath}" --stdio`;

      return {
        type: "stdio",
        path: "/bin/sh",
        args: ["-c", `tee "${stdinLog}" | ${command} | tee "${stdoutLog}"`],
      } as ServerOptions;
    }

    return {
      type: "stdio",
      path: nodePath,
      args: [...nodeArgs, serverPath, "--stdio"],
    } as ServerOptions;
  }

  async findNodeJsPath(): Promise<string | null> {
    const { stdout, status } = await execute("/usr/bin/env", {
      args: ["which", "node"],
    });
    return status === 0 ? stdout.trim() : null;
  }
}
