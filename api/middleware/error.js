module.exports = (error, res, next)=> {
    res.json({
        err:error
    });
    next();
}
    