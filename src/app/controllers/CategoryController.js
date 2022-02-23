const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) { // Retorna todas as Categorias
    // Error Handler (Middle Express) -> Manipulador de Erros
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async store(request, response) { // Cria uma nova Categoria
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }

  async show(request, response) { // Retorna uma categoria pelo ID
    const { id } = request.params;

    const category = await CategoryRepository.findById({ id });

    if (!category) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(category);
  }

  async update(request, response) { // Atualiza uma categoria pelo ID
    const { id } = request.params;

    const { name } = request.body;

    const CategoryExist = await CategoryRepository.findById({ id });

    if (!CategoryExist) {
      response.status(404).json({ error: 'Category not exist' });
    }

    const category = await CategoryRepository.update({ id }, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const category = await CategoryRepository.delete({ id });

    response.status(204).json(category);
  }
}

module.exports = new CategoryController();
