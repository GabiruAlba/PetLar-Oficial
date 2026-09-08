# 🐾 PetLar

Sistema web desenvolvido para um petshop fictício chamado **PetLar**, como projeto acadêmico da disciplina de Fundamentos de Sistemas Web.

O projeto apresenta produtos e serviços para animais de estimação, além de permitir o cadastro de clientes e pets e o agendamento de serviços.

## 📌 Sobre o projeto

A PetLar é uma plataforma web para um petshop que oferece:

* Produtos para animais de estimação;
* Acessórios;
* Alimentos para cães e gatos;
* Produtos de higiene e limpeza;
* Serviço de banho e tosa;
* Serviço de banho e tosa com opção de tele-busca;
* Cadastro de clientes e pets;
* Agendamento de serviços.

O projeto foi desenvolvido inicialmente na **Fase 1**, utilizando HTML, e posteriormente aprimorado na **Fase 2**, com CSS, Bootstrap e JavaScript.

## 🚀 Funcionalidades

### Página inicial

* Apresentação da PetLar;
* Menu de navegação;
* Carrossel de imagens utilizando Bootstrap;
* Apresentação das categorias de produtos;
* Apresentação dos serviços oferecidos.

### Produtos

Os produtos estão organizados em categorias:

* Acessórios;
* Alimentação;
* Higiene e limpeza.

Os produtos são apresentados utilizando cards e grid responsivo do Bootstrap.

### Serviços

A PetLar oferece:

* Banho e Tosa;
* Banho e Tosa com Tele-busca.

A página possui opções para acessar o formulário de agendamento.

### Cadastro e agendamento

O formulário permite informar:

* Nome completo;
* CPF;
* Telefone;
* E-mail;
* Endereço;
* Sexo;
* Nome do pet;
* Raça;
* Idade;
* Tipo de pet;
* Observações;
* Serviço desejado;
* Método de atendimento;
* Data;
* Horário.

Também existe uma confirmação dos dados por meio de checkbox.

O formulário utiliza recursos de validação do próprio HTML, como `required`, `type="email"`, `type="number"`, `type="date"` e `type="time"`.

### JavaScript

O projeto utiliza JavaScript para adicionar comportamento ao formulário.

Atualmente, o envio do formulário é interceptado pelo JavaScript e apresenta uma mensagem de confirmação ao usuário.

## ♿ Acessibilidade

Foram aplicadas medidas de acessibilidade, incluindo:

* Utilização do atributo `alt` nas imagens;
* Utilização de `label` associado aos campos do formulário;
* Uso de atributos `aria-label` no carrossel;
* Estrutura semântica utilizando elementos como `header`, `nav`, `main`, `section`, `article` e `footer.

Essas medidas ajudam usuários que utilizam tecnologias assistivas, como leitores de tela.

## 🛠️ Tecnologias utilizadas

* **HTML5**: estrutura das páginas;
* **CSS3**: estilização e responsividade;
* **Bootstrap 5.3.3**: componentes visuais, grid, cards e carrossel;
* **JavaScript**: interatividade e comportamento do formulário;
* **Git/GitHub**: versionamento e armazenamento do projeto.

## 📁 Estrutura do projeto

```text
PetLar/
│
├── index.html
├── produtos.html
├── servicos.html
├── contato.html
├── cadastro.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── imagens/
```

### Descrição dos arquivos

| Arquivo         | Função                                          |
| --------------- | ----------------------------------------------- |
| `index.html`    | Página inicial e carrossel                      |
| `produtos.html` | Apresentação dos produtos                       |
| `servicos.html` | Apresentação dos serviços                       |
| `contato.html`  | Informações de contato                          |
| `cadastro.html` | Cadastro do cliente, pet e agendamento          |
| `css/style.css` | Estilos personalizados                          |
| `js/script.js`  | Funcionalidades JavaScript                      |
| `imagens/`      | Armazenamento das imagens utilizadas no projeto |

## 🎨 Responsividade

O projeto utiliza o sistema de grid do Bootstrap e regras CSS com `@media` para adaptar o conteúdo a diferentes tamanhos de tela.

Em telas menores, os elementos são reorganizados para melhorar a visualização em dispositivos móveis.

## 🔧 Ajustes realizados na Fase 2

Durante a evolução do projeto foram realizados ajustes para melhorar sua estrutura e utilização:

* Inclusão de Bootstrap;
* Criação de um arquivo CSS separado;
* Criação de um arquivo JavaScript separado;
* Implementação de carrossel na página inicial;
* Organização dos produtos em cards;
* Organização dos serviços em cards;
* Criação de formulário de cadastro e agendamento;
* Adição de validações HTML;
* Inclusão de recursos de acessibilidade;
* Implementação de comportamento JavaScript no envio do formulário;
* Adaptação das páginas para diferentes tamanhos de tela;
* Organização do código utilizando comentários e separação por arquivos.

## ▶️ Como executar

1. Baixe ou clone o projeto.
2. Abra a pasta `PetLar` no Visual Studio Code.
3. Abra o arquivo `index.html`.
4. Execute o projeto diretamente no navegador ou utilizando a extensão **Live Server** do Visual Studio Code.

O projeto utiliza o Bootstrap através de uma CDN, portanto é necessário ter acesso à internet para carregar os recursos do Bootstrap.

## 👨‍💻 Projeto acadêmico

Projeto desenvolvido como atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

**PetLar - Sistema Web para Petshop**
