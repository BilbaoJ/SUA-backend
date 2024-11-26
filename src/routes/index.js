const authRouter = require('./auth.router');
const postsRouter = require('./posts.router');
const usersRouter = require('./users.router');
const { requestValid } = require('../middlewares/token.middleware');

function routerApi(app) {
  const vs = '/api/v1';
  app.use(vs + '/auth', authRouter);
  app.use(requestValid);
  app.use(vs + '/posts', postsRouter);
  app.use(vs + '/users', usersRouter);
}
module.exports = routerApi;
