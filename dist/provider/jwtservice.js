"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
class Jwtservice {
    sign(payload) {
        const createdAt = new Date();
        const token = jwt.sign(Object.assign(Object.assign({}, payload), { expiresIn: 30 * 24 * 60 * 60, iat: Math.floor(Date.now() / 1000) - 30, createdAt: createdAt }), process.env.JWT_SECRET);
        return {
            token,
            expiresIn: 30 * 24 * 60 * 60,
            createdAt,
        };
    }
    verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}
exports.default = new Jwtservice();
