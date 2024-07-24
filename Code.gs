function getCalendarevent() {
    let myCalendar = PropertiesService.getScriptProperties().getProperty('myID');
  
  let startDate = new Date();
  let endDate = new Date();
  endDate.setDate(startDate.getDate() + 7);
  let myEvent = myCalendar.getEvents(startDate, endDate);
  for(let i = 0 ; i < myEvent.length ; i++ ){
console.log(myEvent[i].getTitle());
}
}
