import Sequelize, { Model } from 'sequelize';

class HelpOrder extends Model {
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

export default HelpOrder;
