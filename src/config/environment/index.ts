export const environment = {
  local: {
    production: false,
    isLocal: true,
    region: "eu-east-1",
    rds: {
        host: "localhost",
        port: 5432,
        database: "lambda-db",
        user: "postgres",
        password: "postgres"
    },
    ...process.env
  },
  production: {
    production: true,
    isLocal: false,
    region: process.env.AWS_REGION,
    rds: {
        hostname: "HOST",
        port: 5432,
        database: "db_example",
        secretId: "db-credentials"
    },
    ...process.env
  }
}