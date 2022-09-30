/* eslint-disable @typescript-eslint/no-var-requires */
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(`${process.cwd()}/certs/localhost-key.pem`),
  cert: fs.readFileSync(`${process.cwd()}/certs/localhost.pem`),
};

app
  .prepare()
  .then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(3000, () => {
      console.log(`${process.cwd()}/certs/localhost-key.pem`);
      console.log('> running on https://localhost:3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
