const verifyRole = (...roles) => {
    console.log({ roles })
    return (req, res, next) => {
        const auth = []
        const token = req.token
        if (token) {
            
        }
        res.error({
            code: 401,
            message: 'Token Anda Tidak Sesuai'
        })
    }
}