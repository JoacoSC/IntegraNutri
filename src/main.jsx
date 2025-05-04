import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// import { PatientPage } from './patient/pages/PatientPage'
// import { JournalPage } from './nutritionist/pages/JournalPage'
// import { LoginPage } from './auth/pages/LoginPage'
// import { RegisterPage } from './auth/pages/RegisterPage'
import { NutritionistApp } from './NutritionistApp'
import { store } from './store'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={ store }>
    <BrowserRouter>
      <NutritionistApp />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <JournalPage /> */}
      {/* <PatientPage /> */}

    </BrowserRouter>

  </Provider>
  
)
