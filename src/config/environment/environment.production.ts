export const environment = {
  production: true,
  isLocal: false,
  region: process.env.AWS_REGION,
  rds:{
      hostname: "HOST",
      port: 5432,
      database: "db_example",
      secretId: "db-credentials"
  },
  ...process.env
};