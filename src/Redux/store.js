import { createStore } from "redux"
import { initialState } from "./initialState"

// Actions creators for modification of the state

const actionCreateEmployee = (payload) => ({
    type: 'CreateEmployee',
    payload: payload
})

// The reducer of Redux to put the actions creators

function reducer(state = initialState, action){

    if(action.type ==='CreateEmployee'){

        //let newEmployee = {...action.payload}
        //let employeesListing = [...state.employeesList]
        //employeesListing.push(newEmployee) 
        return {
            ...state,
            employeesList: [...state.employeesList,action.payload]
            //employeesList: employeesListing             
        }
    }    
    else {
        return state
    }
}

// Connection of Redux store to the add-on Redux Devtools, we retreive the Devtools and if they
// exist we execute the function of Devtools

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// The store of Redux to assemble state, actions creators and reducer

const store = createStore(reducer,reduxDevtools)

// Exports

export {store}
export {actionCreateEmployee}