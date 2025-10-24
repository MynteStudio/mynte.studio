/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('/legal-disclaimer').renderInertia('legal_disclaimer')
router.on('/terms-of-service').renderInertia('terms_of_service')
