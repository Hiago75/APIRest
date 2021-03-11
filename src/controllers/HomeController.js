import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Giovana',
      sobrenome: 'Alves',
      email: 'giovanaalves73@gmail.com',
      idade: 15,
      curso: 'Design Digital',
      turma: 'Segunda a Sexta 19PM',
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
