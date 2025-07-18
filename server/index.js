"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors"
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./src/routes/auth.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use('/api', auth_routes_1.default);
app.get('/', (req, res) => {
    res.send("hello sir lets start ts");
    console.log("stared the project");
});
app.listen(PORT, () => {
    console.log("port connected");
});
