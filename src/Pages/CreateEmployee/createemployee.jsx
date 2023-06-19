import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select';
import { statesListing } from '../../Data/statesListing.js'
import { departmentsListing } from '../../Data/departmentsListing.js'
import './createemployee.css'
import { useDispatch } from 'react-redux'
import { actionCreateEmployee } from '../../Redux/store.js'
import fieldsChecking from '../../Services/fieldschecking.js'
import changeDateFormat from '../../Services/changedateformat.js'
import {Modal} from 'alex-modal-in-react'

/** 
 * Component that displays the page to create an employee. On this page user have access to a form to enter personnal data
 * of an employee like: first name, last name, date of birth...
 * @namespace
 * @returns {JSX.Element} A JSX element containing the CreateEmployee page component 
 */

function CreateEmployee() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState()
    const [startDate, setStartDate] = useState()
    const [stateSelected, setStateSelected] = useState(null)
    const [departmentSelected, setDepartmentSelected] = useState(null)
    const dispatch = useDispatch()
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [startDateError, setStartDateError] = useState(false)
    const [departmentError, setDepartmentError] = useState(false)
    const [dateOfBirthError, setDateOfBirthError] = useState(false)
    const [streetError, setStreetError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [stateError, setStateError] = useState(false)
    const [zipCodeError, setZipCodeError] = useState(false)
    const [modalOpening, setModalOpening] = useState(false)

    function formSubmission(event){
        event.preventDefault()
        //console.log('dateOfBirth='+dateOfBirth)
        //console.log('typeof(dateOfBirth)='+typeof(dateOfBirth))

        let departmentChosen
        let stateChosen 

        if(departmentSelected === null){
            departmentChosen=''
        }
        else{
            departmentChosen = departmentSelected.value
        }
        if(stateSelected === null){
            stateChosen=''
        }
        else{
            stateChosen = stateSelected.value
        }
        
        const stateToRecord = {
            firstName: firstName,
            lastName: lastName,
            startDate: changeDateFormat(startDate),
            dateOfBirth: changeDateFormat(dateOfBirth),
            department: departmentChosen, 
            street: street,
            city: city,
            state: stateChosen,
            zipCode: zipCode
        }

        const resultChecking = fieldsChecking(stateToRecord)
        setFirstNameError(resultChecking.errorFirstName)
        setLastNameError(resultChecking.errorLastName)
        setStartDateError(resultChecking.errorStartDate)
        setDepartmentError(resultChecking.errorDepartment)
        setDateOfBirthError(resultChecking.errorDateOfBirth)
        setStreetError(resultChecking.errorStreet)
        setCityError(resultChecking.errorCity)
        setStateError(resultChecking.errorState)
        setZipCodeError(resultChecking.errorZipCode)

        if(resultChecking.formIsValid){    
            dispatch(actionCreateEmployee(stateToRecord))
            setModalOpening(true)
            // Reset form's fields
            document.getElementById('formPageCreate').reset()
            // Reset form's fields coming from components imported with npm
            setdateOfBirth(null)
            setStartDate(null)
        }
    }

    return (
        <main>
            <div className='containerPageCreate'>
                <div className='containerTitlesPageCreate'>
                    <h1>HRnet</h1>
                    <Link to='/CurrentEmployees'><p className='TextLinkPageCreate'>View Current Employees</p></Link>
                    <h2>Create Employee</h2>
                </div>
                <form className='formPageCreate' id ='formPageCreate' onSubmit={(event) => formSubmission(event)}>
                    <div className='containerFirstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input 
                        type='text' 
                        name='firstName' 
                        id='firstName'  
                        onChange={(event) => setFirstName(event.target.value)}
                        className='firstNameInput'
                        />
                        { firstNameError ? 
                        <p className='textErrorField'>
                            First name must contains at least 1 character<br /> Allowed characters: a to z / A to Z / -
                        </p>: null}
                    </div>
                    <div className='containerLastName'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input 
                        type='text' 
                        name='lastName' 
                        id='lastName' 
                        onChange={(event) => setLastName(event.target.value)}
                        className='lastNameInput' 
                        />
                        {lastNameError ? 
                        <p className='textErrorField'>
                            Last name must contains at least 1 character<br /> Allowed characters: a to z / A to Z / -
                        </p> : null}
                    </div>
                    <div className='containerDateOfBirth'>
                        <label htmlFor='dateOfBirth'>Date of Birth</label>
                        <DatePicker
                        selected={dateOfBirth}
                        onChange={(date) => setdateOfBirth(date)}
                        placeholderText='Select a date of birth'
                        showYearDropdown
                        dropdownMode='select'
                        className='dateOfBirthDatePicker'
                        />
                        {dateOfBirthError ? <p className='textErrorField'>You must select a date of birth</p> : null}
                    </div>
                    <div className='containerStartDate'>
                        <label htmlFor='startDate'>Start Date</label>
                        <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText='Select a start date'
                        showYearDropdown
                        dropdownMode='select'
                        className='startDateDatePicker'
                        />
                        {startDateError ? <p className='textErrorField'>You must select a start date</p> : null}
                    </div>
                    <fieldset className='fieldsGroup'>
                        <legend>Address</legend>
                        <div className='containerStreet'>
                            <label htmlFor='street'>Street</label>
                            <input 
                            type='text' 
                            name='street' 
                            id='street' 
                            onChange={(event) => setStreet(event.target.value)}
                            className='streetInput' 
                            />
                            {streetError ? 
                            <p className='textErrorField'>
                                Street must contains at least 1 character<br /> Allowed characters: a to z / A to Z / - / space / 0 to 9
                            </p> : null}
                        </div>
                        <div className='containerCity'>
                            <label htmlFor='city'>City</label>
                            <input 
                            type='text' 
                            name='city' 
                            id='city'  
                            onChange={(event) => setCity(event.target.value)}
                            className='cityInput'
                            />
                            {cityError ? 
                            <p className='textErrorField'>
                                City must contains at least 1 character<br /> Allowed characters: a to z / A to Z / -
                            </p> : null}
                        </div>
                        <div className='containerState'>
                            <label htmlFor='state'>State</label>
                            <Select
                            name='state'
                            id='state'
                            options={statesListing}
                            defaultValue={stateSelected}
                            onChange={setStateSelected}
                            placeholder={statesListing[0].label}
                            menuPosition='fixed'
                            menuPlacement='auto'
                            styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  backgroundColor: state.isFocused ? '#F2F2F2' : '#F2F2F2',
                                  fontSize: '18px',
                                }),
                            }}
                            className='stateSelect'
                            />
                            {stateError ? <p className='textErrorField'>You must select a state</p> : null}
                        </div>
                        <div className='containerZipCode'>
                            <label htmlFor='zipCode'>Zip Code</label>
                            <input 
                            type='number' 
                            name='zipCode' 
                            id='zipCode' 
                            onChange={(event) => setZipCode(event.target.value)}
                            className='zipCodeInput' 
                            />
                            {zipCodeError ? <p className='textErrorField'>Enter at least 1 number for Zip Code</p> : null}
                        </div>    
                    </fieldset>
                    <div className='containerDepartment'>
                        <label htmlFor='department'>Department</label>
                        <Select
                        name='department'
                        id='department'
                        options={departmentsListing}
                        defaultValue={departmentSelected}
                        onChange={setDepartmentSelected}
                        placeholder={departmentsListing[0].label}
                        menuPosition='fixed'
                        menuPlacement='auto'
                        styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              backgroundColor: state.isFocused ? '#F2F2F2' : '#F2F2F2',
                              fontSize: '18px',
                            }),
                        }}
                        className='departmentSelect'    
                        />
                        {departmentError ? <p className='textErrorField'>You must select a department</p> : null}
                    </div>
                    <div className='containerFormButton'>
                        <button className='formButton' type='submit'>Save</button>
                    </div>
                </form>
            </div>
            {modalOpening ? 
                <Modal 
                closeModal={() => setModalOpening(false)}
                textModal='Employee Created!'
                /> 
            : null}
        </main>
    )
}
  
export default CreateEmployee