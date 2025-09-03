# Contributing to Crate

Thank you for your interest in contributing to Crate! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/crate.git
   cd crate
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Build the project**
   ```bash
   pnpm build
   ```

4. **Link the CLI for local testing**
   ```bash
   pnpm link
   ```

## 🛠 Development Workflow

### Available Scripts

- `pnpm dev` - Run the CLI in development mode
- `pnpm build` - Build the TypeScript project
- `pnpm clean` - Clean build artifacts
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

### Code Style

- Use TypeScript for all code
- Follow the existing code style and patterns
- Use meaningful variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)
- Prefer functional programming patterns
- Use early returns for error conditions

### Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a PR
- Test on multiple platforms (Windows, macOS, Linux) when possible

## 📝 Making Changes

### Branch Naming

Use descriptive branch names:
- `feature/command-name` for new features
- `fix/issue-description` for bug fixes
- `docs/update-readme` for documentation updates

### Commit Messages

Follow conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(activate): add auto-migration support`
- `fix(store): resolve path resolution on Windows`
- `docs: update installation instructions`

### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the code style guidelines
3. **Add tests** for new functionality
4. **Update documentation** if needed
5. **Run the test suite** to ensure everything passes
6. **Submit a pull request** with a clear description

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Tested on [platforms]
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

1. **Environment information**
   - OS and version
   - Node.js version
   - Package manager version (npm/pnpm/yarn/bun)

2. **Steps to reproduce**
   - Clear, numbered steps
   - Expected vs actual behavior

3. **Additional context**
   - Error messages
   - Screenshots if applicable
   - Related issues

### Feature Requests

For feature requests, please:

1. **Check existing issues** to avoid duplicates
2. **Describe the use case** and why it would be valuable
3. **Provide examples** of how the feature would work
4. **Consider implementation complexity** and alternatives

## 🏗 Architecture

### Project Structure

```
src/
├── cli.ts              # Main CLI entry point
├── commands/           # Command implementations
│   ├── activate.ts
│   ├── disable.ts
│   ├── init.ts
│   └── migrate.ts
├── shims/             # Package manager shims
├── store.ts           # Global store management
├── utils.ts           # Utility functions
└── env.ts             # Environment management
```

### Key Concepts

- **Store**: Global package cache shared across projects
- **Shims**: Wrapper scripts that redirect package manager commands
- **Environment**: Shell environment modifications for activation

## 📋 Development Guidelines

### Error Handling

- Use early returns for error conditions
- Provide clear, actionable error messages
- Log errors appropriately for debugging

### Cross-Platform Compatibility

- Test on Windows, macOS, and Linux
- Use cross-platform path handling
- Consider shell differences (bash, PowerShell, etc.)

### Performance

- Minimize file system operations
- Cache frequently accessed data
- Optimize for large dependency trees

## 🤝 Community

### Getting Help

- Check existing issues and discussions
- Join our community discussions
- Ask questions in a respectful manner

### Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

## 📄 License

By contributing to Crate, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Crate! 🎉
