
let dateValue = moment().format('MDYY');

let currentTime = moment().format('H');

console.log(currentTime);

function eventMgmt(){

    currentTime.toString();

    let slotId = document.getElementById('9-slot')
    let rowData = slotId.outerHTML;
    // let htmlData = 

    // if(){
    //     console.log(`5PM is after ${currentTime}`);
    // }
}

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

    console.log(Object.keys(eventsObj).length);
    
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