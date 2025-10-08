/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const InquiryController = () => import('#controllers/inquiry_controller')

router.on('/').renderInertia('home').as('home.render')
router.post('/inquiry', [InquiryController, 'execute']).as('inquiry.execute')
