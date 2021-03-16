import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field can\'t be empty',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field can\'t be empty',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      }
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
