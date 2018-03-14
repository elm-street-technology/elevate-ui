module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'elevate',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    html: {
      template: 'demo/index.html',
    },
  },
};
