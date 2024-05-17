/**
 * ------------------------------
 *            IMPORTS
 * ------------------------------
*/

import Express from "express";

// Controllers
import userRoutes from "./userRoutes.js";

// Middleware


/**
 * ------------------------------
 *        CONFIGURATION
 * ------------------------------
*/

const router = Express.Router();


/**
 * ------------------------------
 *            ROUTING
 * ------------------------------
*/

router.use('/user', userRoutes)

export default router;