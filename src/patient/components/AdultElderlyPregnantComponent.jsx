// Component imports
import { CardExamsRequest, CardMealTimePortionDistribution } from "../../ui";
import CardIMC from "../../ui/CardIMC";
import { CardNutritionalIndications } from "../../ui/CardNutritionalIndications";

// Asset imports
/**/

export const AdultElderlyPregnantComponent = ({ commonProps }) => {

  const {
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
  } = commonProps;

  return (
    <>
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
