import './components';

export const Navbar = () => {
  return(
    <div className="navbar">
      <ul className="nav__list">
          <li className="nav__item__logo" data-tooltip="NutritionistApp">
              <a href="#">
                  <img src="../../assets/imgs/navbar/NutritionistApp_sm.svg" className="logo-item" alt="Icono NutritionistApp"/>                    
              </a>
          </li>
          <li className="nav__item" data-tooltip="Inicio">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Home_sm.svg" className="filter-clr" alt="Icono Inicio"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Calendario">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Calendar_sm.svg" className="filter-clr" alt="Icono Calendario"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Estadísticas">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Stats_sm.svg" className="filter-clr" alt="Icono Estadísticas"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Mensajes">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Chat_sm.svg" className="filter-clr" alt="Icono Mensajes"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Notas">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Notes_sm.svg" className="filter-clr" alt="Icono Notas"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Comunidad">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Communities_sm.svg" className="filter-clr" alt="Icono Comunidad"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Exámenes">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Medical_exams_sm.svg" className="filter-clr" alt="Icono Exámenes"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Calculadora">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Calc_sm.svg" className="filter-clr" alt="Icono Calculadora"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Archivos">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Files_sm.svg" className="filter-clr" alt="Icono Archivos"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Comidas">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Dishes_sm.svg" className="filter-clr" alt="Icono Comidas"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
          <li className="nav__item" data-tooltip="Ajustes">
              <a href="#">
                  <img src="../../assets/imgs/navbar/Settings_sm.svg" className="filter-clr" alt="Icono Ajustes"/>
                  <div className="btn-ellipse"></div>
              </a>
          </li>
            
        </ul>
    </div> 
  )
}
