//
// Extension entry point
//

import { createDebug } from "./utils";
import { PrismaLanguageServer } from "./prisma-language-server";

const debug = createDebug("main");
let langServer: PrismaLanguageServer | null = null;

export function activate() {
  debug("#activate");

  langServer = new PrismaLanguageServer();
}

export function deactivate() {
  debug("#deactivate");

  if (langServer) {
    langServer.deactivate();
    langServer = null;
  }
}
