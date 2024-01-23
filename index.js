class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    dadosHeroi(){
        console.log(`O ${this.tipo} se chama ${this.nome} e tem ${this.idade} anos!`)
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;

            case "guerreiro":
                ataque = "espada";
                break;

            case "monge":
                ataque = "artes marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;

            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

const mago = new Heroi("Merlin", 35, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");
const monge = new Heroi("Aang", 15, "monge");
const ninja = new Heroi("Naruto", 21, "ninja");

mago.dadosHeroi();
mago.atacar();
guerreiro.dadosHeroi();
guerreiro.atacar();
monge.dadosHeroi();
monge.atacar();
ninja.dadosHeroi();
ninja.atacar();