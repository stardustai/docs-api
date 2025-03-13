import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { config_latest } from './versions/latest.mts'
import { config_poc } from './versions/poc.mts'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'Latest', ...config_latest },
    poc: { label: 'Poc', ...config_poc }
  }
})
