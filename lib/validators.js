const validate = (schema, property) => {
        return (req, res, next) => {
        console.log('Entering Validation', { property: req[property] })
        const { error } = schema.validate(req[property])
    
        if (error) {
            res.error(error)
        }
        next()    
    }
}

module.exports = {
    validate
}