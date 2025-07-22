import { config } from '@vue/test-utils'
import { beforeEach } from 'vitest'

// Configuración global de Vue Test Utils
beforeEach(() => {
  config.global.stubs = {}
})