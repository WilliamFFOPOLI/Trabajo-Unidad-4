const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const sequelize = require('./config/database');
const service = require('./services/productoService');

const packageDef = protoLoader.loadSync('./src/proto/producto.proto');
const proto = grpc.loadPackageDefinition(packageDef);

async function start() {
  await sequelize.sync();
  const server = new grpc.Server();
  server.addService(proto.ProductoService.service, service);

  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => server.start()
  );
}

start();
