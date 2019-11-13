import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  /**
   * Method list student
   */
  async index(req, res) {
    const list = await Student.findAll({
      attributes: ['id', 'name', 'email', 'age', 'weight', 'height'],
    });
    return res.json(list);
  }

  /**
   * Method store student
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().min(15),
      weight: Yup.number().min(40),
      height: Yup.number().min(100),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });
    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    );

    return res.json({ id, name, email, age, weight, height });
  }

  /**
   * Method update student
   */
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().min(15),
      weight: Yup.number().min(40),
      height: Yup.number().min(100),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email: req.body.email },
      });
      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists' });
      }
    }

    const { id, name, age, weight, height } = await student.update(req.body);

    return res.json({ id, name, email, age, weight, height });
  }

  /**
   * Method list student
   */
  async delete(req, res) {
    return res.json();
  }
}

export default new StudentController();
