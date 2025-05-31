module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  overrides: [
    {
      test: "./src/**/*.jsx", // Ensure .jsx files are processed
      presets: [
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }
  ]
}; 