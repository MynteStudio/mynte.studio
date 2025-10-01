/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { inquiryThrottle } from './limiter.js'

const InquiryController = () => import('#inquiry/controllers/inquiry_controller')

router.on('/').renderInertia('home').as('home.render')

router.post('/inquiry', [InquiryController, 'execute']).use(inquiryThrottle).as('inquiry.execute')
