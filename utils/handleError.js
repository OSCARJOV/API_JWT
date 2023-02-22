const handleHttpError = (res, message= "Error_Handle", code = 403) => {
    res.status(code);
    res.send({ error: message})
}

module.exports = { handleHttpError }