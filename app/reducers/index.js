import Axios from "axios";
// import store from '../store'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  candies: []
}

//Action type
const GET_ALL_CANDIES = 'GET_ALL_CANDIES'

//Action creator
export const getAllCandies = (candies) => ({
  type: 'GET_ALL_CANDIES',
  candies
})
//get all candies takes an array of candies, we just received when we did our thunk creator func with axios.get api/candies

//Thunk creator
export const getCandies = () => async dispatch => {
  const res = await Axios.get('/api/candies')
  dispatch(getAllCandies(res.data)) 
}

//FIRST we send the request to get the candies
//then we dispatch the action get all candies, using the data we got from the DB (the array of candies)


//if the action creator produces an action  type of get all candies, we want to return a new state with all the candies
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:    //WHY SPREAD ACTION.CANDIES????? 
      return {...state, candies: action.candies }
    default:
      return state
  }
}

export default rootReducer


// return {...state, candies: [...state.candies, ...action.candies]}