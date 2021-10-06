export default function countDownClock(endDate,endTime){
    const date = endDate; 
    const time = endTime;
    const dateArr = date.split('/')
    const timeArr = time.split(':')
    const dateInstance = new Date
    const year = parseInt(dateArr[2]) - parseInt(dateInstance.getFullYear())
    let month = parseInt(dateArr[1]) - (parseInt(dateInstance.getMonth()) + 1);
    if (month < 0){
        year = year - 1
        month = 12 + parseInt(dateArr[1]) - parseInt(dateInstance.getMonth()) + 1;
    }
    let day = 30*month + parseInt(dateArr[0]) - parseInt(dateInstance.toDateString().split(' ')[2]);
    let hour = parseInt(timeArr[0]) - parseInt(dateInstance.getHours()) + 1;
    if (hour < 0){
        day = day - 1
        hour = 24 + parseInt(timeArr[0]) - parseInt(dateInstance.getHours()) + 1;
    }
    let minutes = parseInt(timeArr[1]) - parseInt(dateInstance.getMinutes()) + 1;
    if (minutes < 0){
        hour = hour - 1
        minutes = 60 + parseInt(timeArr[1]) - parseInt(dateInstance.getMinutes()) + 1;
    }
    let seconds = parseInt(timeArr[2]) - parseInt(dateInstance.getSeconds());
    if (seconds < 0){
        minutes = minutes - 1
        seconds = 60 + parseInt(timeArr[2]) - parseInt(dateInstance.getSeconds());
    }
    let displayDay = day < 10 ? `0${day}` : `${day}`;
    let displayHour = hour < 10 ? `0${hour}` : `${hour}`;
    let displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return {
        timing1:[displayDay,displayHour,displayMinutes,displaySeconds],
        timing2:`${displayDay}:${displayHour}:${displayMinutes}`
    }
}