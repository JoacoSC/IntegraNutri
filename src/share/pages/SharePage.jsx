import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { es } from 'date-fns/locale'
import { setDefaultOptions } from 'date-fns/esm';
import queryString from "query-string";

import { LoadingScreen } from "../../ui/LoadingScreen";
import { useLocation } from "react-router-dom";
import { startLoadingMyJournal } from "../../store/journal";
import { startLoadingUserDisplayName } from "../../store/userInfo";
import { add, differenceInCalendarDays, format, fromUnixTime, getDaysInMonth, getUnixTime, lastDayOfWeek, set, startOfWeek } from "date-fns";
import { startLoadingMyPatients, uploadPatientNewConsultationFromSharePage } from "../../store/patients";
import { ModalNewConsultationSharePage } from "../../ui";
import { startLogoutSharePage } from "../../store/auth";

export const SharePage = () => {

    setDefaultOptions({ locale: es })

    const location = useLocation();

    const dispatch = useDispatch();

    const { uid = '' } = queryString.parse( location.search );

    const { isLogged } = useSelector( state => state.auth );

    const { displayName } = useSelector( state => state.userInfo );

    const { patients } = useSelector( state => state.patients );

    const {
        journalID,
        workingDayStartHours,
        workingDayStartMinutes,
        consultationHours,
        consultationMinutes,
        consultationsPerDay,
        journalIsSet,
        isEditingJournal,
        newJournalIsSet,
        newJournal,
    } = useSelector((state) => state.journal);

    const [isLoading, setIsLoading] = useState( true );

    const [calendarArray, setCalendarArray] = useState([])

    const [calendarDaysArray, setCalendarDaysArray] = useState([])

    const [calendarNamesOfDays, setCalendarNamesOfDays] = useState([
        'Lun',
        'Mar',
        'Mié',
        'Jue',
        'Vie',
        'Sáb',
        'Dom',
    ])

    const [ daysArray, setDaysArray ] = useState([ new Date() ]);

    const [workingDaysArray, setWorkingDaysArray] = useState([]);

    const [nextConsultationsArray, setNextConsultationsArray] = useState([]);

    const [isConsultationSlotAvailable, setIsConsultationSlotAvailable] = useState(false);

    const [currentCalendarValue, setCurrentCalendarValue] = useState({});

    const [monthCounter, setMonthCounter] = useState(0);

    const [currentDay, setCurrentDay] = useState(
        set(new Date(), {
          hours: workingDayStartHours,
          minutes: workingDayStartMinutes,
          seconds: 0,
          miliseconds: 0,
        })
    );

    const [startOfTheMonth, setStartOfTheMonth] = useState( new Date() )

    const [today, setToday] = useState( set(new Date(), { hours: 0, minutes: 0, seconds: 0 }) )

    const daysRef = useRef( new Array() );

    const daysRange = 60;

    const handleLoadingScreen = () => {

        setIsLoading( false )
        
    }

    const getNutritionistData = () => {

        dispatch( startLoadingMyJournal( uid ) );
        dispatch( startLoadingUserDisplayName( uid ) );
        dispatch( startLoadingMyPatients( uid ) )
    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleWorkingDaysArray = () => {
        const tempArray = []

        if( newJournal?.monday?.journalAM !== undefined || newJournal?.monday?.journalPM !== undefined ){
            tempArray.push('lunes');
        }
        if( newJournal?.tuesday?.journalAM !== undefined || newJournal?.tuesday?.journalPM !== undefined ){
            tempArray.push('martes');
        }
        if( newJournal?.wednesday?.journalAM !== undefined || newJournal?.wednesday?.journalPM !== undefined ){
            tempArray.push('miércoles');
        }
        if( newJournal?.thursday?.journalAM !== undefined || newJournal?.thursday?.journalPM !== undefined ){
            tempArray.push('jueves');
        }
        if( newJournal?.friday?.journalAM !== undefined || newJournal?.friday?.journalPM !== undefined ){
            tempArray.push('viernes');
        }
        if( newJournal?.saturday?.journalAM !== undefined || newJournal?.saturday?.journalPM !== undefined ){
            tempArray.push('sábado');
        }
        if( newJournal?.sunday?.journalAM !== undefined || newJournal?.sunday?.journalPM !== undefined ){
            tempArray.push('domingo');
        }
        setWorkingDaysArray( tempArray )
    }

    const handleCurrentDay = ( indexA, indexB ) => {

        // console.log( 'indexA:',indexA )
        // console.log( 'indexB:',indexB )

        let key = 0;

        if( indexA === 0 ){
            key = indexB;
        }else{
            key = ( indexA * 7 ) + indexB
        }
        
        setCurrentDay(calendarDaysArray[ key ]);

        const currentCalendarValue = calendarArray[indexA][indexB];
        
        console.log('currentDay: ', currentDay)

        console.log('isAvailable: ', currentCalendarValue.isAvailable)
        
        if( currentCalendarValue.isAvailable === true ){
            setIsConsultationSlotAvailable( true )
            setCurrentCalendarValue( calendarArray[indexA][indexB] );
            console.log('true')
        }else{
            setIsConsultationSlotAvailable( false )
            setCurrentCalendarValue( calendarArray[indexA][indexB] );
            console.log('false')
        }

        // const dayObject = {
        //     date: day,
        //     isAvailable: null,
        //     consultationSlots: [],
        //     consultationSlotsAvailable: [],
        //     consultationSlotsAvailableLength: null,
        // }
    }

    const handleDaysArray = () => {
        const array = []
        
        for (let i = 0; i < daysRange; i++) {
            array.push(add(new Date(), { days: i }));
        }
        
        setDaysArray(array)
    }

    const handleNextMonth = () => {
        
        setMonthCounter( monthCounter + 1 )
        // handleStartOfTheMonth(+1);

    }

    const handlePrevMonth = () => {
        
        setMonthCounter( monthCounter - 1 )
        // handleStartOfTheMonth(-1);
    }

    const handleStartOfTheMonth = ( value ) => {
        // console.log(startOfTheMonth)
        setStartOfTheMonth( set( new Date(), { year: format( new Date(), 'y' ), month: format( new Date(), 'M' ) - 1 + value, date: 1 }) )
        // console.log(startOfTheMonth)
    }

    const handleCreateCalendar = () => {

        // const currentMonth = format( new Date(), 'M' ) - 1;
        // console.log(startOfTheMonth)
        // console.log('currentMonth: ', currentMonth)
        
        const daysOfMonth = getDaysInMonth( startOfTheMonth )

        const calendarStart = startOfWeek( startOfTheMonth )
        
        const endOfTheMonth = set( startOfTheMonth, { date: daysOfMonth })

        const calendarEnd = lastDayOfWeek( endOfTheMonth )

        const numberOfDays = differenceInCalendarDays( calendarEnd, calendarStart ) + 1

        // console.log('today: ', today)

        // console.log('numberOfDays: ', numberOfDays)

        let array = [];

        const daysArray = [];

        const weeks = [];
        
        for (let i = 0; i < numberOfDays / 7; i++) {
            
            for (let j = 0; j < 7; j++) {

                const day = add( calendarStart, { days: j, weeks: i } );

                const dayObject = {
                    date: day,
                    isAvailable: null,
                    consultationSlots: [],
                    consultationSlotsAvailable: [],
                    consultationSlotsAvailableLength: null,
                }

                if( getUnixTime( day ) > getUnixTime( today ) ){
                    if( format( day, 'M' ) === format( startOfTheMonth, 'M' ) ){

                        if( format( day, 'i' ) === '1' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.monday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.monday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                        // console.log('dayObject: ', dayObject)
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    console.log('consultationSlotsArray:', dayObject.consultationSlots)

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }
                        if( format( day, 'i' ) === '2' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.tuesday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.tuesday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }
                        if( format( day, 'i' ) === '3' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.wednesday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.wednesday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }
                        if( format( day, 'i' ) === '4' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.thursday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.thursday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }
                        if( format( day, 'i' ) === '5' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.friday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.friday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }
                        if( format( day, 'i' ) === '6' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.saturday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.saturday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }
                        if( format( day, 'i' ) === '7' ){

                            if( newJournal !== null ){
                                
                                if( Object.keys(newJournal.sunday).length > 0 ){

                                    // dayObject.isAvailable = true
                                    const journal = newJournal.sunday;
                                    dayObject.consultationSlotsAvailableLength = journal.journalAM.length + journal.journalPM.length;
                                    let tempConsultationSlotsAvailableLength = dayObject.consultationSlotsAvailableLength

                                    if( journal.journalAM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalAM.length; i++) {
                                            
                                            // const consultationSlot = journal.journalAM[i].startTime
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalAM[i].startTime.slice(0, 2),
                                                minutes: journal.journalAM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }
                                    if( journal.journalPM.length > 0 ){
                                        
                                        for (let i = 0; i < journal.journalPM.length; i++) {
                                            
                                            const consultationSlot = getUnixTime( set( day, {
                                                hours: journal.journalPM[i].startTime.slice(0, 2),
                                                minutes: journal.journalPM[i].startTime.slice(3, 5),
                                            } ) )
                                            const dayObjectConsultationSlots = dayObject.consultationSlots
                                            dayObject.consultationSlots = [ ...dayObjectConsultationSlots, consultationSlot ]
                                            dayObject.consultationSlotsAvailable = [ ...dayObjectConsultationSlots, consultationSlot ]
                                        }
                                    }

                                    if( nextConsultationsArray.length > 0 ){

                                        const consultationSlotsArray = dayObject.consultationSlots;
    
                                        for (let i = 0; i < consultationSlotsArray.length; i++) {

                                            for (let j = 0; j < nextConsultationsArray.length; j++) {

                                                if( consultationSlotsArray[i] === nextConsultationsArray[j] ){
                                                    
                                                    tempConsultationSlotsAvailableLength = tempConsultationSlotsAvailableLength - 1;
                                                    for (let k = 0; k < dayObject.consultationSlotsAvailable.length; k++) {
                                                        if( dayObject.consultationSlotsAvailable[k] === nextConsultationsArray[j] ){
                                                            
                                                            dayObject.consultationSlotsAvailable.splice(k, 1)
                                                            
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // console.log('tempConsultationSlotsAvailable: ', tempConsultationSlotsAvailable)

                                    if( tempConsultationSlotsAvailableLength === 0 ){
                                        dayObject.isAvailable = false;
                                    }else{
                                        dayObject.isAvailable = true;
                                    }

                                    dayObject.consultationSlotsAvailableLength = tempConsultationSlotsAvailableLength;

                                    // console.log('dayObject: ', dayObject)

                                    

                                }else{
                                    dayObject.isAvailable = false
                                }
                            }
                        }

                    }else{

                        dayObject.isAvailable = false

                    }
                }else{
                    dayObject.isAvailable = false
                }
                
                array.push( dayObject )

                daysArray.push( day )
                // array.push( day )
                // daysArray.push( day )
                
            }
            weeks.push( array )
            array = [];
            
        }

        setCalendarDaysArray( daysArray )

        setCalendarArray( weeks )

        // handleAvailableDays()

        // console.log('weeks: ', weeks)

    }

    const handlePatientsNextConsultations = () => {

        const array = [];

        for (let i = 0; i < patients.length; i++) {

            if( patients[i].nextConsultation !== null ){
                
                array.push( patients[i].nextConsultation )
            }
            
            
        }

        // console.log('nextConsultationsArray:', array)

        setNextConsultationsArray( array )

    }

    // const handleAvailableDays = () => {
        
    //     console.log('startOfTheMonth: ', startOfTheMonth)
    //     console.log('newJournal: ', newJournal)

    //     const array = [];

    //     for (let i = 0; i < calendarDaysArray.length; i++) {
            
    //         if( format(calendarDaysArray[i], 'M') === format(startOfTheMonth, 'M') ){

    //             array.push({
    //                 date: calendarDaysArray[i],
    //                 isCurrentMonth: true,
    //             })
    //         }else{
    //             array.push({
    //                 date: calendarDaysArray[i],
    //                 isCurrentMonth: false,
    //             })
    //         }
    //     }

    //     console.log('array: ', array)
    //     // if( Object.keys(newJournal.monday).length ){

    //     // }

    // }

    const onLogout = () => {
            
        dispatch( startLogoutSharePage() );
    
    }

    useEffect(() => {

        if( uid !== '' ){
            
            handleLoadingScreen();
            getNutritionistData();
        }

    }, [uid])

    useEffect(() => {
        handlePatientsNextConsultations();
        handleWorkingDaysArray();
        
    }, [patients])

    useEffect(() => {
        handleCreateCalendar();
    }, [nextConsultationsArray, newJournal, startOfTheMonth])

    useEffect(() => {
        
        handleDaysArray();

    }, []);

    useEffect(() => {
        
        handleStartOfTheMonth( 0 );

    }, []);

    useEffect(() => {
        
        handleStartOfTheMonth( monthCounter );

    }, [monthCounter]);
    
    // console.log('currentDay: ', currentDay)
    // console.log('calendarArray: ', calendarArray)

    return (
        <div className="flex-column min-height-100vh">
            {
                ( isLoading )
                ?   <LoadingScreen isLoading = { isLoading } />
                :   <>
                        <div className="food-background flex-column align-items-center p-2">

                            <div className="sharepage-logout-container">
                                {
                                    ( isLogged === true)
                                    ?   <div className="logout">
                                            <button className="btn-logout" type="button" onClick={onLogout}>
                                                Cerrar sesión
                                            </button>
                                        </div>
                                    :   null
                                }

                            </div>
                            <div className="main-welcome">
                                <h1>Agenda de { displayName }</h1>
                            </div>
                            <div className="flex-column">
                                <div className="calendar-container">
                                    <div className="calendar flex-column align-items-center">
                                        <div className="month-year-container">
                                            <div className="calendar-next-prev-day-ellipse" onClick={ () => handlePrevMonth() }><p>{ "<" }</p></div>
                                            {
                                                <p>{ capitalizeFirst( format( startOfTheMonth, 'MMMM y' ) ) }</p>
                                            }
                                            <div className="calendar-next-prev-day-ellipse" onClick={ () => handleNextMonth() }><p>{ ">" }</p></div>
                                        </div>
                                        <div className="date-names-container">
                                            { 
                                                calendarNamesOfDays.map( (name, index) => ( 
                                            
                                                                
                                                        <p className="date-names-item" key={ index }>{ name }</p>
                                                        
                                                    
                                                ) )
                                            }
                                        </div>
                                        { 
                                            calendarArray.map( (week, indexA) => ( 
                                                <div className="calendar-weeks" key={ indexA }>
                                                    {
                                                        week.map( (day, indexB) => ( 
                                                    
                                                            <div className="" key={ indexB }>
                                                                        
                                                                <div className={ (day.isAvailable ? ( day.date === currentDay ) ? "calendar-day-ellipse-active" : "calendar-day-ellipse" : "calendar-day-ellipse-unavailable") } ref={(element) => daysRef.current.push(element)} onClick={ () => handleCurrentDay( indexA, indexB ) }>{ format( day.date, "dd") }</div>
                                                                
                                                            </div>
                                                            
                                                        ) )
                                                    }
                                                </div>
                                            ) )
                                        }

                                    </div>
                                </div>
                                {
                                    ( isConsultationSlotAvailable )
                                    ?   <div className="flex-column align-items-center">
                                            <div className="calendar-extension-container flex-column">
                                                <div>
                                                    <p className="calendar-extension-title">{capitalizeFirst( format( currentDay, 'iiii' ) + ' ' + format( currentDay, 'dd' ) + ' de ' + format( currentDay, 'MMMM' ) )}</p>
                                                </div>
                                                <div className="calendar-extension-consultations">
                                                    {
                                                        ( currentCalendarValue?.consultationSlotsAvailable?.length > 0 )
                                                        ?   currentCalendarValue.consultationSlotsAvailable.map( ( consultationSlot, index ) => ( 
                                                                <div className="day" key={ index }>

                                                                    <ModalNewConsultationSharePage consultationSlot = { consultationSlot } />
                                                                    {/* <div className="day-ellipse" onClick={ () => registerNextConsultation( consultationSlot ) }>{ format( fromUnixTime( consultationSlot ), 'HH:mm') }</div> */}
                                                                    
                                                                </div>
                                                                
                                                            ) )
                                                        :   null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    :   null
                                }
                            </div>
                            
                        </div>
                    </>
            }
        </div>
    )
}
