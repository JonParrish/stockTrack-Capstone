import { ADD_STOCK, DELETE_STOCK } from '../actionTypes'

const initialState = {
  stock_list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_STOCK: {
      const { id, stock, price, targetPrice } = action.payload
      return {
        ...state,
        stock_list: [...state.stock_list, { id, stock, price, targetPrice }]
      }
    }
    case DELETE_STOCK: {
      const { id } = action.payload
      return {
        ...state,
        stock_list: state.stock_list.filter(stock => stock.id != id)
      }
    }
    default:
      return state
  }
}
