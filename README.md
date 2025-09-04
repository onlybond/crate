# 📦 Crate

[![CI](https://github.com/onlybond/crate/workflows/CI/badge.svg)](https://github.com/onlybond/crate/actions)
[![npm version](https://badge.fury.io/js/@onlybond/crate.svg)](https://badge.fury.io/js/@onlybond/crate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> A virtual environment for Node.js — like Python's `venv`, but for `npm`, `pnpm`, `yarn`, and `bun`.

Crate replaces `node_modules/` with a clean, isolated `.crate/` folder and a global package store.  
You can activate Crate in any project and keep using your favorite package manager exactly the same way —  
but everything installs into `.crate/lib` instead of polluting your project with `node_modules/`.

## ✨ Features

- 🚀 **Faster installs** — reuse packages from a global store
- 🧹 **No giant node_modules/** — projects stay clean
- 🔄 **Works with all package managers** (npm, pnpm, yarn, bun)
- 🛠 **No new workflow** — keep typing `npm install` or `pnpm add`, Crate redirects automatically
- 🔒 **Isolation per project** — no accidental cross-pollution
- 🎯 **Zero configuration** — works out of the box

---

## 🚀 Installation

Install Crate globally:

```bash
pnpm install -g @onlybond/crate
# or
npm install -g @onlybond/crate
```

---

## 🔹 Usage

### 1. Initialize a project

Explicitly set up Crate in your project:

```bash
crate init
```

This creates a `.crate/` folder and prepares the environment.

---

### 2. Migrate from `node_modules`

If you already have dependencies in `node_modules/`:

```bash
crate migrate
```

This moves them into Crate's store and links them into `.crate/lib`,
then removes `node_modules/`.

---

### 3. Activate the environment

The main command:

```bash
crate activate
```

✅ What happens:

* If `.crate/` doesn't exist, Crate **auto-migrates** your project.
* Environment variables (`NODE_PATH`, `PATH`) are updated.
* Shims for **npm, pnpm, yarn, bun** are installed into `.crate/bin/`.
* Your shell prompt changes to show you're inside Crate.

Exit any time with:

```bash
exit
```

(or just close your terminal tab/window).

---

### 4. Disable the environment

To return to standard `node_modules` mode:

```bash
crate disable
```

This will reinstall all dependencies into `node_modules/` and clean up the Crate environment.

---

## 🔹 Example Workflow

```bash
pnpm add react

# Start Crate
crate activate

# Inside Crate (prompt shows `(crate:project)`)
npm install lodash
yarn add typescript
bun add express
pnpm add chalk

# Verify: no node_modules created
ls node_modules   # ❌ not found
ls .crate/lib     # ✅ contains react, lodash, typescript, express, chalk

exit
# Back to normal environment
```

---

## 📂 Project Layout

```
my-app/
 ├── package.json
 ├── pnpm-lock.yaml
 ├── .crate/
 │   ├── lib/         # packages linked here instead of node_modules
 │   ├── bin/         # shims for npm, pnpm, yarn, bun
 │   └── manifest.json
```

Global cache (shared across all projects):

```
~/.crate/store/
 ├── react@19.1.1/
 ├── lodash@4.17.21/
 ├── typescript@5.6.3/
 └── express@4.21.0/
```

---

## 🔹 Why Crate?

* 🚀 **Faster installs** — reuse packages from a global store.
* 🧹 **No giant node_modules/** — projects stay clean.
* 🔄 **Works with all package managers** (npm, pnpm, yarn, bun).
* 🛠 **No new workflow** — keep typing `npm install` or `pnpm add`, Crate redirects automatically.
* 🔒 **Isolation per project** — no accidental cross-pollution.

---

## 🛣 Roadmap

* [x] Init & migrate commands
* [x] Activation with environment prompt
* [x] Shims for npm, pnpm, yarn, bun
* [x] Disable command to return to node_modules
* [ ] Proper dependency tree resolution (flattening like pnpm)
* [ ] Windows/macOS/Linux full parity testing
* [ ] Deactivation helper (`crate deactivate`)

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/onlybond/crate.git
cd crate

# Install dependencies
pnpm install

# Build the project
pnpm build

# Link for local testing
pnpm link
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Code Quality

```bash
# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

## 📋 Roadmap

- [x] Init & migrate commands
- [x] Activation with environment prompt
- [x] Shims for npm, pnpm, yarn, bun
- [x] Disable command to return to node_modules
- [ ] Proper dependency tree resolution (flattening like pnpm)
- [ ] Windows/macOS/Linux full parity testing
- [ ] Deactivation helper (`crate deactivate`)
- [ ] Plugin system for custom package managers
- [ ] Integration with popular IDEs

## 🐛 Issues & Support

- 🐛 [Report a bug](https://github.com/onlybond/crate/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/onlybond/crate/issues/new?template=feature_request.md)
- 💬 [Join discussions](https://github.com/onlybond/crate/discussions)

## 🔒 Security

Please see our [Security Policy](SECURITY.md) for information about reporting security vulnerabilities.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Python's `venv` and `virtualenv`
- Built with TypeScript and Node.js
- Thanks to all [contributors](https://github.com/onlybond/crate/graphs/contributors) who help make this project better

---

<div align="center">
  <strong>Made with ❤️ by the Crate community</strong>
</div>
