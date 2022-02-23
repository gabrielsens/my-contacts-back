const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get(
  '/contacts',
  (request, response, next) => {
    request.appId = 'MeuAppId';
    next();
    // response.send('Interceptado pelo Middleware');
  },
  ContactController.index,
);

/* router.use((request, response) => {
  request.appId = 'MeuAppId';
  response.send('Interceptado pelo Middleware');
});    DA PRA USAR O MIDDLEWARE NO ACIMA DAS ROTAS QUE DESEJA */

router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
