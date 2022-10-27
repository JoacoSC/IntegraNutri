import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalPage } from './nutritionist/pages/JournalPage'
// import { LoginPage } from './auth/pages/LoginPage'
// import { RegisterPage } from './auth/pages/RegisterPage'
// import { NutritionistApp } from './NutritionistApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NutritionistApp /> */}
    {/* <RegisterPage /> */}
    {/* <LoginPage /> */}
    <JournalPage />
  </React.StrictMode>
)
