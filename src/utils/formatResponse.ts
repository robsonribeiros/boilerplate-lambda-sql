
export const formatResponse = (statusCode = 200, data = {}) => {
  return {
    statusCode,
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data)
  }
}