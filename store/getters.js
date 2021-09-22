export const total = state => state.total
export const numOfOps = state => (operationType) => {
  let opsCount = 0
  state.data.forEach((operation) => {
    if (operation.type === operationType) {
      opsCount++
    }
  })
  return opsCount
}
export const countofTransactions = (state) => {
  return state.total
}
