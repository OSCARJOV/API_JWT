const request = require("supertest")
const app = require("../app");
const { userModel } = require("../models");

const testAuthlogin = {
                email: "test@test.ni",
                password : "232323232323"
};


const testAuthReg = {
    name : "User test",
    age: 0,
    email: "test@test.ni",
    password : "232323232323",
};

beforeAll( async() => {
 await  userModel.deleteMany();
})

describe("[AUTH] esta es la prueba de /api/auth", () => {
    test /"esto deberia de retornar 404", async () => {

        const response = await request(app)
        .post('/api/auth/login')
        .send(testAuthlogin)
        expect(response.statusCode).toEqual(404)
    }


    test ("esto deberia de retornar 201", async () => {

        const response = await request(app)
        .post('/api/auth/register')
        .send(testAuthReg)

        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("data")
        expect(response.body).toHaveProperty("data.token")
        expect(response.body).toHaveProperty("data.user")


    })
})