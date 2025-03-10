import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { config_latest } from './versions/latest.mts'
import { config_v1 } from './versions/1.0.0.mts'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'Latest', ...config_latest },
    '1.0.0': { label: '1.0.0', ...config_v1 }
  }
})
