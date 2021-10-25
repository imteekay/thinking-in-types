enum ActionTypes {
  FETCH = 'FETCH',
  SUBMIT = 'SUBMIT',
}

type FetchAction = {
  type: typeof ActionTypes.FETCH;
};

const fetchAction: FetchAction = {
  type: ActionTypes.FETCH,
};

type SubmitAction = {
  type: typeof ActionTypes.SUBMIT;
};

const submitAction: SubmitAction = {
  type: ActionTypes.SUBMIT,
};

type Actions = FetchAction | SubmitAction;

function reducer(state, action: Actions) {
  switch (action.type) {
    case ActionTypes.FETCH:
    // fetching action
    case ActionTypes.SUBMIT:
    // submiting action
  }
}

// -------------------------------------------------------

type House = {
  name: string;
  traits: string[];
};

const gryffindor: House = {
  name: 'Gryffindor',
  traits: ['courage', 'bravery'],
};

const slytherin: House = {
  name: 'Slytherin',
  traits: ['ambition', 'leadership'],
};

const ravenclaw: House = {
  name: 'Ravenclaw',
  traits: ['intelligence', 'learning'],
};

const hufflepuff: House = {
  name: 'Hufflepuff',
  traits: ['hard work', 'patience'],
};

const houses: House[] = [gryffindor, slytherin, ravenclaw, hufflepuff];

type Witch = {
  name: string;
  trait: string;
  magicFamily: string;
};

type Muggle = {
  name: string;
  trait: string;
  email: string;
};

type Person = Muggle | Witch;

const hermione: Muggle = {
  name: 'Hermione Granger',
  trait: 'bravery',
  email: 'hermione@mail.com',
};

const harry: Witch = {
  name: 'Harry Potter',
  trait: 'courage',
  magicFamily: 'Potter',
};

const tk: Person = {
  name: 'TK',
  email: 'tk@mail.com',
  trait: 'learning',
  magicFamily: 'Kinoshita',
};

function chooseHouse(houses: House[], person: Person) {
  return houses.find((house) => house.traits.includes(person.trait));
}

chooseHouse(houses, harry); // { name: 'Gryffindor', traits: ['courage', 'bravery'] }
chooseHouse(houses, hermione); // { name: 'Gryffindor', traits: ['courage', 'bravery'] }
chooseHouse(houses, tk); // { name: 'Ravenclaw', traits: ['intelligence', 'learning'] }
