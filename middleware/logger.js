//@desc         Logs request to console

const logger = (req, res, next) => {
    console.log(
        `${req.method} and ${req.protocol} and ://${req.get('host')}and ${req.originalUrl}`
    );
    next();

};

module.exports = logger;