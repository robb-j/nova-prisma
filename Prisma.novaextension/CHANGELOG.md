## Version 1.0

First release!

This release adds optional schema formatting and syntax highlighting improvements.

- You can now globally enable "formatOnSave" which will automatically
  format your `.schema` files whenever you save them.
  The style is defined by Prisma themselves and
  this is opt-in feature, enable it in extension preferences.
- You can manually format a document with the **Format schema** command.
- Support for `@@` attributes in a model like `@@map(...)` or `@@ignore`.

## Version 0.2.0

Improved syntax highlighting

- Enum's values definition are now a `.definition.property`
- Remove whitespace on config assignment's symbols
- Remove whitespace on model fields
- Relation types are now a `.identifier.variable`
- Field attributes are now a `.identifier.argument`
- Global methods are now a `.processing`

## Version 0.1.2

Reduce bundle size

## Version 0.1.1

Fixes an instillation bug

## Version 0.1

First pre-release

- Initial syntax definition
- LangaugeServer for completions, hovers and linting
