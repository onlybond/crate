# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability within Crate, please follow these steps:

### 1. **DO NOT** create a public GitHub issue

Security vulnerabilities should be reported privately to protect users until a fix is available.

### 2. Report the vulnerability

Please report security vulnerabilities by emailing us at [security@example.com](mailto:security@example.com) with the following information:

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Any suggested fixes (if you have them)

### 3. What to expect

- We will acknowledge receipt of your report within 48 hours
- We will provide regular updates on our progress
- We will work with you to understand and resolve the issue quickly
- We will credit you in our security advisories (unless you prefer to remain anonymous)

### 4. Disclosure timeline

- **Initial response**: Within 48 hours
- **Status update**: Within 7 days
- **Fix release**: Within 30 days (for critical vulnerabilities)
- **Public disclosure**: After the fix is released and users have had time to update

## Security Best Practices

When using Crate, please follow these security best practices:

### 1. Keep Crate updated

Always use the latest version of Crate to ensure you have the latest security fixes.

### 2. Verify package integrity

Crate uses the same package verification mechanisms as your chosen package manager (npm, pnpm, yarn, bun). Always verify package signatures when possible.

### 3. Review dependencies

Regularly audit your project dependencies for known vulnerabilities:

```bash
# Using npm
npm audit

# Using pnpm
pnpm audit

# Using yarn
yarn audit
```

### 4. Use lock files

Always commit your lock files (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`) to ensure reproducible builds and consistent dependency versions.

### 5. Be cautious with global packages

Avoid installing packages globally unless necessary, and always verify the source and integrity of global packages.

## Security Features

Crate implements several security features:

- **Isolation**: Each project's dependencies are isolated in the `.crate/` directory
- **Global store**: Shared packages are stored in a secure global location
- **Shim verification**: Package manager shims are verified before execution
- **Path sanitization**: All paths are properly sanitized to prevent directory traversal

## Contact

For security-related questions or concerns, please contact us at [security@example.com](mailto:security@example.com).

---

**Note**: This security policy is subject to change. Please check back regularly for updates.
