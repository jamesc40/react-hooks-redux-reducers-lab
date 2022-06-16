export function manageFriends(state, action) {
  switch(action.type){
    case('friends/add'):
      let friendsArr = state.friends
      return { friends: [...friendsArr, action.payload]}
    case('friends/remove'):
      let filteredFriends = state.friends.filter(el => el.id !== action.payload)
      return { friends: filteredFriends }
    default:
      return state
  }

}
