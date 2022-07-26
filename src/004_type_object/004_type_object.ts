const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown; // Index Signature
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
