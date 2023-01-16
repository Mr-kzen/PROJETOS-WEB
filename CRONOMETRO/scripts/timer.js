const listSelector = document.querySelectorAll("[data-selection]")
const li = document.querySelectorAll(".addTimer ul li")

li.forEach((event) => {
  
  event.addEventListener('click', () => {
   
    const hour = event.classList.contains('hour')
    const minute = event.classList.contains('minute')
    const seconts = event.classList.contains('seconts')
    
    const ifTimerSelection = document.querySelectorAll(".timerSelection")
    
  ifTimerSelection.forEach( () => {
    
    console.log("entrei" + ifTimerSelection)
    if(ifTimerSelection[0].classList.contains){
      ifTimerSelection[0].classList.remove("timerSelection")
    }

  })
    
    console.log("Timer " + hour)
    
    if(hour){
      event.classList.add("timerSelection")  
    }if(minute){
      event.classList.add("timerSelection")
    }if(seconts){
      event.classList.add("timerSelection")
    }
    
    
  })
})
