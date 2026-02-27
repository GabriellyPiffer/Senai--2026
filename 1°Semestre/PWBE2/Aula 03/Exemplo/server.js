require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const turmasRoutes = require("./src/routes/turmas.routes");
app.use("/turmas", turmasRoutes);

const alunosRoutes = require("./src/routes/alunos.routes");
app.use("/alunos", alunosRoutes);


const porta = process.env.PORT_APP || 3000;

app.listen(porta, () => {
    console.log(`Online na porta ${porta}`);
});