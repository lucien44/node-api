var Chance = require('chance');
var OTP = require("../entity/otp");
var User = require("../entity/user");

class OtpService {

    async generateOTP(phoneNumber: string) {
        var chance = new Chance();
        var code = chance.string({ length: 4, pool: '0123456789' });
        console.log("le code est :"+code);
        try {
            console.log({ associatedPhoneNumber: phoneNumber });
            await OTP.deleteMany({ associatedPhoneNumber: phoneNumber });
            const newOtp = new OTP({ code: code, associatedPhoneNumber: phoneNumber });
            newOtp.save().then((otp: any) => {
                //sendSms(phoneNumber, `Bienvenue sur xxxx votre code est: ${code}`);
                return otp;
            })
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    async verifyOtp(code: string, phone: string) {
        const exist = await OTP.find({ associatedPhoneNumber: phone, code: code });
    
        if (exist && exist.length) {
          await OTP.deleteMany({ associatedPhoneNumber: phone });
    
          const filter = { phone: phone };
          const update = { active: 'active' };
          let doc = await User.findOneAndUpdate(filter, update);
          return true;
        }
        return false;
      }
}
export default new OtpService();