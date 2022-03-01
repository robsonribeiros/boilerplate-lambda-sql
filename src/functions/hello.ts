import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from "aws-lambda";
import { formatResponse } from "src/utils";
import db from '../config/database/connection';

export const handler: APIGatewayProxyHandler = async ( event: APIGatewayProxyEvent, context: Context ) => {

  context.callbackWaitsForEmptyEventLoop = false;


  const {rows, rowCount} = await db.query("SELECT * from users");

  const response = formatResponse(201, { message: `Hello World!! ==== ${rowCount}`, result: JSON.parse(JSON.stringify(rows)) })

  return response
}



// callback: Callback<APIGatewayProxyResult>