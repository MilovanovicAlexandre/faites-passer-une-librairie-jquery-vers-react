/**
 * Function which changes the format of the date in parameter. The output date will be a string and will have a format 
 * like month / day / year 
 * @param {Object} initialDate This parameter contains the initial date which is an object. The format of this object is
 * for example: Thu Jun 01 2023 00:00:00 GMT+0200 (heure d’été d’Europe centrale)
 * @returns {String} Function returns the formatted date. The format is month / day / year
 */

function changeDateFormat(initialDate){
    
    let day, month, year, formattedDate
  
    if(initialDate === undefined){
        formattedDate=''
    }
    else{
        day = initialDate.getDate()
        month = initialDate.getMonth() + 1
        year = initialDate.getFullYear()
        day = day.toString().padStart(2, '0')
        month = month.toString().padStart(2, '0')
        formattedDate = `${month}/${day}/${year}`
    }

    return formattedDate
}

export default changeDateFormat