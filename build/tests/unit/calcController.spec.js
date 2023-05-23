"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcController_1 = require("../../controllers/calcController");
const node_mocks_http_1 = require("node-mocks-http");
describe('calcPremiums', () => {
    test('Should calculate a yearly and onthly premium', () => {
        //arrange
        const req = (0, node_mocks_http_1.createRequest)();
        const res = (0, node_mocks_http_1.createResponse)();
        const expected = [
            {
                premium: 320,
                type: 'Yearly Premium',
            },
            {
                premium: 26.66,
                type: 'Monthly Premium',
            },
        ];
        const data = {
            carValue: 8000,
            riskRating: 4,
        };
        req.body = data;
        //Act
        (0, calcController_1.calcPremiums)(req, res);
    });
});
