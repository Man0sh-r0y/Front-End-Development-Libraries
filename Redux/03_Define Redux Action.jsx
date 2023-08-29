// Define an action here:
const action = {
  type: 'LOGIN'
}
// The action is then dispatched to the store like this:
store.dispatch(action)
// Define an action creator here:
const actionCreator = () => {
    return {
        type: 'LOGIN'
    }
}