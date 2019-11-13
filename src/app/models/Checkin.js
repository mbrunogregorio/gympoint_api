import Sequelize, { Model } from 'sequelize';

class Checkin extends Model {
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

export default Checkin;
