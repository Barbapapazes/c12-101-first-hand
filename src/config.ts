import { loadConfig } from 'c12'

export async function loadTnuxConfig() {
  const { config } = await loadConfig({
    name: 'tnux',
    packageJson: true,
    globalRc: true,
    dotenv: true,
    overrides: {
      vite: {
        port: 1234,
      },
    },
    defaults: {
      app: {
        name: 'tnux',
        version: '0.0.1',
      },
      vite: {
        port: 3000,
      },
      tailwind: {
        themes: {
          colors: {
            primary: 'blue',
            secondary: 'gray',
          },
        },
      },
    },
  })

  return config
}
