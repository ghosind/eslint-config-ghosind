# eslint-config-ghosind

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/23504ce6183f4ea8b6a266e5c3f06e1f)](https://www.codacy.com/gh/ghosind/eslint-config-ghosind/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ghosind/eslint-config-ghosind&amp;utm_campaign=Badge_Grade)
![NPM](https://img.shields.io/npm/v/eslint-config-ghosind)
![License](https://img.shields.io/github/license/ghosind/eslint-config-ghosind)

A simple ESLint configuration based on [esling-config-airbnb](https://github.com/airbnb/javascript).

## Usage

1. Install `eslint`, `eslint-config-ghosind`, and `eslint-config-airbnb-base` as development dependencies.

```bash
npm install --save-dev eslint eslint-config-ghosind eslint-config-airbnb-base
```

2. Initialize ESLint configurations with you want.

```bash
npx eslint --init
```

- Install `eslint-plugin-import` as development dependencies if you're not install them in eslint initialization step.

```bash
npm install --save-dev eslint-plugin-import
```

- `eslint-config-ghosind` added Typescript support in rules, and these rules require package `typescript-eslint`. So, you need to install `@typescript-eslint/eslint-plugin`, and `@typescript-eslint/parser` packages as development dependencies even if you're not using Typescript in your project.

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

3. Put `eslint-config-ghosind` into `extends` field of `eslintrc` file.

```json
{
  "extends": [
    "eslint-config-ghosind"
  ]
}
```

## TypeScript supports

For Typescript users, please add the following settings into configuration file after above instructions.

After install dependencies, please put the following settings into `eslintrc` file.

```json
{
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  }
}
```
