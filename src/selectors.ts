// We use selectors separate data transforms from component code.
// Idealy component code should be only responsible for rendering
// the vdom, so anything that has to do with data manipulation goes here

// selects all users with information if corresponding suggestion is selected in the ui
export const userOptionsSelector = (state: State) => {
    return state.users.map(u => ({
        ...u,
        isSelected: state.selectedUser && state.selectedUser.id === u.id,
    }));
};
