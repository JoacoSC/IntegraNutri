// Component imports
import { CardAnthropometry, CardExamsRequest, CardMealTimePortionDistribution } from "../../ui";
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
    anthropometry
  } = commonProps;

  return (
    <>
      {/* Renderización de CardAnthropometry */}
      {Object.keys(anthropometry).length > 0 && (
        <CardAnthropometry 
          commonProps={commonProps}
        />
      )}
      {/* Renderización de CardPresionArterial */}
      {!!presionArterial && (
        <CardPresionArterial />
      )}
      {/* Renderización de CardMealTimePortionDistribution */}
      {portionDistribution && (
        <CardMealTimePortionDistribution
          patientID={isNutritionistStatus ? patientID : displayName}
        />
      )}
  
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
    </>
  );
  
}
