[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)

# HRnet's app

<img onerror="this.onerror=null; this.src='image_README_HRnet_1.png';" src='src/Assets/image_README_HRnet_1.png' alt='Image README HRnet 1' title='image_README_HRnet_1'/>
<br />
<pre>
Lighthouse    |  Performance  |  Accessibility  |  Best Practices  |  SEO  |
report        |               |                 |                  |       |
______________|_______________|_________________|__________________|_______|
React App     |      99       |        92       |       100        |  100  |
______________|_______________|_________________|__________________|_______|
jQuery App    |      99       |        95       |        92        |   78  |
______________|_______________|_________________|__________________|_______|
</pre>
<br />
<img onerror="this.onerror=null; this.src='image_README_HRnet_2.png';" src='src/Assets/image_README_HRnet_2.png' alt='Image README HRnet 2' title='image_README_HRnet_2'/>
<br />
<pre>
Lighthouse    |  Performance  |  Accessibility  |  Best Practices  |  SEO  |
report        |               |                 |                  |       |
______________|_______________|_________________|__________________|_______|
React App     |      85       |       100       |       100        |  100  |
______________|_______________|_________________|__________________|_______|
jQuery App    |     100       |        98       |        92        |   67  |
______________|_______________|_________________|__________________|_______|
</pre>
<br />

HRnet is an app based on React where user can create employees and can see the list of the current employees.
The file explains how to install HRnet's app and how to execute it.
Before installing this app you need to fullfill all the prerequisites incidated below.
A list of dependencies is given to inform you which react components have been used in HRnet's app.
Detailed explanations are given about HRnet'app setup.
In conclusion, an explanation will allow you to add / modify / remove the initial list of employees by using
the Redux initial State into the initialState.js file. An other explanation will allow you to understand how
to fill form's fields to create an employee.

## Prerequisites

- Install npm => <a href='https://nodejs.org/en'>https://nodejs.org/en</a>

## Dependencies

- <a href='https://fr.legacy.reactjs.org/'>react</a>
- <a href='https://reactrouter.com/en/main'>react-router</a>
- <a href='https://redux.js.org/'>redux</a>
- <a href='https://www.npmjs.com/package/alex-modal-in-react'>alex-modal-in-react</a>
- <a href='https://www.npmjs.com/package/react-datepicker'>react-datepicker</a>
- <a href='https://www.npmjs.com/package/data-table-react-plugin'>data-table-react-plugin</a>
- <a href='https://www.npmjs.com/package/react-select'>react-select</a>

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

In Redux/initialState.js file you have the initial State:

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
        }
    ]
}
</pre>

For example, if you want to add an employee in the initial list you must to add and object inside the array called 'employeeList' and all properties need to be filled out. The properties of an object are 'firstName','lastName',
'startDate', 'dateOfBirth', 'department', 'street', 'city', 'state' and 'zipcode'.

If you want to add Tony as an employee you will have:

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

Other exemple, if you want to remove an employee in the initial list, just delete the object that makes reference to the
employee you want to delete.

If you want to delete employees Alex and Tony you will have:

<pre>
const initialState = {
    employeesList: [
        
    ]
}
</pre>

## Add an employee in the table of current employees

For adding an employee, you need to fill each field of the form.
Fields are : First Name, Last Name, Date of Birth, Start Date, Street, City, State, Zip Code and Departement.

Be careful when you fill the form. If the data enter inside a field is in a wrong format it will trigger an error message.
If only one field of the form has a bad format you won't be allowed to create an employee.

For exemple for the field called 'First Name', if user enter data in wrong format the following message will appear
below 'First Name' field:


<pre>
                                        First Name must contains at least 1 character
                                            Allowed characters: a to z / A to Z / -
</pre>    

if all fields have right format so an employee will be created and a modal will appear to inform you.
Next if you want to view the list of employee you can click on the link 'View Current Employees' and you will
see all the employees inside a table.