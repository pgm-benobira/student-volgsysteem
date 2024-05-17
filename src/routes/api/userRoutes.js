/**
 * ------------------------------
 *            IMPORTS
 * ------------------------------
*/

import Express from "express";

// Controllers
import { getAllUsers } from "../../services/User/getAllUsers.js";


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

// API Todos routes
router.get('/', getAllUsers);

export default router;