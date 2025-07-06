# @monorepo-infrastructure

A battle-tested monorepo starter template featuring production-ready libraries, applications, and shared configurations. This template has been used in production environments for over 4 years and provides a solid foundation for building scalable monorepos.

## 🚀 Features

- **Production-tested**: Used in real production environments for 4+ years
- **Lerna-powered**: Independent versioning and publishing with Lerna Lite
- **TypeScript-first**: Full TypeScript support across all packages
- **Vite integration**: Fast builds and development experience
- **Shared configurations**: Centralized configs for consistency
- **Workspace management**: NPM workspaces for efficient dependency management
- **Node.js 22**: Latest LTS version with Volta for version management

## 📁 Structure

```
monorepo-infra/
├── applications/          # Full Node.js applications
│   ├── static-generator/  # Example: Static file generator
│   └── docker-app/        # Example: Docker containerized app
├── libraries/             # NPM libraries (Vite + TypeScript)
│   ├── ui-components/     # Example: React component library
│   └── utils/             # Example: Utility functions
├── configurations/        # Shared configurations
│   ├── eslint-config/     # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
│   └── vite-config/       # Shared Vite configuration
├── lerna.json            # Lerna configuration
├── package.json          # Root package configuration
└── README.md             # This file
```

### Applications

Full Node.js applications that can be deployed independently. Examples include:
- **Static generators**: Build tools that output static files
- **Docker applications**: Containerized services
- **CLI tools**: Command-line utilities
- **Web servers**: Express/Fastify applications

### Libraries

Reusable NPM packages built with Vite and TypeScript:
- **UI components**: React/Preact component libraries
- **Utility functions**: Shared business logic and helpers
- **Type definitions**: Common TypeScript interfaces
- **Build tools**: Custom build scripts and configurations

### Configurations

Shared configurations to maintain consistency across packages:
- **ESLint configs**: Code quality and style rules
- **TypeScript configs**: Compiler options and type checking
- **Vite configs**: Build tool configurations
- **Jest configs**: Testing framework setup

## 🛠️ Getting Started

### Prerequisites

- Node.js 22.17.0+ (managed by Volta)
- npm 11.4.2+ (managed by Volta)

### Installation

1. **Clone this repository**:
   ```bash
   git clone <your-repo-url>
   cd monorepo-infra
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify setup**:
   ```bash
   npx lerna list
   ```

## 📦 Package Management

### Adding a New Package

1. **Create a new library**:
   ```bash
   mkdir libraries/my-library
   cd libraries/my-library
   npm init -y
   ```

2. **Create a new application**:
   ```bash
   mkdir applications/my-app
   cd applications/my-app
   npm init -y
   ```

3. **Create a new configuration**:
   ```bash
   mkdir configurations/my-config
   cd configurations/my-config
   npm init -y
   ```

### Working with Packages

- **Install dependencies**: `npm install` (from root)
- **Run scripts**: `npx lerna run <script-name>`
- **Build all packages**: `npx lerna run build`
- **Test all packages**: `npx lerna run test`
- **Publish packages**: `npx lerna publish`

## 🔧 Development Workflow

### Local Development

1. **Start development mode**:
   ```bash
   npx lerna run dev
   ```

2. **Watch for changes**:
   ```bash
   npx lerna run watch
   ```

3. **Build for production**:
   ```bash
   npx lerna run build
   ```

### Testing

- **Run all tests**: `npx lerna run test`
- **Run tests with coverage**: `npx lerna run test:coverage`
- **Run tests in watch mode**: `npx lerna run test:watch`

### Linting and Formatting

- **Lint all packages**: `npx lerna run lint`
- **Fix linting issues**: `npx lerna run lint:fix`
- **Format code**: `npx lerna run format`

## 🚀 Publishing

### Version Management

This monorepo uses independent versioning, meaning each package can have its own version:

```bash
# Version all packages
npx lerna version

# Version specific packages
npx lerna version --scope=@your-org/package-name
```

### Publishing Packages

```bash
# Publish all packages
npx lerna publish

# Publish specific packages
npx lerna publish --scope=@your-org/package-name
```

## 🏗️ Best Practices

### Package Structure

Each package should follow this structure:
```
package-name/
├── src/           # Source code
├── dist/          # Built output
├── tests/         # Test files
├── package.json   # Package configuration
├── tsconfig.json  # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md      # Package documentation
```

### Naming Conventions

- **Packages**: Use kebab-case (`my-package-name`)
- **Scopes**: Use your organization name (`@your-org/package-name`)
- **Directories**: Use kebab-case for directories
- **Files**: Use kebab-case for files

### Dependencies

- **Peer dependencies**: For libraries that depend on frameworks (React, Vue, etc.)
- **Dev dependencies**: For build tools and testing frameworks
- **Regular dependencies**: For runtime dependencies

## 🔍 Troubleshooting

### Common Issues

1. **Workspace not found**: Run `npm install` from the root
2. **Build failures**: Check TypeScript configuration and dependencies
3. **Publishing issues**: Verify npm authentication and package.json configuration

### Debug Commands

```bash
# Check workspace status
npx lerna list

# Check for dependency issues
npx lerna exec -- npm ls

# Clean all node_modules
npx lerna clean
```

## 📚 Examples

This template includes example packages to demonstrate best practices:

- **Example Library**: `libraries/example-lib` - Shows how to create a reusable library
- **Example Application**: `applications/example-app` - Demonstrates a full application
- **Example Configuration**: `configurations/example-config` - Shows shared configuration setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

This monorepo template is built on the shoulders of:
- [Lerna](https://lerna.js.org/) - Monorepo management
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) - Package management

---

**Ready to build your next monorepo?** Start with this battle-tested template and scale your development workflow! 🚀

