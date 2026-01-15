# @variation/design-system

Cross-framework design system with Tailwind CSS for Astro, React, and pure HTML.

## Features

- 🎨 **Design Tokens**: Colors, typography, spacing, animations
- ⚛️ **React Components**: Button, Input, Card, Badge, Spinner, Alert
- 🎯 **Tailwind Preset**: Use the design system with any framework
- 📖 **Storybook**: Interactive component documentation
- ✨ **Subtle Animations**: Purposeful micro-interactions
- ♿ **Accessible**: ARIA-compliant components
- 🧪 **Tested**: 100% test coverage

## Installation

```bash
npm install @variation/design-system
```

## Usage

### With React

```tsx
import { Button, Input, Card } from '@variation/design-system';

function App() {
  return (
    <Card>
      <Input label="Email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### With Tailwind CSS (Any Framework)

Configure your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@variation/design-system/tailwind-preset')],
  content: [
    // your content paths...
  ],
};
```

Then use Tailwind classes directly in HTML or any framework:

```html
<!-- Astro, HTML, Vue, Svelte, etc. -->
<button class="px-4 py-2 bg-primary-500 text-white font-medium rounded-button
               transition-all duration-200 hover:bg-primary-600 hover:scale-[1.02]">
  Button
</button>
```

### Design Tokens

```ts
import { colors, typography, spacing, animations } from '@variation/design-system';

console.log(colors.primary['500']); // #D38475
console.log(typography.fontFamily.sans); // ['Pretendard', ...]
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, outline, ghost variants |
| `Input` | Text input with label and error states |
| `Card` | Container with header, content, footer |
| `Badge` | Status indicators with dot and pulse |
| `Spinner` | Loading indicator with multiple sizes |
| `Alert` | Info, success, warning, error messages |

## Animations

Subtle, purposeful animations included:

- `animate-fade-in` / `animate-fade-out`
- `animate-slide-up` / `animate-slide-down`
- `animate-scale-in`
- `animate-pulse-subtle`
- `animate-spin` / `animate-spin-slow` / `animate-spin-fast`

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run dev

# Run tests
npm test

# Build library
npm run build
```

## License

MIT
