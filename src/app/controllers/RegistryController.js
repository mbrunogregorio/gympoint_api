import * as Yup from 'yup';
import Registry from '../models/Registry';

class RegistryController {
  /**
   * Method list student
   */
  async index(req, res) {
    const list = await Registry.findAll({
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
    });
    return res.json(list);
  }

  /**
   * Method store student
   */
  async store(req, res) {
    return res.json();
  }

  /**
   * Method update student
   */
  async update(req, res) {
    return res.json();
  }

  /**
   * Method list student
   */
  async delete(req, res) {
    return res.json();
  }
}

export default new RegistryController();
