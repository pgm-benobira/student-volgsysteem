/**
 * ------------------------------
 *            IMPORTS
 * ------------------------------
*/

import express from "express";
import { create } from "express-handlebars";
import bodyParser from "body-parser";
import { VIEWS_PATH, PORT } from "./consts.js";
import cookieParser from "cookie-parser";


// Middleware
import jwtAuth from "./middleware/jwtAuth.js";
import AuthLoginValidation from "./middleware/validation/AuthLoginValidation.js";

// Controllers
import * as ctr from "./controllers/pages/index.js";
import * as auth from "./controllers/AuthController.js";

// Routes
import apiRoutes from "./routes/api/index.js";
import privateRoutes from "./routes/private-routes/index.js";

/**
 * ------------------------------
 *       CONFIGURATION
 * ------------------------------
*/
const app = express();

// Make use of the cookie parser 🍪 middleware
app.use(cookieParser());

const hbs = create({
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH);

// Static files
app.use(express.static("public"));

// View the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * ------------------------------
 *            ROUTING
 * ------------------------------
*/

// —— Public routes | Auth routes ——
app.get('/welcome', ctr.welcomePage);

app.get("/login", jwtAuth, auth.login);
app.post("/login", AuthLoginValidation ,auth.postLogin, auth.login);

app.get("/logout", auth.logout);

// —— Public routes | Error routes ——
app.get("/not-found", ctr.errorPage);
app.get("/unauthorized", ctr.errorPage);

// —— Private routes ——
app.use("/", privateRoutes)

// temporary page to show all components leave it here for now
app.get('/components', ctr.componentsPage);

// —— API Routes ——
app.use("/api", apiRoutes);

// —— Error routes ——
app.use(ctr.errorPage);

/**
 * ------------------------------
 *        START SERVER
 * ------------------------------
*/
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}/.`);
});