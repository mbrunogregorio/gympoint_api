import Sequelize, { Model } from 'sequelize';

class Registry extends Model {
  static init(sequelize) {
    super.init(
      {
        // TODO add fields
      },
      { sequelize }
    );

    return this;
  }
}

export default Registry;
