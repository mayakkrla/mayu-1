function main() {
  const myID = PropertiesService.getScriptProperties().getProperty('myID')
  var today = new Date();
  
  const calendar = CalendarApp.getCalendarById(myID).getEventsForDay(today)
  const format = (Date) =>{
  var todayStr = Utilities.formatDate(Date, 'JST', 'KK:mm');
  return todayStr;
  };

  let messages = "\nGood morning, Mayukha!\n Here's your schedule for today:"
  for(let i = 0 ; i < calendar.length ; i++ ){
    let times = format(calendar[i].getStartTime())
    const index = i + 1;
    
  messages +=`\n ${index}.  ${calendar[i].getTitle()} ${"at"} ${times}`;
  
  }
const quotes = [
  "We are what we repeatedly do; excellence, then, is not an act but a habit.",
  "Creativity is a wild mind and a disciplined eye.",
  "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
  "Waiting for perfect is never as smart as making progress.",
  "Those who do not want to imitate anything, produce nothing. ",
  "We are what we repeatedly do; excellence, then, is not an act but a habit.",
  "Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You must simply do things.",
  "Everyone who’s ever taken a shower has had an idea. It’s the person who gets out of the shower, dries off and does something about it who makes a difference.",
 ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
 const quote = quotes[randomIndex];

 messages += `\n\n Here's a quote for you today: "${quote}"`
  sendLineNotify(messages)
  

  console.log(messages)
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