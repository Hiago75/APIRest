"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Nome precisa ter entre 2 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Sobrenome precisa ter entre 2 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Este e-mail já está em uso',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A idade precisa ser um numero inteiro',
          },
        },
      },
      curso: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      turma: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models){
    this.hasMany(models.Photo, {foreignKey: 'aluno_id'})
  }
} exports.default = Aluno;
