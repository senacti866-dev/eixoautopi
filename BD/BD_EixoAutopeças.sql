create database db_EixoAuto;
use db_EixoAuto;

create table Tb_fornecedor(
for_ID int primary key not null,
for_nome varchar(45) not null,
for_senha varchar(8) not null,
for_linksite varchar(2100),
for_inscricao int not null,
for_endereco int not null,
foreign key (for_endereco) references Tb_Endereco (end_ID),
foreign key (for_inscricao) references Tb_inscricao(ins_CNPJ)
);

create table Tb_cliente(
cli_ID int primary key not null auto_increment,
cli_nome varchar(45) not null,
cli_senha varchar(8) not null,
cli_inscricao int not null,
cli_endereco int not null,
foreign key (cli_endereco) references Tb_Endereco (end_ID),
foreign key (cli_inscricao) references Tb_inscricao(ins_CNPJ)
);

create table Tb_inscricao(
ins_CNPJ bigint primary key not null,
ins_InscricaoEstadual int not null unique
);

create table Tb_endereco(
end_ID int primary key not null auto_increment,
end_CEP int,
end_Rua varchar(45) not null,
end_Bairro varchar(45) not null,
end_Numero int not null,
end_Cidade varchar(45) not null,
end_Estado varchar(15) not null
);

create table Tb_email(
ema_ID int primary key not null auto_increment,
ema_Email1 varchar(319) not null,
ema_Email2 varchar(319),
ema_Email3 varchar(319),
ema_Outros varchar(319),
ema_fornecedor int not null,
ema_cliente int not null,
foreign key (ema_fornecedor) references Tb_fornecedor(for_ID),
foreign key (ema_cliente) references Tb_cliente(cli_ID)
);

create table Tb_Telefone(
tel_ID int primary key not null auto_increment,
tel_Telefone bigint not null,
tel_Celular bigint,
tel_Fixo bigint,
tel_Outros bigint,
tel_fornecedor int not null,
tel_cliente int not null,
foreign key (tel_fornecedor) references Tb_fornecedor(for_ID),
foreign key (tel_cliente) references Tb_cliente(cli_ID)
);

create table Tb_Produto(
pro_ID int primary key not null auto_increment,
pro_CodigoFabricante varchar(20) unique not null,
pro_Nome varchar(100) not null,
pro_Descricao varchar(800), 
pro_Aplicacao varchar(500),
pro_Preco float not null,
pro_Estoque int not null,
pro_Link varchar(2100),
pro_codigoOriginal varchar(20) not null,
pro_Fornecedor int not null,
pro_CompraPagamento int not null,
pro_CodSimilar int not null,
foreign key (pro_fornecedor) references Tb_fornecedor(for_ID),
foreign key (pro_CompraPagamento) references Tb_CompraDireta(Com_ID),
foreign key (pro_CodSimilar) references Tb_CompraDireta(Sim_ID)
);

create table Tb_ProdutoCodSimilar(
Sim_ID int primary key not null auto_increment,
Sim_CodigoSimilar1 varchar(20),
Sim_CodigoSimilar2 varchar(20),
Sim_CodigoSimilar3 varchar(20),
Sim_CodigoSimilar4 varchar(20)
);

create table Tb_CompraDireta(
Com_ID int primary key not null auto_increment,
Com_Preco float not null,
Com_Status varchar(20) not null,
Com_Quantidade int not null,
Com_Data date,
Com_Produto int not null,
Com_FormaPagamento varchar(45) not null,
Com_Frete int not null,
foreign key (Com_Produto) references Tb_Produto(Pro_ID),
foreign key (Com_Frete) references Tb_CompraFrete(Fre_ID),
foreign key (Com_FormaPagamento) references Tb_CompraPagamento(Pag_ID)
);

create table Tb_CompraFrete(
Fre_ID int primary key not null auto_increment,
Fre_Valor float not null,
fre_DataEntrega date
);

create table Tb_CompraPagamento(
Pag_ID int primary key not null auto_increment,
Pag_FormaPagamento varchar(45) not null
);