const fs=require('fs')
const os= require ('os')

const EventEmmiter = require ('events')
class Logger extends EventEmmiter{
    log(message){
        this.emit ('message',{message})
    }
}
const logger = new Logger()
const logfile='./eventlog.txt'

const logtofile=(event)=>
{
const logMessage=`${new Date().toISOString()}- ${event.message}\n`;
fs.appendFileSync(logfile,logMessage)
}

logger.on('message',logtofile)
setInterval(() => {
  const memoryUsage=( os.freemem()/os.totalmem())*100
  logger.log(`current memory usage : ${memoryUsage.toFixed(2)}`)
},3000);