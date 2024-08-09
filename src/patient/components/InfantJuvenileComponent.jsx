
import { CardEstadioTanner, CardPerimetroCefalico, CardPerimetroCintura, CardTallaDiana } from "../../ui";
import { CardPresionArterial } from "../../ui/CardPresionArterial";
import CardIMC from "../../ui/CardIMC";

export const InfantJuvenileComponent = ({ commonProps }) => {

  const {
    patientObject,
    nutritionalRating,
    ageForCalcs,
    imcPregnant,
    ageText,
    biologicalSex,
    biologicalAgeIsSet,
    presionArterial,
    tallaDiana,
    perimetroCefalico,
    perimetroCintura,
  } = commonProps

  return (
    <>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardIMC */}
        {(biologicalSex === 'Femenino' && ageForCalcs.y > 13 && ageForCalcs.y < 50) && (
          <CardIMC
            patientObject={patientObject}
            nutritionalRating={nutritionalRating}
            ageForCalcs={ageForCalcs}
            imcPregnant={imcPregnant}
            ageText={ageText}
            biologicalSex={biologicalSex}
          />
        )}
        
      </div>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardTallaDiana */}
        {!!tallaDiana && (
          <CardTallaDiana />
        )}
    
        {/* Renderización de CardPerimetroCefalico */}
        {!!perimetroCefalico && ageForCalcs.y < 3 && (
          <CardPerimetroCefalico />
        )}
      </div>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardPresionArterial */}
        {!!presionArterial && ageForCalcs.y > 0 && (
          <CardPresionArterial />
        )}
    
        
    
        {/* Renderización de CardPerimetroCintura */}
        {!!perimetroCintura && ageForCalcs.y > 5 && (
          <CardPerimetroCintura />
        )}
      </div>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardEstadioTanner */}
        {biologicalAgeIsSet && (
          <CardEstadioTanner
            nutritionalRating={nutritionalRating}
          />
        )}
      </div>    
    </>
  );
  
}
