import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Error from './Pages/Error/error.jsx'
import CreateEmployee from './Pages/CreateEmployee/createemployee.jsx'
import CurrentEmployees from './Pages/CurrentEmployees/currentemployees.jsx'

function App() {
  return (
    <div>
      <Router>
        {/*The Routes component is equivalent of the Switch component 
        If the top paths have not been found so the component Error is called
        */}
        <Routes>
          <Route path='/' element={<Navigate to='/CreateEmployee' />}/>
          <Route path='/CreateEmployee' element={<CreateEmployee />}/>
          <Route path='/CurrentEmployees' element={<CurrentEmployees />}/>
          <Route path='*' element={<Error />}/>        
        </Routes>  
      </Router>
  </div>
  )
}

export default App
