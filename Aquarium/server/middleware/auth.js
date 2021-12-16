import jwt, {decode} from 'jsonwebtoken'

//like button , auth middleware ()

const auth = async (req,res,next) => {
    try { 

        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length <500;

        let decodedData;
        
        if (token && isCustomAuth) {
            decodedData = jwt.verify (token, 'test');

            req.userId = decodedData ?. id;

        } else {
            
            decodedData = jwt.decode(token)

            req.userId = decodedData ?.sub; // id google
        }

        next()
    } catch (error) {
        console.log (error)
        
    }
}

export default auth;
 