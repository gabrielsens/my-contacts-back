const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    // response.send('Hello Word');
    const { orderBy } = request.query;

    const contacts = await ContactsRepository.findAll(orderBy);
    // Wildcard -> Curinga
    // response.setHeader('Access-Control-Allow-Origin', '*');

    // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.json(contacts);
    // response.send(request.appId);
  }

  async show(request, response) {
    // obter Um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Criar novo arquivo
    // response.send('its working');
    // response.send(request.body);
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' });
    }

    const contactExistsEmail = await ContactsRepository.findByEmail(email);

    if (contactExistsEmail) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.status(201).json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      return response.status(400).json({ error: 'Contact not exists.' });
    }

    const contactExistsEmail = await ContactsRepository.findByEmail(email);

    if (contactExistsEmail && contactExistsEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactsRepository.delete(id);
    // 204: no Content
    response.sendStatus(204);
  }
}
// Singleton
module.exports = new ContactController();
