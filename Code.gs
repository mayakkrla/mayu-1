function main() {
  const myID = PropertiesService.getScriptProperties().getProperty('myID')
  var today = new Date();
  
  const calendar = CalendarApp.getCalendarById(myID).getEventsForDay(today)
  const format = (Date) =>{
  var todayStr = Utilities.formatDate(Date, 'JST', 'KK:mm');
  return todayStr
  }
  let messages = ""
  for(let i = 0 ; i < calendar.length ; i++ ){
    times = format(calendar[i].getStartTime())
    messages += (times+":"+calendar[i].getTitle());
    console.log(messages)
  }
  sendLineNotify(messages)
  

  console.log(calendar.length)
}

  
const sendLineNotify = (message) => {
  const LINE_NOTIFY_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('LINE_NOTIFY_ACCESS_TOKEN') 
  const LINE_NOTIFY_API = PropertiesService.getScriptProperties().getProperty('LINE_NOTIFY_API');

  const options = {
    method: 'post',
      "payload": {
        message: message,
      },
      "headers": {"Authorization": "Bearer " + LINE_NOTIFY_ACCESS_TOKEN}
  }
  UrlFetchApp.fetch(LINE_NOTIFY_API,options);
}