# Development notes

Code is heavily based off [robb-j/nova-yaml](https://github.com/robb-j/nova-yaml).

## Setup

To work on the extension, you will need to have [Node.js](https://nodejs.org/en/) (version 16+)
and [Nova](https://nova.app) installed on your development machine. Then run:

```sh
# cd to/this/folder

# install NPM dependencies
npm install
```

## Regular use

For development, use the `Development` task to build and run the extension locally.
**Build** will compile the TypeScript into JavaScript into the extension folder.
**Run** will do the build, install bundled dependencies and activate the extension in Nova.
Nova will run the extension locally and restart when any file inside the `.novaextension` changes,
i.e. by running the **Build** task.

> Make sure to disable the extension if a published version is already installed.

When in development mode, the extension outputs extra information to the Debug Pane,
which can be shown with **View** → **Show Debug Pane**.

Use the files in the [examples](/examples) folder to test out different features of the language server.

## Code formatting

This repository uses [Prettier](https://prettier.io/),
[yorkie](https://www.npmjs.com/package/yorkie)
and [lint-staged](https://www.npmjs.com/package/lint-staged) to
automatically format code when staging code git commits.

You can manually run the formatter with `npm run format` if you want.

Prettier ignores files using [.prettierignore](/.prettierignore)
or specific lines after a `// prettier-ignore` comment.

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
