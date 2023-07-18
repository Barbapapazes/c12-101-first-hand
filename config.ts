export default {
  $dev: {
    minification: false,
    logLevel: 'debug',
    vite: {
      https: true,
    },
  },

  $staging: {
    minification: true,
    logLevel: 'debug',
    vite: {
      https: true,
    },
  },

  $prod: {
    minification: true,
    logLevel: 'error',
    vite: {
      https: true,
    },
  },
}
