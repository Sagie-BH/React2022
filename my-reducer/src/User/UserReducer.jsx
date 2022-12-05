
export const userState = {
    users: []
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: action.id,
        name: action.name,
      };
      const allUsers = [...state.users, newUser];
      return { users: allUsers };
    case "REMOVE_USER":
      const filtered = state.users.filter(
        u => u.id !== action.id);
      const newState = { users: filtered };
      return newState;
    default:
      return state;
  }
};