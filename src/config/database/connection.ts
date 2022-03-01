import { Pool } from 'pg';
import { getParameterSsm } from 'src/utils/getParameterSsm';
import { environment } from '../environment';


const env = environment[process.env.NODE_ENV || 'local']

let options = {
  host: env.rds.host,
  password: env.rds.password,
  user: env.rds.user,
  port: env.rds.port,
  database: env.rds.database,
  idleTimeoutMillis: 1000,
  ssl: false
};

if (!env.isLocal) {
  getParameterSsm(env.rds.secretId).then(({username, password}) => {
    options = {
      user: username,
      password,
      ssl: true,
      ...options
    }
  })
}


const pool = new Pool(options)

pool.on('connect', () => {
  console.info("Database Connected! ✅")
})

pool.on('remove', () => {
  console.log("Remove Idle database connection!")
})

pool.on('error', () => {
  console.error("Error in database connection! ❌")
})

// export default pool;

export default {
  query: (text: string, params?) => pool.query(text, params),
}