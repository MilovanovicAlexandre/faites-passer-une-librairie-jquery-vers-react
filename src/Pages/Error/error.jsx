import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'

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