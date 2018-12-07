const initialState = {
  notes: [
    {
      id: 1,
      title: "This is first note",
      details: "WOW this is great!"
    },
    {
      id: 2,
      title: "This is second note",
      details: "WOW this is great too!"
    },
  ],
  name: 'Bahram'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note !== action.note),
      };

    case 'GET_NOTES':
      return {
        ...state,
      };

    default:
      return state;

  }
}
