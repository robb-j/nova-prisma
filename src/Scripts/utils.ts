//
// Utility files to help out and make code more readable
//

export type ProcessParams = ConstructorParameters<typeof Process>;
export type ProcessOutput = { stdout: string; stderr: string; status: number };

export const console: Console = (globalThis as any).console;

/**
 * Run a non-interactive process and get the stdout, stderr & status in one go
 * @param {ProcessParams[0]} path The path to the binary to run
 * @param {ProcessParams[1]} options How to run the process
 * @returns A promise of a ProcessOutput
 */
export function execute(
  path: ProcessParams[0],
  options: ProcessParams[1]
): Promise<ProcessOutput> {
  return new Promise<ProcessOutput>((resolve) => {
    const process = new Process(path, options);

    // Copy all stdout into an array of lines
    const stdout: string[] = [];
    process.onStdout((line) => stdout.push(line));

    // Copy all stderr into an array of lines
    const stderr: string[] = [];
    process.onStderr((line) => stderr.push(line));

    // Resolve the promise once the process has exited,
    // with the stdout and stderr as single strings and the status code number
    process.onDidExit((status) =>
      resolve({
        status,
        stderr: stderr.join("\n"),
        stdout: stdout.join("\n"),
      })
    );

    // Start the process
    process.start();
  });
}

/**
 * Generate a method for namespaced debug-only logging,
 * inspired by https://github.com/visionmedia/debug.
 *
 * - prints messages under a namespace
 * - only outputs logs when nova.inDevMode()
 * - converts object arguments to json
 */
export function createDebug(namespace: string) {
  return (...args: any[]) => {
    if (!nova.inDevMode()) return;

    const humanArgs = args.map((arg) =>
      typeof arg === "object" ? JSON.stringify(arg) : arg
    );
    console.info(`${namespace}:`, ...humanArgs);
  };
}
