# Form Input Detector - Figma Plugin

<div align="center">
  <img src="assets/icon.png" alt="Form Input Detector Logo" width="128">
  <h3>Automatically detect and classify form input types in your Figma designs</h3>
</div>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#development">Development</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## Features

- 🎯 Detects 20+ different input types
- 🔍 Smart detection based on labels, icons, and dimensions
- ♿ Accessibility suggestions and improvements
- 📱 Mobile-friendly recommendations
- 🎨 Form design best practices
- ⚡ Fast and efficient processing

## Installation

1. Open Figma
2. Go to Menu > Plugins > Browse Plugins
3. Search for "Form Input Detector"
4. Click "Install"

## Usage

### Quick Start
1. Select form input components
2. Run the plugin
3. Review detected types
4. Apply suggestions

[View Quick Start Guide](./QUICK_START.md)

### Supported Input Types

- Text-based inputs (text, email, password)
- Numeric inputs (number, range)
- Date & time inputs
- Selection inputs (checkbox, radio)
- Special inputs (file, color)
- Button types

## Documentation

- [Quick Start Guide](./QUICK_START.md)
- [Form Design Guidelines](./FORM_DESIGN_GUIDELINES.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Publishing Guide](./PUBLISHING_GUIDE.md)

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Figma desktop app

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/alyohara/form-input-detector.git
   cd form-input-detector
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Build the plugin
   ```bash
   npm run build
   ```

4. Import in Figma
   - Open Figma Desktop
   - Go to Plugins > Development > Import plugin from manifest
   - Select the manifest.json file

### Development Commands

```bash
# Build the plugin
npm run build

# Watch for changes
npm run watch

# Run tests
npm test

# Lint code
npm run lint
```

## Project Structure

```
form-input-detector/
├── src/
│   ├── code.ts
│   └── ui.html
├── docs/
│   ├── QUICK_START.md
│   ├── FORM_DESIGN_GUIDELINES.md
│   └── TROUBLESHOOTING.md
├── assets/
│   └── icon.png
├── manifest.json
├── package.json
└── tsconfig.json
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Code Style

- Follow TypeScript best practices
- Use meaningful variable names
- Add comments for complex logic
- Include tests for new features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- [Open an issue](https://github.com/alyohara/form-input-detector/issues)
- [Join our community](https://forum.figma.com/plugins)
- [Read the documentation](./docs)

## Acknowledgments

- Figma Plugin API Team
- Contributing developers
- Our amazing community

---

<div align="center">
   Made with ❤️ by <a href="https://github.com/alyohara">Angel Leonardo Bianco</a>
</div> 
