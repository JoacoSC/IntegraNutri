// Component imports
import { CardAnthropometry, CardBodyComposition, CardExamsRequest, CardAdultEnergyRequirements } from "../../ui";
import CardIMC from "../../ui/CardIMC";
import { CardNutritionalIndications } from "../../ui/CardNutritionalIndications";
import { CardPresionArterial } from "../../ui/CardPresionArterial";

// Asset imports
/**/

export const AdultElderlyPregnantComponent = ({ commonProps }) => {

  const {
    uid,
    isNutritionistStatus,
    patientID,
    displayName,
    portionDistribution,
    patientExams,
    patientIsAdult,
    patientObject,
    nutritionalRating,
    ageForCalcs,
    imcPregnant,
    ageText,
    biologicalSex,
    presionArterial,
    anthropometry,
    adultEnergyRequirements
  } = commonProps;

  return (
    <>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardAnthropometry */}
        {anthropometry && Object.keys(anthropometry).length > 0 && (
          <CardAnthropometry 
            commonProps={commonProps}
          />
        )}
        {/* Renderización de CardIMC */}
        {patientIsAdult || (biologicalSex === 'Femenino' && ageForCalcs.y > 13 && ageForCalcs.y < 50) ? (
          <CardIMC
            patientObject={patientObject}
            nutritionalRating={nutritionalRating}
            ageForCalcs={ageForCalcs}
            imcPregnant={imcPregnant}
            ageText={ageText}
            biologicalSex={biologicalSex}
          />
        ) : null}

      </div>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardPresionArterial */}
        {anthropometry && Object.keys(anthropometry).length > 0 && (
          <CardBodyComposition
            commonProps={commonProps}
          />
        )}
      </div>
      <div className="patient-secondary-card-row">
        {/* Renderización de CardPresionArterial */}
        {!!presionArterial && (
          <CardPresionArterial />
        )}
      </div>
      <div className="patient-secondary-card-row">
        
        {/* Renderización de CardExamsRequest */}
        {isNutritionistStatus && patientExams.examRequest && (
          <CardExamsRequest
            patientID={isNutritionistStatus ? patientID : displayName}
          />
        )}
    
        {/* Renderización de CardNutritionalIndications */}
        {isNutritionistStatus && patientExams.nutritionalIndications && (
          <CardNutritionalIndications
            patientID={isNutritionistStatus ? patientID : displayName}
          />
        )}
      </div>
      <div className="patient-secondary-card-row">
        
        {/* Renderización de CardEnergyRequirements */}
        {adultEnergyRequirements && (
          <CardAdultEnergyRequirements
            energyRequirements={adultEnergyRequirements}
          />
        )}
      </div>
    </>
  );
  
}
