import React from 'react'
import { Link } from 'react-router-dom'
import './currentemployees.css'
import DataTable from "data-table-react-plugin"
import { useSelector } from 'react-redux'

function CurrentEmployees() {

    const employeesRecorded = useSelector((state) => state.employeesList)

    //console.log('employeesRecorded='+employeesRecorded)
    //console.log('typeof(employeesRecorded)='+typeof(employeesRecorded))
    //console.log('employeesRecorded[0]='+employeesRecorded[0])
    //console.log('typeof(employeesRecorded[0])='+typeof(employeesRecorded[0]))

    const tableHeader = [
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Start Date", value: "startDate" },
        { text: "Date of Birth", value: "dateOfBirth" },
        { text: "Department", value: "department" },
        { text: "Street", value: "street" },
        { text: "City", value: "city" },
        { text: "State", value: "state" },
        { text: "Zip Code", value: "zipCode" },
    ]

    //console.log('typeof(exempleLabels)'+typeof(exempleLabels))

    return (
        <main>
            <div className='containerPageEmployees'>
                <div className='containerTitlePageEmployees'>
                    <h1>Current employees</h1>
                </div>
                <div className='containerTableEmployeesAndFilterAndSearch'>
                {employeesRecorded ? 
                    <DataTable labels={tableHeader} data={employeesRecorded} />
                :
                <p>Create an employee for displaying the table of current employees</p>
                }    
                </div>
                <div className='containerLinkPageEmployees'>
                    <Link to='/CreateEmployee'><p className='TextLinkPageEmployees'>Home</p></Link>
                </div>
            </div>
        </main>
    )
}
  
export default CurrentEmployees