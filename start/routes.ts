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
router.on('/legal-disclaimer').renderInertia('legal_disclaimer').as('legal_disclaimer.render')
router.on('/terms-of-service').renderInertia('terms_of_service').as('terms-of-service.render')

router.post('/inquiry', [InquiryController, 'execute']).use(inquiryThrottle).as('inquiry.execute')
