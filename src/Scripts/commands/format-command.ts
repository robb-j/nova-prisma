import { createDebug, getLspRange, LspEdit } from "../utils";

const debug = createDebug("format");

export async function formatCommand(
  editor: TextEditor,
  client: LanguageClient
) {
  debug("format", editor.document.uri);

  const result = (await client.sendRequest("textDocument/formatting", {
    textDocument: {
      uri: editor.document.uri,
    },
    options: {
      tabSize: editor.tabLength,
      insertSpaces: editor.softTabs,
    },
  })) as LspEdit[] | null;

  if (!result) return;

  editor.edit((edit) => {
    for (const change of result.reverse()) {
      const lspRange = getLspRange(editor.document, change.range);
      edit.replace(lspRange, change.newText);
    }
  });
}
