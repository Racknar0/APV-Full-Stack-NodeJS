
const checkAuth = ( req , res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))  {
        console.log('SI tiene el token con bearer');
    } 

    const  error = new Error('Token No valido o Inexistente')
    res.status(403).json({msg: error.message});
    next()
}

export default checkAuth;