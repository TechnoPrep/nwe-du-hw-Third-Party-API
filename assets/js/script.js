
let dateValue = moment().format('MDYY');

let currentTime = moment().format('H');

console.log(currentTime);

console.log(typeof(currentTime));


function eventMgmt(){

    timeInt = parseInt(currentTime);

    console.log(typeof(currentTime));

    for (let i = 0; i < 24; i++) {
    
        if($(`#event${i}`).length){
        
            let htmlData = getIdAsString(`event${i}`);
            
            let slotId = htmlData.attr('id').replace('event','');

            let idInt = parseInt(slotId)
            
            console.log(slotId);

            if(idInt < timeInt){
                $(`#event${slotId}`).toggleClass('isBefore');
                console.log(`${slotId} is less than ${currentTime}`);
            
            }

            if(idInt === timeInt){
                $(`#event${slotId}`).toggleClass('isCurrent');
                console.log(`${slotId} is the same as ${currentTime}`);
            
            }
            
            if (idInt > timeInt){
                $(`#event${slotId}`).toggleClass('isAfter');
                console.log(`${slotId} is greater than ${currentTime}`);
            }   
    
        }
    
    }

}

eventMgmt();

function getIdAsString(elementId){

        let initalId = document.getElementById(elementId);
        let rowData = initalId.outerHTML;
        let htmlData = $(rowData);

        return htmlData;

}

function saveToLocal(buttonID) {

    let htmlData = getIdAsString(buttonID);

    let textAreaId = htmlData.attr('id').replace('-btn','');

    let tempObj = JSON.parse(localStorage.getItem(`${dateValue}`));

    let objKey = `${textAreaId}`;

    tempObj[`${objKey}`] = document.getElementById(textAreaId).value

    localStorage.setItem(`${dateValue}`, JSON.stringify(tempObj));
}

function displayEvents(){

    eventsObj = JSON.parse(localStorage.getItem(`${dateValue}`));
    
    for (let i = 0; i < 24; i++) {
        
        objKey = `event${i}`;
        eventId = `event${i}`;
       if(objKey in eventsObj){
        
        $(`#${eventId}`).text(eventsObj[objKey]);
       }
    }
}

displayEvents();

$('.custom-btn').click(function(event){
    event.preventDefault();
    btnId = this.id;
    saveToLocal(btnId);
})

function clock(){

    setInterval(function(){
        let today = moment().format('dddd, MMMM Do');

        $('#clock').text(today);
    })

}

clock();