module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'forward', 'include', 'mixin', 'function'],
      },
    ],
  },
}
