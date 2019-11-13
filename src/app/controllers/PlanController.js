import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  /**
   * Method list Plan
   */
  async index(req, res) {
    const list = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
    });
    return res.json(list);
  }

  /**
   * Method store Plan
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .required()
        .min(1),
      price: Yup.number()
        .required()
        .min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, title, duration, price } = await Plan.create(req.body);
    return res.json({ id, title, duration, price });
  }

  /**
   * Method update plan
   */
  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number().min(1),
      price: Yup.number().min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const plan = await Plan.findByPk(req.params.id);
    const { id, duration, price } = await plan.update(req.body);
    return res.json({ id, duration, price });
  }

  /**
   * Method list plan
   */
  async delete(req, res) {
    return res.json();
  }
}

export default new PlanController();
