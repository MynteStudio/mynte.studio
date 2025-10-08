import { createTuyau } from '@tuyau/client'
import { api } from '../../../.adonisjs/api.js'

export const tuyau = createTuyau({ baseUrl: import.meta.env.VITE_APP_URL, api })
