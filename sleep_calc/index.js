const getSleepHours = day => {
    day = day.toLowerCase()
    if(day === 'monday'){
      return 7;
    } else if(day === 'tuesday'){
      return 7;
    } else if(day === 'wednesday'){
      return 7;
    } else if(day ==='thursday'){
      return 7;
    } else if(day === 'friday'){
      return 7;
    } else if(day === 'saturday'){
      return 7;
    } else if(day === 'sunday'){
      return 7;
    } 
 }
    
    console.log(getSleepHours('monday'))
    console.log(getSleepHours('tuesday'))
    console.log(getSleepHours('wednesday'))
    console.log(getSleepHours('sunday'))

    const getActualSleepHours = () => {
         return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
      
    }

    console.log(getActualSleepHours())

    const getIdealSleepHours = () => {
        const idealHours = 7;
        return idealHours * 7;
    };

   console.log(getIdealSleepHours());

    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
        if(actualSleepHours === idealSleepHours){
            console.log('You got the perfect amount of sleep!')
        }else if( actualSleepHours > idealSleepHours){
            console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours than your target amount of sleep. Way to go!')
        }else if( idealSleepHours > actualSleepHours){
            console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Please get some rest!')
        } else {"Oops, something went wrong!"}
    }
   console.log(calculateSleepDebt());

   