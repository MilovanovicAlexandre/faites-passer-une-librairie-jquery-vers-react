import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'

/** 
 * Component that displays the error page 404. if the web adress / Assets is not found so this page will be displayed.
 * On this page user is advised about 404 error and he can return to the home page by cliking on the link.
 * @namespace
 * @returns {JSX.Element} A JSX element containing the error page component 
 */

function Error() {
    return (
        <main>
            <div className='containerTextErrorAndLink'>
              <div className='containerTextError404'>
                <h1>HRnet</h1>
                <p className='textError404'>Error 404</p>
                <p className='textError404Continuation'>Assets not found</p>
              </div>
              <div className='containerLinkError404'>
                <Link to='/CreateEmployee'><p className='textLinkError404'>Return to page Create Employee</p></Link>
              </div>
            </div>
        </main>
    )
}
  
export default Error