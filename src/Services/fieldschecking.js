/**
 * Function which controls for each field of the form if the field has a correct format
 * @param {Object} state State is containing all the data entered by the user inside fields of the form
 * @param {String} state.firstName
 * @param {String} state.lastName
 * @param {Object} state.startDate   
 * @param {Object} state.department   
 * @param {Object} state.dateOfBirth
 * @param {String} state.street
 * @param {String} state.city
 * @param {Object} state.state
 * @param {Number} state.zipCode
 * @returns {Object} Function returns an object which contains errors on each fiels and the validity of the form 
 */

function fieldsChecking(state){
    //console.log('state.firstName='+state.firstName)
    //console.log('state.startDate='+state.startDate)
    //console.log('typeof(state.dateOfBirth)='+typeof(state.dateOfBirth))
    //console.log('state.dateOfBirth='+state.dateOfBirth)
    //console.log('state.department='+state.department)
    //console.log('typeof(state.department)='+typeof(state.department))
    let errorFirstName = false
    let errorLastName = false
    let errorStartDate = false
    let errorDepartment = false
    let errorDateOfBirth = false
    let errorStreet = false
    let errorCity = false
    let errorState = false
    let errorZipCode = false
    let formIsValid = false
    const regexNames=/^[a-zA-Z-]+$/
    const regexCity=/^[a-zA-Z-]+$/
    const regexStreet=/^[a-zA-Z- ]+$/

    if(state.firstName.length < 1 || regexNames.test(state.firstName) === false){
        errorFirstName = true
    }
    else{
        errorFirstName = false
    }
    if(state.lastName.length < 1 || regexNames.test(state.lastName) === false){
        errorLastName = true
    }    
    else{
        errorLastName = false
    }
    if(state.startDate === ''){
        errorStartDate = true
    }
    else{
        errorStartDate = false
    }
    if(state.department === ''){
        errorDepartment = true
    }
    else{
        errorDepartment = false
    }
    if(state.dateOfBirth === ''){
        errorDateOfBirth = true
    }
    else{
        errorDateOfBirth = false
    }            
    if(state.street.length <1 || regexStreet.test(state.street) === false){
        errorStreet = true
    }
    else{
        errorStreet = false
    }
    if(state.city.length <1 || regexCity.test(state.city) === false){
        errorCity = true
    }
    else{
        errorCity = false
    }    
    if(state.state === ''){
        errorState = true
    }
    else{
        errorState = false
    }        
    if(state.zipCode.length <1){
        errorZipCode = true
    }
    else{
        errorZipCode = false
    }    
            
    if(errorFirstName === false && errorLastName === false && errorStartDate === false && errorDepartment === false
    && errorDateOfBirth === false && errorStreet === false && errorCity === false && errorState === false 
    && errorZipCode === false){
        formIsValid = true
    }

    const formCheckingDone = {
        formIsValid: formIsValid,
        errorFirstName: errorFirstName,
        errorLastName: errorLastName,
        errorStartDate: errorStartDate,
        errorDepartment: errorDepartment,
        errorDateOfBirth: errorDateOfBirth,
        errorStreet: errorStreet,
        errorCity: errorCity,
        errorState: errorState,
        errorZipCode: errorZipCode
    }

    return formCheckingDone
}

export default fieldsChecking