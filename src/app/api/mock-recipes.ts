import {Recipe} from '../models/recipe.model';
import {UnitType} from '../models/unit-type.enum';

export const RECIPES: Recipe[] = [
   {
     id: 1,
     name: 'Indian Tea',
     ingredients: [
       {id: 1, name: 'chai spices', unit: 'tsp', quantity: 1, unitType: UnitType.Volume},
       {id: 2, name: 'sugar', unit: 'tsp', quantity: 2, unitType: UnitType.Volume},
       {id: 3, name: 'water', unit: 'ml', quantity: 250, unitType: UnitType.Liquid},
       {id: 4, name: 'green cardamom', unit: 'pods', quantity: 4, unitType: null},
       {id: 3, name: 'milk', unit: 'ml', quantity: 250, unitType: UnitType.Liquid},
       ],
     description: 'Indian tea',
     steps: [
       'With a mortar and pestle, crack the cardamom pods and discard pod.  Grind the cardamom into fine powder.',
       'Bring water, cardamom and chai spices to a simmer in a small saucepan on the stove.',
       'Add milk and sugar and bring it to boil again.',
       'When boiling again, reduce heat and keep simmering for another 2 minutes.',
       'Remove from heat and strain tea with a strainer.  Serve with a biscuit or cookie.'
     ]
   },
  {
    id: 2,
    name: 'Cheesy Garlic Broccoli',
    ingredients: [
      {id: 1, name: 'broccoli', unit: 'crowns', quantity: 3, unitType: null},
      {id: 2, name: 'garlic', unit: 'cloves', quantity: 3, unitType: null},
      {id: 3, name: 'shredded cheddar cheese', unit: 'g', quantity: 175, unitType: UnitType.Weight},
      {id: 4, name: 'salt', unit: '', quantity: null, unitType: null},
      {id: 5, name: 'pepper', unit: '', quantity: null, unitType: null}
    ],
    description: 'Cheesy Garlic Broccoli',
    steps: [
      'Preheat oven to 375ºF (190ºC).',
      'Spread out broccoli in a medium rectangular casserole dish.',
      'Stir the garlic and cheddar cheese together in a separate bowl.',
      'Sprinkle the cheese evenly over broccoli and add salt and pepper to taste.',
      'Bake for 25 minutes.'
    ]
  },
  {
    id: 3,
    name: 'Spaghetti Bolognese',
    ingredients: [
      {id: 1, name: 'minced meat', unit: 'crowns', quantity: 300, unitType: null},
      {id: 2, name: 'garlic', unit: 'cloves', quantity: 3, unitType: null},
      {id: 3, name: 'onion', unit: '', quantity: 1, unitType: null},
      {id: 4, name: 'water', unit: 'ml', quantity: 100, unitType: UnitType.Volume},
      {id: 5, name: 'spaghetti', unit: 'g', quantity: 250, unitType: UnitType.Weight}
    ],
    description: 'Cheesy Garlic Broccoli',
    steps: [
      'Chop all your vegetables.',
      'Make the sauce and let it simmer for at least 2 hours',
      'Cook the pasta.',
      'Put the sauce on the pasta.',
      'Eat the pasta. Try the beat the world record.'
    ]
  }
];
