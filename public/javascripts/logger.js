const LogLevel = {ALL: 5, DEBUG: 4, INFO: 3, WARN: 2, ERROR: 1, OFF: 0};
const LogLevelNames = {4: "DEBUG", 3: "INFO", 2: "WARN", 1: "ERROR"};

class Logger {
    constructor(level) {
        this.level = level;
    }

    static formatMsg(msg, timestamp, level) {
        return `| ${timestamp} | ${level.padEnd(5)} | ${msg} |`;
    }

    logMessage(level, msg, obj){
        if (this.level >= level) {
            const timestamp = new Date().getTime();
            console.info(Logger.formatMsg(msg, timestamp, LogLevelNames[level]));
            if (obj) {
                console.info(obj);
            }
        }
    }

    info(msg, obj) {
        this.logMessage(LogLevel.INFO, msg, obj);
    }

    debug(msg, obj) {
        this.logMessage(LogLevel.DEBUG, msg, obj);
    }

    warn(msg, obj) {
        this.logMessage(LogLevel.WARN, msg, obj);
    }

    error(msg, obj) {
        this.logMessage(LogLevel.ERROR, msg, obj);
    }
}

// Default Logger
const logger = new Logger(LogLevel.INFO);