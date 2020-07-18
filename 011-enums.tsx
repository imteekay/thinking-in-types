fetch('/pokemons', {
  headers: {
    Accept: 'application/json'
  }
});

fetch('/harry-potter/spells', {
  headers: {
    Accept: 'application/json'
  }
});

enum MediaTypes {
  JSON = 'application/json',
  PDF = 'application/pdf'
}

fetch('/pokemons', {
  headers: {
    Accept: MediaTypes.JSON
  }
});

fetch('/harry-potter/spells', {
  headers: {
    Accept: MediaTypes.JSON
  }
});

// ----------------------------------------------

export enum StateTypes {
  Empty = 'Empty',
  Error = 'Error'
};

import ComponentState, { StateTypes } from './ComponentState';

// Example of empty state
<ComponentState type={StateTypes.Empty} />

// Example of error state
<ComponentState type={StateTypes.Error} />

const stateInfo = {
  Empty: {
    title: messages.emptyTitle,
    description: messages.emptyDescription,
    icon: EmptyIcon,
  },
  Error: {
    title: messages.errorTitle,
    description: messages.errorDescription,
    icon: ErrorIcon,
  },
};

export const ComponentState = ({ type }) => (
  <State
    title={stateInfo[type].title}
    subtitle={stateInfo[type].subtitle}
    icon={stateInfo[type].icon}
  />
);
