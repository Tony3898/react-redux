const isLoggedReducer = (state = false, actionType) => {
  switch (actionType.type)
  {
    case 'SIGN_IN':
      return !state
    default:
      return 0
  }
}

export default isLoggedReducer
