# Development notes

Code is heavily based off [robb-j/nova-yaml](https://github.com/robb-j/nova-yaml).

## Links

- [Prisma vscode syntax](https://github.com/prisma/language-tools/blob/master/packages/vscode/syntaxes/prisma.tmLanguage.json)
- [Syntax reference](https://docs.nova.app/syntax-reference)
- [Theme identifiers](https://docs.nova.app/extensions/themes/#styling-syntax-highlighting)
- [Symbol types](https://docs.nova.app/api-reference/symbol/#type)

## Release process

1. Ensure git is clean
2. Ensure the `CHANGELOG.md` is up-to-date
3. Generate new screenshots if needed
4. Bump the version in `extension.json`
5. Commit as `X.Y.Z`
6. Tag as `vX.Y.Z`
7. **Extensions** → **Submit to the Extension Library...**
