"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcController_1 = require("../../controllers/calcController");
const node_mocks_http_1 = require("node-mocks-http");
describe('calcPremiums', () => {
    test('Calculates a yearly and monthly premium', () => {
        //arrange
        const req = (0, node_mocks_http_1.createRequest)();
        const res = (0, node_mocks_http_1.createResponse)();
        const expected = [
            {
                type: 'Yearly Premium',
                premium: 320,
            },
            {
                type: 'Monthly Premium',
                premium: 26.67,
            },
        ];
        const data = {
            carValue: 8000,
            riskRating: 4,
        };
        req.body = data;
        //Act
        (0, calcController_1.calcPremiums)(req, res);
        //Assert
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(expected);
    });
    test('Throws error for invalid inputs', () => {
        const req = (0, node_mocks_http_1.createRequest)();
        const res = (0, node_mocks_http_1.createResponse)();
        const expected = {
            error: 'Car value and risk rating must be greater than 0',
        };
        const data = {
            carValue: -5400,
            riskRating: 2,
        };
        req.body = data;
        (0, calcController_1.calcPremiums)(req, res);
        expect(res.statusCode).toBe(400);
        expect(JSON.parse(res._getData())).toEqual(expected);
    });
    test('throws error for having one nil input', () => {
        const req = (0, node_mocks_http_1.createRequest)();
        const res = (0, node_mocks_http_1.createResponse)();
        const expected = {
            error: 'You must fill in both fields',
        };
        const data = {
            carValue: 5400,
            riskRating: '',
        };
        req.body = data;
        (0, calcController_1.calcPremiums)(req, res);
        expect(res.statusCode).toBe(400);
        expect(JSON.parse(res._getData())).toEqual(expected);
    });
    test('throws error for having no inputs', () => {
        const req = (0, node_mocks_http_1.createRequest)();
        const res = (0, node_mocks_http_1.createResponse)();
        const expected = {
            error: 'You must fill in both fields',
        };
        const data = {
            carValue: '',
            riskRating: '',
        };
        req.body = data;
        (0, calcController_1.calcPremiums)(req, res);
        expect(res.statusCode).toBe(400);
        expect(JSON.parse(res._getData())).toEqual(expected);
    });
});
