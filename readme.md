# 🚀 My-Next13.40-Template

This repository is a pre-configured template for the **Next.js 13.4**. It's designed to fast-track the setup process for new projects.

The repository includes a number of tools and configurations already implemented, including:

- 🎯 **Next.js 13.4**: The latest version of the Next.js framework.
- 🧹 **ESLint**: To assist in code linting and identifying issues.
- ✨ **Prettier**: For automatic code formatting.
- 🐺 **Husky**: For automation of tasks using Git hooks.
- 🔍 **Lint-Staged**: To run the linter on staged files.

## Installation

To install and run this project, follow these steps:

1. Clone the repository on your local machine.
2. Navigate to the directory where the repository was cloned.
3. Install the dependencies using the command `yarn install`.
4. To start the development server, run the command `yarn dev`.

## Available Scripts

In addition to the development script, there are also:

- `yarn build`: Creates a build version of the project.
- `yarn start`: Starts the server in production mode.
- `yarn lint`: Runs code linting with ESLint.
- `yarn format`: Formats the code with Prettier.
- `yarn test:commit`: Runs Lint-Staged on staged files.

Please note, Husky will install the Git hooks after the dependencies are installed, ensuring the linter is run prior to each commit.

## License

© Igor Silva, 2023. All rights reserved.
