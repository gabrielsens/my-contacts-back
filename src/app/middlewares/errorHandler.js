// eslint-disable-next-line no-unused-vars
module.exports = (error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.log(error);
  response.sendStatus(500);
};
