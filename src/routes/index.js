const postsRouter = require('./posts.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const vs = "/api/v1"
  app.use(vs + '/posts', postsRouter);
  app.use(vs + '/users', usersRouter);
}
module.exports = routerApi;