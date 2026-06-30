# 🌊 Hayui - Beautiful Tailwind Component Library

[![npm version](https://img.shields.io/npm/v/@yourusername/hayui.svg)](https://www.npmjs.com/package/@yourusername/hayui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4)](https://tailwindcss.com)

A beautiful, modern component library built with **React**, **TypeScript**, and **Tailwind CSS**. Features Satoshi font typography, soft color palette, and works seamlessly with **React**, **Vue**, **Laravel Blade**, and plain HTML.

## ✨ Features

- 🎨 **Soft Color Palette** - Professional, non-saturated colors (Neutral, Blue, Green, Amber, Red)
- 🔤 **Satoshi Font** - Modern typography with weights 400 (Regular) and 500 (Semibold)
- 📦 **Zero Dependencies** - Only requires React and Tailwind CSS
- 🎯 **Framework Agnostic CSS** - Use utility classes in any framework or plain HTML
- 📱 **Fully Responsive** - Mobile-first, works on all screen sizes
- ♿ **Accessible** - WCAG AA compliant, proper semantic HTML
- 📖 **Well Documented** - Comprehensive guides and examples
- 🚀 **Production Ready** - Used in production applications
- 💯 **100% Free & Open Source** - MIT License

## 🎯 Components

- **Ember** (Button) - Primary, secondary, success, warning, danger variants
- **Breeze** (Card) - Flexible card containers with shadow control
- **Glow** (Input) - Form inputs with validation states
- **Flame** (Alert) - Info, success, warning, error alerts
- **More coming** - Badge, Modal, Dropdown, Toast, and more

## 🚀 Quick Start

### Installation

```bash
npm install @yourusername/hayui
# or
yarn add @yourusername/hayui
# or
pnpm add @yourusername/hayui
```

### Using in React

```jsx
import { Ember, Breeze, Glow, Flame } from '@yourusername/hayui';
import '@yourusername/hayui/dist/hayui.css';

function App() {
  return (
    <div>
      <Ember variant="primary">Click Me</Ember>
      
      <Breeze>
        <h3>Card Title</h3>
        <p>Card content goes here</p>
      </Breeze>
      
      <Glow label="Email" placeholder="Enter email" />
      
      <Flame type="success" title="Success!">
        Your data has been saved.
      </Flame>
    </div>
  );
}
```

### Using in Laravel Blade

```blade
<!-- Just import CSS -->
@import '@yourusername/hayui/dist/hayui.css';

<!-- Use utility classes -->
<button class="hayui-button-primary px-6 py-2 rounded-lg">
  Click Me
</button>

<div class="hayui-card p-6 rounded-lg">
  <h3 class="font-semibold">Card Title</h3>
  <p class="text-neutral-600">Card content</p>
</div>

<input class="hayui-input w-full px-4 py-2 rounded-lg border border-neutral-200">
```

### Using in Plain HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/@yourusername/hayui@latest/dist/hayui.css">
  <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
  <button class="hayui-button-primary px-6 py-2 rounded-lg">Click Me</button>
</body>
</html>
```

## 📚 Documentation

- **[Typography Guide](./docs/src/pages/guides/typography.astro)** - Satoshi font usage, sizes, and best practices
- **[Color Palette](./docs/src/pages/guides/colors.astro)** - Complete color reference with WCAG AA compliance
- **[React Components](./docs/src/pages/components/)** - Component documentation and props
- **[Laravel Blade Guide](./docs/src/pages/guides/laravel-blade.astro)** - Using Hayui in Laravel Blade templates
- **[Full Guides](./docs/src/pages/guides/)** - All design guides and best practices

## 🎨 Design System

### Satoshi Typography
- **Weight 400 (Regular)** - Body text, descriptions
- **Weight 500 (Semibold)** - Headings, buttons, emphasis (not heavy, stays modern)

### Soft Color Palette

**Neutral Palette** - 7 shades (50-600) for structure and backgrounds

**Soft Core Colors:**
- **Blue** - Primary actions and interactive elements
- **Green** - Success states and positive feedback
- **Amber** - Warnings and important notices
- **Red** - Errors and destructive actions

All colors are soft, non-saturated, and WCAG AA compliant.

## 📦 Package Contents

```
@yourusername/hayui/
├── dist/
│   ├── index.esm.js           React ESM export
│   ├── index.cjs.js           React CommonJS export
│   ├── index.umd.js           React UMD export
│   ├── hayui.css              Utility classes + Satoshi font
│   └── index.d.ts             TypeScript definitions
├── src/
│   ├── components/            React component source
│   ├── styles/globals.css     Base styles
│   └── index.ts               Main export
├── docs/                      Astro documentation
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js 16+
- npm 7+ / yarn / pnpm

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/hayui.git
cd hayui

# Install dependencies
npm install

# Build library
npm run build

# Build documentation
cd docs
npm install
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run build      # Build library for production
npm run dev        # Watch mode during development
npm run clean      # Remove build artifacts
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 🤝 Framework Support

### React ✅
```jsx
import { Ember } from '@yourusername/hayui';

<Ember variant="primary">Button</Ember>
```

### Vue 3 ✅
```vue
<template>
  <button class="hayui-button-primary">Button</button>
</template>
```

### Laravel Blade ✅
```blade
<button class="hayui-button-primary">Button</button>
```

### Plain HTML ✅
```html
<button class="hayui-button-primary">Button</button>
```

### Astro ✅
```astro
<button class="hayui-button-primary">Button</button>
```

## 📄 License

MIT License - See [LICENSE](./LICENSE) file

**What this means:**
- ✅ **Free to use** - Personally and commercially
- ✅ **Open source** - Can view and modify source code
- ✅ **Share & distribute** - Can share and distribute freely
- ✅ **Modify** - Can modify code for your needs
- ⚠️ **Include license** - Must include original license and copyright notice
- ⚠️ **No liability** - Provided as-is without warranty

## 🆓 Free & Open Source

Hayui is completely **free** and **open source** under the MIT License. You can:

- ✅ Download and use for free (personal or commercial)
- ✅ Modify the code for your needs
- ✅ Create derivative works
- ✅ Distribute your own versions
- ✅ Use in closed-source projects
- ✅ Use in open-source projects

**No commercial license required. No payment needed. No restrictions.**

## 🙌 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📝 Attribution

While not required, attribution is appreciated:

```html
<!-- Optional: Show your support -->
Built with <a href="https://github.com/yourusername/hayui">Hayui</a>
```

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/yourusername/hayui/issues)

## 💬 Support

- 📖 [Full Documentation](./docs/src/pages/)
- 🆘 [Issues & Questions](https://github.com/yourusername/hayui/issues)
- 💬 [Discussions](https://github.com/yourusername/hayui/discussions)

## 🚀 Roadmap

- [x] Core components (Button, Card, Input, Alert)
- [x] React components
- [x] TypeScript support
- [x] Tailwind CSS integration
- [x] Laravel Blade support
- [ ] Badge component
- [ ] Modal component
- [ ] Dropdown component
- [ ] Toast notifications
- [ ] Table component
- [ ] Form components (Checkbox, Radio, Toggle)
- [ ] Pagination component
- [ ] Tabs component

## 📊 Project Stats

- 🎨 5+ components ready
- 📦 0 dependencies (except React + Tailwind)
- 📄 700+ lines of documentation
- ⚡ < 50kb gzipped
- 🌍 Framework agnostic

## 🎓 Learning Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Satoshi Font](https://www.fontshare.com/fonts/satoshi)

## ✨ Credits

Built with ❤️ by [Your Name]

**Inspired by:**
- [Tailwind UI](https://tailwindui.com)
- [Headless UI](https://headlessui.com)
- [Shadcn/ui](https://ui.shadcn.com)

## 📄 Additional Legal

### Satoshi Font License

Satoshi is a free font available from [FontShare](https://www.fontshare.com/fonts/satoshi)

**License:** Open Font License (OFL)
- ✅ Free to download
- ✅ Free to use personally and commercially
- ✅ Can be embedded in web projects
- ⚠️ Cannot be sold
- ⚠️ Must include OFL license

For more details, see [Satoshi Font License](https://www.fontshare.com/fonts/satoshi)

### Tailwind CSS

Tailwind CSS is free and open source under the [MIT License](https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE)

### Third-Party Licenses

All dependencies are listed in `package.json`. Check their respective licenses:
```bash
npm license-report
```

## 🔐 Security

If you discover a security vulnerability, please email security@yourdomain.com instead of using the issue tracker.

## 📮 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Website: https://yourwebsite.com

---

## 🎉 Get Started

```bash
npm install @yourusername/hayui
```

Start building beautiful UIs with Hayui today!

**Made with ❤️ · Free & Open Source · MIT License**