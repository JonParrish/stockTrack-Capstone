import { ADD_STOCK, DELETE_STOCK } from './actionTypes'

let nextStockId = 0

export const addStock = (stock, price, targetPrice) => ({
  type: ADD_STOCK,
  payload: {
    id: ++nextStockId,
    stock,
    price,
    targetPrice
  }
})

export const deleteStock = id => ({
  type: DELETE_STOCK,
  payload: {
    id
  }
})
