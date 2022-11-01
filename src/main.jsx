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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={ store }>
    <BrowserRouter>
      <NutritionistApp />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <JournalPage /> */}
      {/* <PatientPage /> */}

    </BrowserRouter>

  </Provider>
  </React.StrictMode>
)
