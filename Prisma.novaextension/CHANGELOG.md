## Version 1.1.1

Fixes an issue where the extension creates `stdin.log` and `stdout.log` files
in your projects, sorry! Please remove these files.

## Version 1.1

This release updates the internal language server and improves syntax definitions.

- The language server has been upgraded from `2.27.0` to `3.1.103`,
  it will be automatically be installed when you next open a prisma file.
  It may take a while for the extension to start up the first time while it updates.
- The syntax definitions has been improved and is more aligned with the official
  Visual Studio Code extension.

<details>
<summary>Syntax change details</summary>

- Assignment's name is now `pcl.definition.property`
- Model-field's name is now `pcl.definition.property`
- Primitive types now match exact words, e.g. a `Interval` relation doesn't highlight `Int`
- Optional/array operators are now a `pcl.operator`
- Field attributes are now `pcl.identifier.decorator`
- Named parameters are now `pcl.identifier.argument`
- Builtins (e.g. `now()`) are now `pcl.identifier.type.builtin`
- Variables are now `pcl.identifier.constant`

</details>

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
