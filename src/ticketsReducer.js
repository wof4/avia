import { filterFlights, getCarriers } from "./functions";

const initialState = {
  flights: [],
  ticketsCount: 313,
  carriers: [],
  price: []
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FLIGHTS': {
      return {
        ...state,
        flights: action.payload
      }
    }
    case 'SET_TICKETS_COUNT': {
      return {
        ...state,
        ticketsCount: action.payload,
      }
    }
    case 'SET_CARRIERS': {
      return {
        ...state,
        carriers: action.payload,
      }
    }
    case 'SET_PRICE': {
      return {
        ...state,
        price: action.payload,
      }
    }

    default:
      return state;
  }
};

export const actions = {
  addFlights: (payload) => ({ type: 'ADD_FLIGHTS', payload }),
  setTicketsCount: (payload) => ({ type: 'SET_TICKETS_COUNT', payload }),
  setCarriers: (payload) => ({ type: 'SET_CARRIERS', payload }),
  setPrice: (payload) => ({ type: 'SET_PRICE', payload })
};

export const getFlights = (value) => (dispatch) => {
  const tickets = filterFlights(value)
  dispatch(actions.addFlights(tickets))
  setTimeout(() => dispatch(actions.setTicketsCount(2)), 500);
}

export const setTicketsCountTC = (payload) => (dispatch) => {
  dispatch(actions.setTicketsCount(payload))

}

export const setCarrierTc = () => (dispatch) => {
  const result = getCarriers()
  dispatch(actions.setCarriers(result))
}

export default ticketsReducer;
