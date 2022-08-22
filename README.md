# Boas vindas ao repositório do Blogs API!

<h2>Criação de uma API e um banco de dados para a produção de conteúdo para um blog!</h2>

</br>

 > Tecnologias: 

- Node.js, 
- Express
- Sequelize
- JWT


</br>

Instalação:

    git clone git@github.com:matheus-luz/project-blog-api.git

Entre na pasta do projeto:

    cd project-blogs-api
    npm install

Após isso crie um arquivo .env para inserir os seus dados do banco de dados:

    MYSQL_USER=SEU USUÁRIO
    MYSQL_PASSWORD=SUA SENHA
    HOSTNAME=SEU HOST
    JWT_SECRET=SEU SEGREDO DA CHAVE JWT
    
Agora que o arquivo está criado e com as informações corretas do banco, execute o comando abaixo para criação do banco de dados:

    npm run prestart

Rodando localmente:

    npm run start