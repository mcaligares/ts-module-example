"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../src/models/user");
describe('user test', () => {
    test('should be create a User with id and name', () => {
        const id = 12345;
        const name = 'mcaligares';
        const user = new user_1.User(id, name);
        expect(user.id).toBe(id);
        expect(user.name).toBe(name);
        expect(user.email).toBeUndefined();
        expect(user.address).toBeUndefined();
    });
});
//# sourceMappingURL=user.test.js.map