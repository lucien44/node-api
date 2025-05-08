var jwt = require('jsonwebtoken');
class Jwtservice {

    sign(payload:any) {
        const createdAt = new Date();
        const token = jwt.sign({ ...payload, expiresIn: 30 * 24 * 60 * 60, 
                                iat: Math.floor(Date.now() / 1000) - 30, 
                                createdAt:createdAt}, process.env.JWT_SECRET);
    
        return {
          token,
          expiresIn: 30 * 24 * 60 * 60,
          createdAt,
        };
      }
    
      verify(token:string) {
        return jwt.verify(token, process.env.JWT_SECRET);
      }

}

export default new Jwtservice();