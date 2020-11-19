module.exports = {
    root: true,
    extends: ['alloy', 'alloy/react', 'alloy/typescript'],
    env: {
      jest: true,
    },
    plugins: ['react-hooks', 'monorepo-cop'],
    rules: {
      '@typescript-eslint/explicit-member-accessibility': 0,
      'monorepo-cop/no-disable-monorepo-no-relative-rule': 2,
      'monorepo-cop/no-relative-import-outside-package': 2,
      'react-hooks/exhaustive-deps': 1,
      'react-hooks/rules-of-hooks': 2,
      // To compatible `///<reference />` in .d.ts
      'spaced-comment': [
        2,
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['/'],
          },
        },
      ],
      'max-params': 0
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
  