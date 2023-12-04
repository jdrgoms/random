export const getStorage = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState) as T
  } catch (e) {
    console.error('Local Storage ERROR:', e)
    return undefined
  }
}

export const setStorage = <T>(key: string, state: T) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (e) {
    console.error('Error setStorage local storage:', e)
  }
}

export const removeStorage = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch (e) {
    console.error('Erro removeStorage:', e)
  }
}

export const clearStorage = async () => {
  localStorage.clear()
}
