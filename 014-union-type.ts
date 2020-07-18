enum ActionTypes {
  FETCH = 'FETCH',
  SUBMIT = 'SUBMIT'
}

type FetchAction = {
  type: typeof ActionTypes.FETCH;
};

const fetchAction: FetchAction = {
  type: ActionTypes.FETCH
};

type SubmitAction = {
  type: typeof ActionTypes.SUBMIT;
};

const submitAction: SubmitAction = {
  type: ActionTypes.SUBMIT
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
