[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)

# HRnet's app

<img onerror="this.onerror=null; this.src='image_README_HRnet.png';" src='src/Assets/image_README_HRnet.png' alt='Image README HRnet' title='image_README_HRnet'/>

HRnet is an app based on React where user can create employees and can see the list of the current employees.
The file explains how to install HRnet's app and how to execute it.
Before installing this app you need to fullfill all the prerequisites incidated below.
Detailed explanations are given about HRnet'app setup.
In conclusion, an explanation will allow you to add / modify / remove the initial list of employees by using
the Redux initial State into the store.js file. 

## Prerequisites

- Install npm => <a href='https://nodejs.org/en'>https://nodejs.org/en</a>

## Setup

### Download this repository on your computer

- Enter the following command in your computer terminal:

    git clone https://github.com/MilovanovicAlexandre/faites-passer-une-librairie-jquery-vers-react

### Run HRnet's app

- On your computer terminal go to the root of the repository

- Enter the following command in your computer terminal to install the dependencies:

    npm install

- Enter the following command in your computer terminal to run the HRnet's app:

    npm start

The HRnet's app is now available on: <a href='localhost:3000/CreateEmployee'>localhost:3000/CreateEmployee</a>

## Inital employees's data in the table of current employees

You can add / modify / remove initial list of employees by modifying Redux initial State:

In Redux/store.js file you have the initial State:

<pre>
const initialState = {
    employeesList: [
        {
            firstName: 'Alex',
            lastName: 'Alex',
            startDate: '02/02/2020',
            dateOfBirth: '01/01/1990',
            department: 'Marketing',
            street: 'Main Street',
            city: 'NY',
            state: 'AL',
            zipCode: '01800'
        },
        {      
            firstName: 'Tony',
            lastName: 'Tony',
            startDate: '02/02/2021',
            dateOfBirth: '01/01/1993',
            department: 'Marketing',
            street: 'Street number two',
            city: 'NY',
            state: 'AL',
            zipCode: '03900'
        }
    ]
}
</pre>

For example of you want to add an employee in the initial list you must to add and object inside the array called 'employeeList' and all properties need to be filled out. The properties of an object are 'firstName','lastName',
 'startDate', 'dateOfBirth', 'department', 'street', 'city', 'state' and 'zipcode'.
Other exemple, if you want to remove an employee in the initial list, just delete the object that makes reference to the
employee you want to delete.