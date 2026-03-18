# Contributing Guide

Thanks for lending a hand 👋

## Development

### Setup

Install dependencies

```bash
bun install
```

Start the Demo server

```bash
bun run build:lib:dev
bun run playground
```

### Packages Structure

- `src/components`: Contains all the components.
- `src/hooks`: Contains all the hooks.
- `src/utils`: Contains all the utility functions.
- `src/styles`: Contains all the global styles.
- `src/index.ts`: Exports all the components, hooks, and utility functions.
- `src/extensions`: Contains all the extensions.

### Coding conventions

- We use ESLint to lint and format the codebase. Before you commit, all files will be formatted automatically.
- We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Please use a prefix. If your PR has multiple commits and some of them don't follow the Conventional Commits rule, we'll do a squash merge.
