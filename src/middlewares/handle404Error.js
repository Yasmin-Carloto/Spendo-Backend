const handle404Error = function(req, res) {
    res.status(404);
    res.send(['Not Found']);
}

module.exports = handle404Error;