import { Navbar } from "../ui"
import './components';

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
