const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  require('dotenv').config();
}

const { join } = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 1337;
const dist = join(__dirname, 'dist');

app.use(compression());
app.use(helmet());
app.use(express.static(dist));

if (isDev) {
  app.use(require('morgan')('dev'));
  app.use(require('cors')());
}

app.use('/api/images', require('./routes/images'));
app.use('/api/image', require('./routes/image'));
app.use('/api/artist', require('./routes/artist'));
app.use(require('./lib/errorHandlers').sendErrorMessage);

if (!isDev) {
  app.get('*', (req, res) => {
    res.sendFile(join(dist, 'index.html'));
  });
}

app.listen(port, () => {
  console.log('Express is up on port', port);
});
