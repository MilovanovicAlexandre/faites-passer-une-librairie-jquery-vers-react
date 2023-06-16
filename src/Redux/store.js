import { createStore } from "redux";

// InitialState of Redux

const initialState = {
    employeesList: [
        {
            firstName: 'Alex',
            lastName: 'A',
            startDate: '02/02/2000',
            dateOfBirth: '01/01/1990',
            department: 'Marketing',
            street: 'Main Street',
            city: 'NY',
            state: 'AL',
            zipCode: '01800'
        },
        {
            firstName: 'Martin',
            lastName: 'M',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        },
        {
            firstName: 'Martin2',
            lastName: 'M2',
            startDate: '02/02/2000',
            dateOfBirth: '01/01/1990',
            department: 'Marketing',
            street: 'Main Street',
            city: 'NY',
            state: 'AL',
            zipCode: '01800'
        },
        {
            firstName: 'Test4',
            lastName: 'Test4',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        },
        {
            firstName: 'Test5',
            lastName: 'Test5',
            startDate: '02/02/2000',
            dateOfBirth: '01/01/1990',
            department: 'Marketing',
            street: 'Main Street',
            city: 'NY',
            state: 'AL',
            zipCode: '01800'
        },
        {
            firstName: 'Test6',
            lastName: 'Test6',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        },
        {
            firstName: 'Test7',
            lastName: 'Test7',
            startDate: '02/02/2000',
            dateOfBirth: '01/01/1990',
            department: 'Marketing',
            street: 'Main Street',
            city: 'NY',
            state: 'AL',
            zipCode: '01800'
        },
        {
            firstName: 'Test8',
            lastName: 'Test8',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        },
        {
            firstName: 'Test9',
            lastName: 'Test9',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        },
        {
            firstName: 'Test10',
            lastName: 'Test10',
            startDate: '02/02/2000',
            dateOfBirth: '01/01/1990',
            department: 'Marketing',
            street: 'Main Street',
            city: 'NY',
            state: 'AL',
            zipCode: '01800'
        },
        {
            firstName: 'Test11',
            lastName: 'Test11',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        },
        {
            firstName: 'Test12',
            lastName: 'Test12',
            startDate: '02/02/2001',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        }
    ]
}

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

export {initialState}
export {store}
export {actionCreateEmployee}