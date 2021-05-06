require('dotenv').config();

// A passport starategy for authenticating with a JSON Web Token
// This allows to authenticate endpoints using the token. 

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
// const User = mongoose.model('User');

