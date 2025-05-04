import { Navbar } from "../ui"

import './components/AppLayout.css';

export const AppLayout = ({ children }) => {
  return (
    <>  
        <div className="content-wrapper">

            <Navbar/>

            { children }

            
            
        </div>
    </>
  )
}
