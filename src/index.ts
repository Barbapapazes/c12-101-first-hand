import { loadTnuxConfig } from './config'

loadTnuxConfig().then((config) => {
  console.dir(config, { depth: null })
  console.log(process.env.AWESOME_ENV)
})
