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
4. Run the build
5. Bump the version in `extension.json`
6. Commit as `X.Y.Z`
7. Tag as `vX.Y.Z`
8. Remove [node_modules](https://devforum.nova.app/t/submitting-my-extension-fails-with-the-file-semver-couldnt-be-opened-because-there-is-no-such-file/652)
9. **Extensions** → **Submit to the Extension Library...**
