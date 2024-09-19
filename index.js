const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
const PORT = 3000 || process.env.PORT


server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`Employee management JSON Server is running at PORT ${PORT}`);
});
