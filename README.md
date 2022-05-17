# Como rodar o backend

 - 1 - renomei o arquivo .env.example removendo o .example do final e preencha as informações
 - 2 - Suba o container do banco de dados com o comando `docker-compose up -d` (É necessário ter o docker e o docker-compose instalados)
 - 3 - Instale as dependências do projeto com o comando `npm install` ou `yarn`
 - 4 - Gere as tabelas com o comando `npm run generate` ou `yarn generate`
 - 5 - Rode a aplicação com o comando `npm run start` ou `yarn start`

 # Como rodar o frontend

 - 1 - renomei o arquivo .env.example removendo o .example do final e preencha as informações. Lá é esperado a baseURL da API
 - 2 - instale as dependências com o comando `npm install` ou `yarn`
 - 3 - rode a aplicação com `npm run start` ou `yarn start`