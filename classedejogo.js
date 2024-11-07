
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataques = {
        'mago': 'magia',
        'guerreiro': 'espada',
        'monge': 'artes marciais',
        'ninja': 'shuriken'
      };
  
      const ataque = ataques[this.tipo.toLowerCase()] || 'ataque desconhecido';
      console.log(`${this.nome}, o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso com os nomes solicitados
  const heroi1 = new Heroi('Artur', 30, 'guerreiro');
  heroi1.atacar();
  
  const heroi2 = new Heroi('Had', 25, 'mago');
  heroi2.atacar();
  
  const heroi3 = new Heroi('Sakura', 28, 'monge');
  heroi3.atacar();
  
  const heroi4 = new Heroi('Tandero', 35, 'ninja');
  heroi4.atacar();
