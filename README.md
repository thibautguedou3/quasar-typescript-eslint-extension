# Quasar Typescript Eslint app extension

This extension provides a basic eslint configuration and prettier to a quasar project already using typescript. If you don't have it installed on a project, see: https://github.com/thibautguedou3/quasar-typescript-extension

# Install

- Add extension to your dependencies:

```bash
 npm install -D git+ssh://github.com:thibautguedou3/quasar-typescript-eslint-extension
```

- Then invoke the extension in your quasar project:

```bash
quasar ext invoke typescript-eslint-extension
```

- You can now run `quasar dev` and see that the project is running and that eslint errors and warning will be shown in your terminal and/or code editor

## Prompts

- Do you use VSCode ?

> This extension will add to your `settings.json` the appropriate configuration for vetur, eslint and prettier to work together

- Do you want us to fix the lint errors in your project ?

> By the end of the installation, we can launch `npm run lint -- --fix` to automaticaly fix errors that can be fixed

# Uninstall

```bash
quasar ext remove typescript-eslint-extension
```

# Donate

If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
