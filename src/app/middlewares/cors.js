module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Method', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Max-Age', '10');
  next();
};

// SOP -> Same Origin Policy -> Politica de mesma origem - exclusivamente no navegador

// Origem: protocolo: //domínio: porta
// Saída: http://localhost:3000 - onde a requisição está chegando
// Destino: http://localhost:3000 - onde a requisição está chegando

// CORS -> Cross-Origin Resource Sharing -> compartilhamento de recursos entre origens cruzadas

// Simple Request

// Preflight request -> vai mandar uma request option antes da requisição para verificar os heads
