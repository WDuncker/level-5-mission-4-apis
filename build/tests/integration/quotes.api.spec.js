"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('Quotes API', () => {
    test('it should return the yearly premium and monthly premium figures', () => __awaiter(void 0, void 0, void 0, function* () {
        //Arrange
        const expected = [
            {
                premium: 105,
                type: 'Yearly Premium',
            },
            {
                premium: 8.75,
                type: 'Monthly Premium',
            },
        ];
        const data = {
            carValue: 3500,
            riskRating: 3,
        };
        //Act
        const res = yield (0, supertest_1.default)(app_1.default).post('/api/calculate-premiums').send(data);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expected);
    }));
    test('it should return an error asking the user to enter inputs to both fields', () => __awaiter(void 0, void 0, void 0, function* () {
        const expected = {
            error: 'You must enter a value in both fields',
        };
        const data = {
            carValue: null,
            riskRating: 5,
        };
        const res = yield (0, supertest_1.default)(app_1.default).post('/api/calculate-premiums').send(data);
        expect(res.status).toEqual(400);
        expect(res.body).toEqual(expected);
    }));
    test('it should return an error telling the user that both inputs must be greater than 0', () => __awaiter(void 0, void 0, void 0, function* () {
        const expected = {
            error: 'Car value and risk rating must be greater than 0',
        };
        const data = {
            carValue: -6700,
            riskRating: 5,
        };
        const res = yield (0, supertest_1.default)(app_1.default).post('/api/calculate-premiums').send(data);
        expect(res.status).toEqual(400);
        expect(res.body).toEqual(expected);
    }));
});
