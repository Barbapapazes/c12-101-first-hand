export default {
  // extends: './config.ts',
  vite: {
    port: 5678,
  },

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
