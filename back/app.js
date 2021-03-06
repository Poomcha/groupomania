// Import packages :
const express = require('express');
require('dotenv').config({ path: './.env' });
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
// const db = require(__dirname + '/models/index');
const session = require('express-session');
const sessionOptions = require('./config/cookie-config');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
};

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Import routes :
const userRoute = require('./routes/user');
const profilRoute = require('./routes/profile');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(session(sessionOptions));
app.use(cors(corsOptions));
app.use(limiter);

// Configuration des headers :
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Request-Headers', '*');
  // res.setHeader('Access-Control-Request-Method', 'GET, POST, PUT, DELETE');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Accept-Encoding, Accept-Language, Content-Length, Cross-Origin-Ressource-Policy'
  // );
  // res.setHeader('Access-Control-Allow-Credentials', false);
  // res.setHeader(
  //   'Access-Control-Allow-Methods',
  //   'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  // );
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

// Création du dossier ./images s'il n'existe pas :
fs.access('./images', fs.constants.F_OK, (error) => {
  if (error) {
    fs.mkdir('./images', (error) => {
      if (error) {
        throw error;
      } else {
        console.log('Création du dossier ./images.');
      }
    });
  }
});

// Chemin du dossier vers les images :
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(
  '/images_default',
  express.static(path.join(__dirname, 'images_default'))
);

// Import module auth :
const auth = require('./middleware/auth');

// Routage
app.use('/', userRoute);
app.use('/users', auth, profilRoute);
app.use('/posts', auth, postRoute);
app.use('/comments', auth, commentRoute);

module.exports = app;
