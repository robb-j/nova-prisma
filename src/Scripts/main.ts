//
// Extension entry point
//

import { createDebug, getEditor } from "./utils.js";
import { PrismaLanguageServer } from "./prisma-language-server.js";
import { formatCommand } from "./commands/format-command.js";

const debug = createDebug("main");
let langServer: PrismaLanguageServer | null = null;

export function activate() {
  debug("#activate");

  langServer = new PrismaLanguageServer();

  nova.workspace.onDidAddTextEditor((editor) => {
    editor.onWillSave(async () => {
      if (editor.document.syntax !== "prisma") return;

      if (nova.config.get("robb-j.prisma.formatOnSave", "boolean") ?? false) {
        await nova.commands.invoke("robb-j.prisma.format", editor);
      }
    });
  });
}

export function deactivate() {
  debug("#deactivate");

  if (langServer) {
    langServer.deactivate();
    langServer = null;
  }
}

nova.commands.register(
  "robb-j.prisma.format",
  getEditor(async (editor) => {
    if (!langServer?.languageClient) return;

    await formatCommand(editor, langServer.languageClient).catch((error) => {
      debug(error.message);
      debug(error.stack);
    });
  }),
);
