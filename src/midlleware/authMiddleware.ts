import express from "express";
import User from "../entity/user";
import jwtservice from "../provider/jwtservice";
class AuthMiddleware {
    async validateUserToken(req: any, res: express.Response, next: express.NextFunction) {
        try {
            const token:any = req.headers.authorization?.split(' ')[1];
            const decodedToken = jwtservice.verify(token);
            req.phone = decodedToken.phone;
            const exist = await User.find({phone: decodedToken.phone,active: 'active'});
            console.log(exist.length);
            if (!exist || !exist.length) {
                res.status(401).send({ error: 'token invalid.' });
                return;
            }
            req.userID = exist[0]._id;
            let now = Math.floor(Date.now() / 1000);
            if (now >= (decodedToken.iat + decodedToken.expiresIn)) {
                res.status(401).send({ error: 'expired token', code: 1 });
                return;
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(401).send({ error: 'token invalid' });
        }
    }
}
export default new AuthMiddleware();