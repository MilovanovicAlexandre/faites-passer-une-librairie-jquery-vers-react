import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select';
import { statesListing } from '../../Data/statesListing.js';
import { departmentsListing } from '../../Data/departmentsListing.js';
import './createemployee.css'
import { useDispatch } from 'react-redux';
import { actionCreateEmployee } from '../../Redux/store.js';

function CreateEmployee() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [stateSelected, setStateSelected] = useState(null);
    const [departmentSelected, setDepartmentSelected] = useState(null);
    const dispatch = useDispatch()

    function formSubmission(event){
        event.preventDefault()
        dispatch(actionCreateEmployee({
            firstName: firstName,
            lastName: lastName,
            startDate: startDate,
            department: departmentSelected,
            dateOfBirth: dateOfBirth,
            street: street,
            city: city,
            state: stateSelected,
            zipCode: zipCode,
        }))
    }
    
    return (
        <main>
            <div className='containerPageCreate'>
                <div className='containerTitlesPageCreate'>
                    <h1>HRnet</h1>
                    <Link to='/CurrentEmployees'><p className='TextLinkPageCreate'>View Current Employees</p></Link>
                    <h2>Create Employee</h2>
                </div>
                <form className='formPageCreate' onSubmit={(event) => formSubmission(event)}>
                    <div className='containerFirstName'>
                        <label htmlFor='firstName'>First Name</label>
                        <input 
                        type='text' 
                        name='firstName' 
                        id='firstName' 
                        required={true} 
                        onChange={(event) => setFirstName(event.target.value)}
                        className='firstNameInput'
                        />
                    </div>
                    <div className='containerLastName'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input 
                        type='text' 
                        name='lastName' 
                        id='lastName' 
                        required={true}
                        onChange={(event) => setLastName(event.target.value)}
                        className='lastNameInput' 
                        />
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
                    </div>
                    <fieldset className='fieldsGroup'>
                        <legend>Address</legend>
                        <div className='containerStreet'>
                            <label htmlFor='street'>Street</label>
                            <input 
                            type='text' 
                            name='street' 
                            id='street' 
                            required={true}
                            onChange={(event) => setStreet(event.target.value)}
                            className='streetInput' 
                            />
                        </div>
                        <div className='containerCity'>
                            <label htmlFor='city'>City</label>
                            <input 
                            type='text' 
                            name='city' 
                            id='city' 
                            required={true} 
                            onChange={(event) => setCity(event.target.value)}
                            className='cityInput'
                            />
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
                        </div>
                        <div className='containerZipCode'>
                            <label htmlFor='zipCode'>Zip Code</label>
                            <input 
                            type='number' 
                            name='zipCode' 
                            id='zipCode' 
                            required={true}
                            onChange={(event) => setZipCode(event.target.value)}
                            className='zipCodeInput' 
                            />
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
                    </div>
                    <div className='containerFormButton'>
                        <button className='formButton' type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
  
export default CreateEmployee