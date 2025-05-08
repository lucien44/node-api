import User from "../entity/user";
import { Request, Response } from 'express';
import otpService from "../provider/otpService";
import jwtservice from "../provider/jwtservice";
export default class UsserController {
    static async create(req: any, res: any) {
        try {
            const otp = await otpService.generateOTP(req.body.phone);
            const token = jwtservice.sign({ phone: req.body.phone });
            const exist = await User.find({ phone: req.body.phone });
            if (exist && !exist.length) {
                const newUser = new User({ active: 'pending', phone: req.body.phone });
                newUser.save().then((user: any) => {
                    res.status(201).send({
                        success: true, message: 'Successfully created.', idUser: user._id, token: token,
                    });
                });
                return;
            } else {
                const filter = { phone: req.body.phone };
                const update = { active: 'pending' };
                let doc = await User.findOneAndUpdate(filter, update);
                res.status(201).send({
                    success: true, message: 'Successfully created.', idUser: exist[0]._id, token: token,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    static async verifyCode(req: any, res: any) {
        console.log("the OTP code:" + req.body.code);
        try {

            const verification = await otpService.verifyOtp(req.body.code, req.phone);
            if (verification) {
                res.send({ success: true, message: 'Successfully verified.' });
            }
            else res.status(401).send({ success: false, message: 'verification error' });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    static async refreshToken(req:any, res:any) {
        const token = jwtservice.sign({ phone: req.phone });
        res.status(201).send({
            success: true,
            message: 'Successfully created.',
            token,
        });
    }
}