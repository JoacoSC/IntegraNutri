import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { es } from 'date-fns/locale'
import { setDefaultOptions } from 'date-fns/esm';
import queryString from "query-string";

import { LoadingScreen } from "../../ui/LoadingScreen";
import { useLocation } from "react-router-dom";
import { startLoadingMyJournal } from "../../store/journal";
import { startLoadingUserDisplayName } from "../../store/userInfo";
import { add, differenceInCalendarDays, format, getDaysInMonth, lastDayOfWeek, set, startOfWeek } from "date-fns";

export const SharePage = () => {

    setDefaultOptions({ locale: es })

    const location = useLocation();

    const dispatch = useDispatch();

    const { uid = '' } = queryString.parse( location.search );

    const { isLogged } = useSelector( state => state.auth );

    const { displayName } = useSelector( state => state.userInfo );

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

    const [calendarNumberOfDaysArray, setCalendarNumberOfDaysArray] = useState([])

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

    const [currentDay, setCurrentDay] = useState(
        set(new Date(), {
          hours: workingDayStartHours,
          minutes: workingDayStartMinutes,
          seconds: 0,
          miliseconds: 0,
        })
      );

    const daysRef = useRef( new Array() );

    const daysRange = 60;

    const handleLoadingScreen = () => {

        setIsLoading( false )
        
    }

    const getNutritionistData = () => {

        dispatch( startLoadingMyJournal( uid ) );
        dispatch( startLoadingUserDisplayName( uid ) );
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

    const handleCurrentDay = ( key ) => {

        // console.log(key)
        
        if( newJournal === undefined ){

            const currentDay = daysArray[ key ];
            const formattedCurrentDay = set(currentDay, {
              hours: workingDayStartHours,
              minutes: workingDayStartMinutes,
              seconds: 0,
              miliseconds: 0,
            });
            setCurrentDay( formattedCurrentDay );
        }else{
            const currentDay = daysArray[ key ];

            // monday

            if( newJournal?.monday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'lunes' ){
                    if( newJournal?.monday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.monday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.monday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.monday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.monday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // monday
            // tuesday

            if( newJournal?.tuesday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'martes' ){
                    if( newJournal?.tuesday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.tuesday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.tuesday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.tuesday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.tuesday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // tuesday
            // wednesday

            if( newJournal?.wednesday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'miércoles' ){
                    if( newJournal?.wednesday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.wednesday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.wednesday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.wednesday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.wednesday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // wednesday
            // thursday

            if( newJournal?.thursday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'jueves' ){
                    if( newJournal?.thursday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.thursday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.thursday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.thursday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.thursday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // thursday
            // friday

            if( newJournal?.friday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'viernes' ){
                    if( newJournal?.friday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.friday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.friday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.friday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.friday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // friday
            // saturday

            if( newJournal?.saturday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'sábado' ){
                    if( newJournal?.saturday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.saturday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.saturday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.saturday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.saturday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // saturday
            // sunday

            if( newJournal?.sunday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'domingo' ){
                    if( newJournal?.sunday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.sunday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.sunday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.sunday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.sunday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // sunday
            
            
            // setCurrentDay( formattedCurrentDay );

            // console.log('currentDay: ', currentDay)
        }
    }

    const handleDaysArray = () => {
        const array = []
        
        for (let i = 0; i < daysRange; i++) {
            array.push(add(new Date(), { days: i }));
        }
        
        setDaysArray(array)
    }

    const handleCreateCalendar = () => {

        // const currentMonth = format( new Date(), 'M' ) - 1;

        // console.log('currentMonth: ', currentMonth)

        const startOfTheMonth = set( new Date(), { year: format( new Date(), 'y' ), month: format( new Date(), 'M' ) - 1, date: 1 })
        
        const daysOfMonth = getDaysInMonth( startOfTheMonth )

        const calendarStart = startOfWeek( startOfTheMonth )
        
        const endOfTheMonth = set( startOfTheMonth, { date: daysOfMonth })

        const calendarEnd = lastDayOfWeek( endOfTheMonth )

        const numberOfDays = differenceInCalendarDays( calendarEnd, calendarStart ) + 1

        // console.log('numberOfDays: ', numberOfDays)

        let array = [];

        const weeks = [];
        
        for (let i = 0; i < numberOfDays / 7; i++) {
            
            for (let j = 0; j < 7; j++) {
    
                array.push( add( calendarStart, { days: j, weeks: i } ) )
                
            }
            weeks.push( array )
            array = [];
            
        }

        setCalendarNumberOfDaysArray( weeks )

        // console.log('weeks: ', weeks)

    }

    useEffect(() => {

        if( uid !== '' ){
            
            handleLoadingScreen();
            getNutritionistData();
        }

    }, [uid])

    useEffect(() => {
        handleWorkingDaysArray();
    }, [newJournal])

    useEffect(() => {
        
        handleDaysArray();
        handleCreateCalendar();

    }, []);
    
    // console.log('currentDay: ', currentDay)

    return (
        <div className="flex-column min-height-100vh">
            {
                ( isLoading )
                ?   <LoadingScreen isLoading = { isLoading } />
                :   <>
                        <div className="food-background flex-column align-items-center p-2">
                            <div className="main-welcome">
                                <h1>Agenda de { displayName }</h1>
                            </div>
                            <div className="calendar-container">
                                <div className="calendar">
                                    <div className="date-names-container">
                                        { 
                                            calendarNamesOfDays.map( (name, index) => ( 
                                        
                                                            
                                                    <p className="date-names-item" key={ index }>{ name }</p>
                                                    
                                                
                                            ) )
                                        }
                                    </div>
                                    { 
                                        calendarNumberOfDaysArray.map( (week, index) => ( 
                                            <div className="calendar-weeks" key={ index }>
                                                {
                                                    week.map( (day, index) => ( 
                                                
                                                        <div className="day" key={ index }>
                                                                    
                                                            <div className="day-ellipse" ref={(element) => daysRef.current.push(element)} onClick={ () => handleCurrentDay( index ) }>{ format( day, "dd") }</div>
                                                            
                                                        </div>
                                                        
                                                    ) )
                                                }
                                            </div>
                                        ) )
                                    }

                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
