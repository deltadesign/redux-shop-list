export const loadState = () => {
  const loadedState = localStorage.getItem('state')
  if (loadedState === null) {
    return undefined
  } else if (loadedState !== null) {
  return JSON.parse(loadedState);
  } else {
    return undefined
  }
  
}

export const saveState = (state) => {
  const savedState = JSON.stringify(state);
  return localStorage.setItem('state', savedState)
}