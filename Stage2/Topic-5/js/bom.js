//task1

const batteryBtn = document.querySelector("#batteryBtn")
const batteryInfo = document.querySelector("#batteryInfo")


batteryBtn.addEventListener("click", function () {
    navigator.getBattery().then((battery) => {
        // console.log(battery);

       const batteryLevel =  battery.level * 100

       batteryInfo.textContent = `${batteryLevel}%`


       const charging = battery.charging;

      
       document.querySelector("#parag").textContent = charging ? `hal hazirda enerji yigir` : `hal hazirda enerji yigmir`
    
        
    })
})


//task2

const locationBtn = document.querySelector("#locationBtn")
const getLocation = document.querySelector("#getLocation")


locationBtn.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((showPosition) => {
            // console.log(showPosition);

            const latitude = showPosition.coords.latitude;

            const longitude = showPosition.coords.longitude
            

            getLocation.textContent = `${latitude} ${longitude}`
            
        })
    }else{
      getLocation.textContent = `Geolocation is not supported by this browser`
    }
})
