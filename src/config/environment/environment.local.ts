export const environment = {
  production: false,
  isLocal: true,
  region: "eu-east-1",
  rds:{
      host: "localhost",
      port: 5432,
      database: "lambda-db",
      user: "postgres",
      password: "postgres"
  },
  ...process.env
};