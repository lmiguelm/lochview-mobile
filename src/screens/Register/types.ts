export type Genero = 'Masculino' | 'Feminino' | '';

export type Endereco = {
  pais: string;
  estado: string;
  cidade: string;
  cep: string;
  endereco: string;
  complemento?: string;
};

export type Telefone = {
  pais: string;
  ddd: string;
  numero: string;
  descricao: string;
  principal: boolean;
  ativo: boolean;
};

export type User = {
  nome: string;
  genero: Genero;
  cpf: string;
  email: string;
  senha: string;
  endereco: Endereco;
  telefone: Telefone[];
};
