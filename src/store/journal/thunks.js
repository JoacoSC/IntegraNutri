import { editJournal } from "./";

export const startEditJournal = ( workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay ) => {
    
    return async( dispatch ) => {
        return dispatch( editJournal({ workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay }) );
        
    }
}