const Hapi = require("hapi");
// const Hapi = require("@hapi/hapi");
// const routes = require('./routes');
// seharusnya spt diatas

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  //   server.route(routes);
// dikarenakan tidak mendukung versi terbaru hapi.js jd belum bisa dijalankan
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
