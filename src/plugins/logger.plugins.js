const winston = require('winston');
const {combine , timestamp , json} = winston.format

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp() , json()),
//   defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = function BuildLogger(service){
    return{
        log:(message)=>{
            logger.log('info',{service,message})
        },
        error:(message)=>{
            logger.error('error',{service,message})
        },
        warn:(message)=>{
            logger.warn('warn',{service,message})
        }
    }
}