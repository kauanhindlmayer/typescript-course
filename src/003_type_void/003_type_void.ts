function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Kauan',
  sobrenome: 'Hindlmayer',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Kauan', 'Hindlmayer');
pessoa.exibirNome();

export { pessoa };
