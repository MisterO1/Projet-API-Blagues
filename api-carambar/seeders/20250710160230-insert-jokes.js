'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jokes', [
      {
        question: "Quelle est la femelle du hamster ?",
        answer: "L’Amsterdam",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Que dit un oignon quand il se cogne ?",
        answer: "Aïe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est l'animal le plus heureux ?",
        answer: "Le hibou, parce que sa femme est chouette.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi le football c'est rigolo ?",
        answer: "Parce que Thierry en rit",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le sport le plus fruité ?",
        answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Que se fait un Schtroumpf quand il tombe ?",
        answer: "Un Bleu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le comble pour un marin ?",
        answer: "Avoir le nez qui coule",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Qu'est ce que les enfants usent le plus à l'école ?",
        answer: "Le professeur",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le sport le plus silencieux ?",
        answer: "Le para-chuuuut",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le comble pour un joueur de bowling ?",
        answer: "C’est de perdre la boule",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
        answer: "Parce que sinon ils tombent dans le bateau.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Que fait une fraise sur un cheval ?",
        answer: "Tagada tagada.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les squelettes ne se battent jamais entre eux ?",
        answer: "Ils n’ont pas le cœur à ça.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le comble pour un électricien ?",
        answer: "De ne pas être au courant.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les oiseaux ne tweetent-ils jamais la nuit ?",
        answer: "Parce qu’ils dorment.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est l’arbre préféré du chien ?",
        answer: "Le sapin… waff !",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        question: "Comment appelle-t-on un chat qui a travaillé dur ?",
        answer: "Un cat-apulte.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les tomates n’aiment-elles pas discuter ?",
        answer: "Parce qu’elles finissent toujours en purée.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le comble pour un plombier ?",
        answer: "De ne jamais être raccord.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Que dit une tasse à une autre tasse ?",
        answer: "Tu es dé-café-inée !",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jokes', null, {});
  }
};
