const {CustomAPIError} = require("../erros/customError")

const errorHandlerMiddleware = (err, req, res, next) =>{
    if(err instanceof CustomAPIError){
        return res.status(err.status).json({msg: err.message})
    }
    return res.status(500).json({msg: "something went wrong try again later"})
}

module.exports = errorHandlerMiddleware;