**Prisma** provides deep integration with **Prisma**, including syntax highlighting, code completion, linting.

<!--
🎈 It can also be helpful to include a screenshot or GIF showing your extension in action:
-->

<img src="https://raw.githubusercontent.com/robb-j/nova-prisma/main/Prisma.novaextension/Images/extension/linting.png" width="800" alt="Prisma Extension adds Prisma schema support to Nova">

## Requirements

Prisma requires some additional tools to be installed on your Mac:

- [Node.js 8.2.0](https://nodejs.org) and NPM 5.2.0 or newer

> To install the current stable version of Node, click the "Recommended for Most Users" button to begin the download. When that completes, double-click the **.pkg** installer to begin installation.

## Usage

Prisma runs any time you open a local project, automatically lints all open files, then reports errors and warnings in Nova's **Issues** sidebar and the editor gutter:

<img src="https://raw.githubusercontent.com/robb-j/nova-prisma/main/Prisma.novaextension/Images/extension/linting.png" width="800" alt="Prisma Extension adds Prisma Schema support to Nova">

Prisma intelligently suggests completions for you as you write:

<img src="https://raw.githubusercontent.com/robb-j/nova-prisma/main/Prisma.novaextension/Images/extension/completions.png" width="800" alt="See completion options as you write">

Prisma displays relevant documentation when you hover over symbols:

<img src="https://raw.githubusercontent.com/robb-j/nova-prisma/main/Prisma.novaextension/Images/extension/hovers.png" width="800" alt="Get tooltips when writting Prisma files">

Prisma can automatically format your schemas on-save if you want,
this can be turned on in **Configuration**.
You can manually format prisma documents with the **Format Schema** command
when a schema is open.

### Configuration

To configure global preferences, open **Extensions → Extension Library...** then select Prisma's **Preferences** tab.

<!-- You can also configure preferences on a per-project basis in **Project → Project Settings...** -->
