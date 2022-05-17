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

 # Dificuldades

 - 1 - Tive uma dificuldade com as tipagens dos eventos, principalmente com a parte de eventos dos inputs pois nunca achava o target
 - 2 - Não consegui pensar em uma lógica de paginação que fosse viável mediante a abordagem que adotei pra o frontend. Consegui até pensar em umas mas necessitaria alterações no backend e frontend e isso me custaria muito tempo! 
 - 3 - Mesmo não sendo exigido eu ainda tentei criar um layout de maneira flexivel podendo adaptar-se a telas pequenas. Segui um pouco a lógica do Mobile First na tomada de decições mas, muito provavelmente por alguma incompatibilidade com algum input, eu não consegui testar de maneira funcional em um smartphone.
 - 4 - Ao usar o SWR eu tive dificuldade com o mutate com o delete! Mesmo invocando ele após a minha chamada API de delete ele não modificava a minha lista.

 # Algumas considerações

  - Algumas escolhas que fiz durante o projeto me impossibilitaram de faze-lo 100% como eu desejava e infelizmente eu só descobri isso durante o processo, entretanto eu não me arrependo pois pude aprender na prática muitos conceitos que via apenas na teoria e alguns novos conceitos pra resolver os problemas que foram surgindo durante o processo! Alguns deles são: 
    - Cache de requisições com o SWR 
    - Desacoplamento de componentes: Decidi separar componentes com regras de negócio e componentes mais visuais exemplo: Modal)
    - Validações com o Yup no backend
    - Uso do prismaORM (Car@ dev que está lendo esse README, saiba que se você não usa o prisma ainda, ta perdendo tempo, aquilo é lindo e vou defender com todas as minhas forças <3. Caso use, favor desconsiderar esse comentário)
    - Docker: Eu já conhecia o docker mas nunca tinha implementado algo usando docker-compose, achei que foi muito mais tranquilo do que eu imaginava! Pretendo continuar a estudar essa tecnologia.
 - Car@ Dev que está lendo esse README, não sei ao certo se terei um feedback tecnico sobre meu projeto, mas caso não e você esteja disposto a conversar sem pretenções sobre o projeto eu gostaria de ouvir sua opinião pra evoluir mais nessa stack que eu tanto gosto! 