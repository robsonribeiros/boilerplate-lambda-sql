import * as AWS from 'aws-sdk';

const secretsmanager = new AWS.SecretsManager({
  region: process.env.REGION
})

export async function getParameterSsm(SecretId: string) {
  const response = await secretsmanager.getSecretValue({ SecretId }).promise()
  if (!response) throw new Error(`canot get secret id [ ${SecretId} ] in Secrets Manager`);

  const data = JSON.parse(response.SecretString);
  return {
    username: data.username,
    password: data.password
  }
}