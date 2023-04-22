import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const data =  [
  {
    "title": "Prise de décision & comportement",
    "description": "Ces biais peuvent orienter la prise de décision ou le comportement de la personne, en se basant sur les choix proposés ou des informations mises en valeurs.",
    "tableData": [
      {
        "name": "",
        "description": ""
      },
      {
        "name": "Biais d'ancrage",
        "description": "La tendance à s'appuyer trop lourdement (ou à \"ancrer\") sur un trait ou une information pour prendre des décisions. C’est généralement sur la première information acquise sur ce sujet."
      },
      {
        "name": "Biais de disponibilité",
        "description": "La tendance à privilégier et surestimer les informations immédiatement disponibles à notre mémoire, en particulier lorsqu'elles sont stéréotypées. Les personnes s'abstiennent de rechercher de nouvelles informations qui pourraient éclairer la question sous un autre jour, de manière plus générale, plus rationnelle, plus objective."
      },
      {
        "name": "Effet par défaut",
        "description": "Lorsqu’on a le choix entre plusieurs options, la tendance à privilégier celle par défaut."
      },
      {
        "name": "Effet de dénomination",
        "description": "La tendance à dépenser plus d'argent quand il est libellé en petites quantités (pièces de monnaie, petits billets) plutôt que de grandes quantités (gros billets, factures)."
      },
      {
        "name": "Aversion à la dépossession",
        "description": "La tendance à exiger beaucoup plus d'abandonner un objet possédé qu'on ne serait prêts à payer pour l'acquérir. Son corollaire: la tendance à attribuer une plus grande valeur à un objet que l'on possède, qu’à un même objet que l'on ne possède pas."
      },
      {
        "name": "Effet Forer ou Effet Barnum",
        "description": "La tendance des individus à croire que des descriptions de la personnalité s'appliquent et ont spécialement été conçues pour eux. Ces descriptions sont en fait suffisamment vagues et générales pour s'appliquer à un large éventail de personnes. (s'applique à l'astrologie, la divination, et certains types de tests de personnalité)."
      },
      {
        "name": "Effet IKEA",
        "description": "La tendance à accorder une valeur démesurée aux objets qu’on a partiellement assemblés, tels que les meubles IKEA, quelle que soit la qualité du résultat final."
      },
      {
        "name": "Effet de vérité illusoire",
        "description": "La tendance à croire qu'un énoncé est vrai s'il est plus facile à traiter ou s'il a été énoncé plusieurs fois, quelle que soit sa véracité réelle."
      },
      {
        "name": "Effet de simple exposition",
        "description": "La tendance à exprimer un sentiment positif ou une attirance pour les choses simplement par familiarité avec celles-ci."
      },
      {
        "name": "Illusion monétaire",
        "description": "La tendance à se concentrer sur la valeur nominale (valeur faciale) de la monnaie plutôt que sur sa valeur en termes de pouvoir d'achat."
      },
      {
        "name": "Biais de statu quo",
        "description": "La résistance au changement et attitude mentale dans laquelle toute nouveauté est perçue comme engendrant plus de risques que d'avantages. En conséquence les individus aiment que les choses restent relativement les mêmes ou évoluent le moins possible."
      },
      {
        "name": "Biais d'unité",
        "description": "La tendance à vouloir absolument finir les tâches commencées. Cette logique s’applique au cinéma mais également pour les portions de plat : la taille d'une portion est perçue comme appropriée, poussant les personnes à « finir leur assiette » même si c’est trop pour elles."
      },
      {
        "name": "Biais d'autorité",
        "description": "La tendance à surévaluer ou attribuer une plus grande précision à l’opinion d’une figure faisant office d'autorité sur un sujet et à être plus influencée par cette opinion."
      }
    ]
  },
  {
    "title": "Raisonnement et résolution de problème",
    "description": "Ces biais peuvent changer la manière de raisonner ou de résoudre des problèmes et mener les personnes à des conclusions erronées.",
    "tableData": [
      {
        "name": "",
        "description": ""
      },
      {
        "name": "Biais d'automatisation",
        "description": "La tendance à privilégier les résultats des systèmes automatisés au dépend de ceux générés par des systèmes non-automatisés. Elle peut conduire à des informations automatisées erronées, annulant les décisions correctes qui auraient été prises par des systèmes non automatisés."
      },
      {
        "name": "Effet de groupe",
        "description": "La tendance à faire (ou à croire) des choses parce que beaucoup d'autres personnes font (ou croient) la même chose. Relatif à la pensée de groupe et au comportement du troupeau."
      },
      {
        "name": "Biais de confirmation",
        "description": "La tendance à rechercher, à interpréter, à privilégier et à mémoriser les informations qui confirment ses idées préconçues ou ses propres hypothèses et à accorder moins de poids aux autres."
      },
      {
        "name": "Malédiction de la connaissance",
        "description": "La tendance des personnes expertes dans un domaine à perdre la capacité à transmettre leur savoir et à se mettre à la place des non-initiées au fur et à mesure de l’accroissement de leur savoir dans ce domaine."
      },
      {
        "name": "Actualisation hyperbolique",
        "description": "La tendance à préférer davantage les gains immédiats par rapport aux gains ultérieurs. Lorsque la personne a le choix entre deux récompenses, elle aura tendance à préférer celle qu’elle peut recevoir tout de suite, même si sa valeur est inférieure à l’autre récompense."
      },
      {
        "name": "Loi de l'instrument",
        "description": "La confiance excessive dans un outil ou des méthodes familières, ignorant ou sous-estimant les approches alternatives. \"Si tout ce que vous avez est un marteau, tout ressemble à un clou.\"."
      },
      {
        "name": "Biais pro-innovation",
        "description": "La tendance à avoir un optimisme excessif ou préférence à l'égard d'une option ou invention du simple fait de son caractère novateur, sans en identifier les limites et les faiblesses."
      },
      {
        "name": "Effet de rime",
        "description": "La tendance à percevoir les dictons et aphorismes comme plus précis et véridiques lorsqu'ils riment. « Blanc sur rouge rien ne bouge, rouge sur blanc, tout fout l'camp »."
      },
      {
        "name": "Peur de rater quelque chose (FoMO)",
        "description": "La peur qu'éprouvent les personnes lorsqu'elles pensent qu'elles risquent de rater une occasion sociale, une nouvelle expérience, un investissement rentable, etc. Cette anxiété sociale se caractérise par le désir de rester en contact permanent avec ce que font les autres."
      }
    ]
  },
  {
    "title": "Mémoire et souvenirs",
    "description": "Ces biais peuvent influencer des choix en faisant appel à la mémoire ou aux souvenirs de la personne concernée.",
    "tableData": [
      {
        "name": "",
        "description": ""
      },
      {
        "name": "Biais d'information",
        "description": "La tendance à rechercher d'avantage d'informations en pensant que cela nous mènera à prendre de meilleures décisions, même quand cela ne peut pas affecter l'action."
      },
      {
        "name": "Paréidolie",
        "description": "Un stimulus vague et aléatoire souvent une image ou un son est perçu comme significatif. Par exemple, voir des images d'animaux ou de visages dans des nuages, etc."
      },
      {
        "name": "Effet de bizarrerie",
        "description": "Un élément bizarre est mieux retenu qu'un élément commun."
      },
      {
        "name": "Effet de contexte",
        "description": "La mémoire dépend du contexte. Les souvenirs hors contexte sont plus difficiles à récupérer que les souvenirs en contexte. Par exemple, le temps de rappel et la précision d'une mémoire liée au travail seront plus faibles à la maison."
      },
      {
        "name": "Effet d'humour",
        "description": "On se souvient plus facilement des éléments humoristiques que des éléments non-humoristiques."
      },
      {
        "name": "Effet de supériorité de l'image",
        "description": "Les concepts appris en visionnant des images sont rappelés plus facilement et plus fréquemment que les concepts appris en visionnant leurs contreparties sous forme écrite. Les stimuli visuels ont un impact émotionnel bien plus important et restent bien plus longtemps à l’esprit que les textes."
      },
      {
        "name": "Effet de primauté",
        "description": "Il est plus facile de se souvenir des éléments situés au début et à la fin d'une séquence ; les éléments au milieu sont les moins susceptibles d'être retenus."
      },
      {
        "name": "Effet d'espacement",
        "description": "Il est plus efficace de se rappeler une information si son exposition est répétée sur une longue période et espacée dans le temps plutôt que concentrée sur une courte durée."
      },
      {
        "name": "Effet verbatim",
        "description": "La tendance à se souvenir mieux de « l'essentiel » de ce que quelqu'un a dit que la formulation textuelle exacte. En effet, les souvenirs sont des représentations et non des copies exactes."
      },
      {
        "name": "Effet d'isolation (Von Restorff)",
        "description": "La tendance à mieux se remémorer celui qui diffère le plus des autres lors d'une exposition à plusieurs objets similaires."
      }
    ]
  },
  {
    "title": "Interview et test utilisateur",
    "description": "Ces biais peuvent vous influencer directement en tant que designer, lors de vos entretiens ou tests, et risquent de modifier le résultat de votre recherche. Ils influencent les personnes que vous allez interviewer ou qui vont tester vos produits et services.",
    "tableData": [
      {
        "name": "",
        "description": ""
      },
      {
        "name": "Biais de l'angle mort",
        "description": "La tendance à se considérer moins biaisé que les autres, ou à identifier plus de biais cognitifs chez les autres que chez soi."
      },
      {
        "name": "Biais de congruence",
        "description": "La tendance à vouloir tester exclusivement une hypothèse sans tester les hypothèses alternatives. Dans une expérience, un sujet testera sa propre hypothèse au lieu d’essayer de la réfuter."
      },
      {
        "name": "Biais de désirabilité sociale",
        "description": "La tendance à donner une opinion plus correcte sur le plan social que sa véritable opinion, afin d'éviter d'offenser qui que ce soit."
      },
      {
        "name": "Effect de courtoisie",
        "description": "La tendance à préférer donner un avis positifis, ne pas exprimer pleinement son mécontentement à l'égard d'un service ou produit, dans une tentative d'être polies et courtoises envers la personne qui pose la question."
      },
      {
        "name": "Biais rétrospectif",
        "description": "Parfois appelée l'effet « je savais tout », la tendance à voir les événements passés comme prévisibles au moment où ils se sont produits."
      },
      {
        "name": "Illusion de validité",
        "description": "La tendance à surestimer sa capacité d'interpréter et prédire avec précision le résultat d'une analyse, en particulier lorsque les informations disponibles sont cohérentes ou corrélées et que les données « racontent une histoire cohérente »."
      },
      {
        "name": "Biais de négativité",
        "description": "Phénomène psychologique par lequel les humains se souviennent davantage des souvenirs déplaisants que des souvenirs positifs."
      },
      {
        "name": "Biais d'observation",
        "description": "La tendance des chercheurs à manipuler inconsciemment une expérience ou interprète de manière erronée les données afin d'atteindre ce résultat spécifique attendu au départ."
      },
      {
        "name": "Stéréotype",
        "description": "La tendance à croire qu'un membre d'un groupe présente certaines caractéristiques perçues comme communes à ce groupe sans disposer d'informations réelles sur cet individu."
      },
      {
        "name": "Règle du pic et de la fin",
        "description": "La tendance à juger une expérience en grande partie basée sur la façon dont on se sentait à son apogée (son point le plus intense) et à sa fin, plutôt que sur la somme totale ou moyenne de chaque moment de l'expérience."
      }
    ]
  },
  {
    "title": "Travail d'équipe et réunion",
    "description": "Ces biais peuvent modifier la façon dont des groupes de personnes vont travailler collectivement et interagir en influençant leurs choix, que ce soit dans une salle de réunion ou dans leur vie quotidienne en général",
    "tableData": [
      {
        "name": "",
        "description": ""
      },
      {
        "name": "Effet Dunning – Kruger",
        "description": "La tendance des personnes non-qualifiées à surestimer leurs propres capacitées et celle des personnes expertes à sous-estimer les leurs."
      },
      {
        "name": "Effet de cadrage",
        "description": "La tendance à tirer des conclusions différentes de la même information, en fonction de la manière dont cette information est présentée."
      },
      {
        "name": "\"Not invented here\" NIH",
        "description": "L’aversion pour le contact ou l'utilisation de produits, recherches, technologies, normes ou connaissances développées en dehors d'un groupe et de son contrôle. (littéralement « pas inventé ici »)"
      },
      {
        "name": "Planification fallacieuse",
        "description": "La tendance à sous-estimer les délais d’exécution de ses propres tâches à accomplir, quel que soit son niveau de compétence dans le domaine. Ne s'applique qu'à l'auto-estimation de ses tâches, pas à l'estimation externe."
      },
      {
        "name": "Réactance",
        "description": "La réaction négative et mécanisme de défense psychologique mis en place pour résister à une tentative perçue de restreindre des liberté et choix d’un individu. (Psychologie inversée)"
      },
      {
        "name": "Dévaluation réactive",
        "description": "La tendance à dévaluer des propositions uniquement parce qu'elles sont supposées provenir d'un adversaire."
      },
      {
        "name": "Biais d'attribution de groupe",
        "description": "La tendance à croire que les caractéristiques d'un membre du groupe individuel reflètent le groupe dans son ensemble ou la tendance à supposer que les résultats de la décision du groupe reflètent les préférences des membres du groupe, même lorsque des informations suggèrent clairement le contraire."
      },
      {
        "name": "Biais d'autocomplaisance",
        "description": "La tendance à attribuer nos réussites à nos qualités propres (causes internes) et nos échecs à des facteurs ne dépendant pas de nous (causes externes), afin de maintenir une image positive de soi."
      },
      {
        "name": "Théorie de la justification du système",
        "description": "La tendance à défendre et à justifier l'ordre établi même lorsque celui-ci est injuste. Les arrangements sociaux, économiques et politiques existants ont tendance à être préférés et les alternatives décriées, parfois même au détriment des intérêts personnels et collectifs."
      },
      {
        "name": "Effet pom-pom girl",
        "description": "La tendance des personnes/élements à paraître plus attrayantes dans un groupe que de manière isolée."
      }
    ]
  }
]

async function main() {
  for ( const categoryData of data) {
    const categoryLabel = categoryData.title;
    const categoryDescription = categoryData.description
    const biaisData = categoryData.tableData


     // Create Category Seed
     const category = await prisma.category.create({
      data: {
        label: categoryLabel,
        description: categoryDescription,
      },
     });

     // Create Biais Seed
     for (const biaisItem of biaisData) {
      const biaisName = biaisItem.name;
      const biaisDescription = biaisItem.description;

      if (biaisName && biaisDescription) {
        await prisma.biais.create({
          data: {
            name: biaisName,
            description: biaisDescription,
            category: {
              connect: {
                id: category.id,
              },
            },
          },
        });
      }
     }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
