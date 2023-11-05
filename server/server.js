const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
app.use(express.json());
var cors = require('cors');
app.use(cors());


app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const userrouter = require('./routes/user_routes');
const OAuthRouter = require('./routes/OAuth_routes');
const cartController = require('./routes/cart_routes');

app.use(userrouter);
app.use(OAuthRouter);
app.use(cartController);

app.listen(5000, () => { console.log(`Server started on port http://localhost:5000`) });
