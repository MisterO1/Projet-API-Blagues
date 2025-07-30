'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jokes', [
      {
        question: "Pourquoi les développeurs n’aiment-ils pas la nature ?",
        answer: "Parce qu’il y a trop de bugs.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Combien de programmeurs faut-il pour changer une ampoule ?",
        answer: "Aucun, c’est un problème hardware.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi JavaScript et Java ne sont-ils pas pareils ?",
        answer: "Pour la même raison que car et caramel ne sont pas les mêmes choses.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Un développeur entre dans un bar...",
        answer: "...il oublie le point-virgule, tout s’écroule.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les devs front-end dépriment-ils parfois ?",
        answer: "Parce qu’ils sont toujours dans des états instables.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi le codeur a-t-il été licencié ?",
        answer: "Il n’arrêtait pas de boucler.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quelle est la langue maternelle d’un développeur web ?",
        answer: "HTMLlement.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les devs détestent les escaliers ?",
        answer: "Parce qu’ils préfèrent les boucles.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Comment s’appelle un dev en pause ?",
        answer: "Un processus suspendu.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quelle est la boisson préférée d’un dev ?",
        answer: "Un Java.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les bugs n’ont pas peur des devs ?",
        answer: "Parce qu’ils savent qu’ils reviendront toujours.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Qu’est-ce qu’un `404` au restaurant ?",
        answer: "Un plat introuvable.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les devs aiment les cafés sombres ?",
        answer: "Parce qu’ils ont l’habitude du dark mode.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quelle est la danse préférée des développeurs ?",
        answer: "Le bugaloo.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi Git est comme une ex ?",
        answer: "Tu crois que t’as tourné la page, mais un `merge` peut tout faire revenir.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi un dev ne peut pas être magicien ?",
        answer: "Il a toujours besoin de debugger.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le sport préféré des devs ?",
        answer: "Le ping (et parfois le pong).",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Que fait un développeur quand il est amoureux ?",
        answer: "Il commit.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les devs ne bronzent pas ?",
        answer: "Parce qu’ils passent leur vie derrière un écran.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quelle est la commande préférée d’un dev stressé ?",
        answer: "Ctrl+Z.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi le code a rompu avec le dev ?",
        answer: "Il le trouvait trop dépendant.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quelle est la phobie des devs back-end ?",
        answer: "Le front.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est le cauchemar d’un dev ?",
        answer: "Un bug en production le vendredi à 18h.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Qu’est-ce qu’un développeur végétarien ?",
        answer: "Un gars qui refuse de bouffer du spaghetti code.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi les devs sont-ils toujours fatigués ?",
        answer: "Ils passent leur temps à 'compiler' leurs idées.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Comment un dev séduit-il ?",
        answer: "Il affiche ses attributs.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quel est l’animal préféré d’un dev ?",
        answer: "Le python.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Quelle est la pire punition pour un développeur ?",
        answer: "Faire du CSS sans framework.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Qu’est-ce qu’un dev dit à sa console quand il part en vacances ?",
        answer: "`Bye world!`",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Pourquoi un développeur ne peut pas être en retard ?",
        answer: "Il est toujours en mode asynchrone.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jokes', null, {});
  }
};
