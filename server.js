const express = require('express');
const next = require('next');
const session = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(
      session({
        secret: process.env.SESSION_SECRET_COOKIE,
        resave: false,
        saveUninitialized: true,
      }),
    );

    server.get('*', (req, res) => {
      console.log('reqSession', req.session);
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
