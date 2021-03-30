const getSleepHours = day => {
    day = day.toLowerCase()
    if(day === 'monday'){
      return '7 hours'
    } else if(day === 'tuesday'){
      return '7 hours'
    } else if(day === 'wednesday'){
      return '6 hours'
    } else if(day ==='thursday'){
      return '7 hours'
    } else if(day === 'friday'){
      return '8 hours'
    } else if(day === 'saturday'){
      return '8 hours'
    } else if(day === 'sunday'){
      return '8 hours'
    }
    }
    
    console.log(getSleepHours('monday'))
    console.log(getSleepHours('tuesday'))
    console.log(getSleepHours('wednesday'))
    console.log(getSleepHours('sunday'))