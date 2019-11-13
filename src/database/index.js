import Sequelize from 'sequelize';

import Checkin from '../app/models/Checkin';
import HelpOrder from '../app/models/HelpOrder';
import Plan from '../app/models/Plan';
import Registry from '../app/models/Registry';
import Student from '../app/models/Student';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User, Student, Registry, Plan, Checkin, HelpOrder];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
