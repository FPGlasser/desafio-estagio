import { Router } from "express";
import {AuthController} from '../controllers'

const router: Router = Router()

const authController = new AuthController()

router.post('/login', authController.login)
router.get('/logout', authController.logout)

export {router as AuthRouter}