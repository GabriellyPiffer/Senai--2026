const prisma = require("../data/prisma");

const listar = async (req, res) => {
    try {
        const joias = await prisma.joia.findMany();
        res.status(200).json(joias);
    } catch (err) {
        res.status(500).json(err);
    }
};

const cadastrar = async (req, res) => {
    try {
        const joia = req.body;

        const novaJoia = await prisma.joia.create({
            data: joia
        });

        res.status(201).json(novaJoia);
    } catch (err) {
        res.status(500).json(err);
    }
};

const editar = async (req, res) => {
    try {
        const { id } = req.params;
        const joia = req.body;

        const update = await prisma.joia.update({
            where: { id: Number(id) },
            data: joia
        });

        res.status(200).json(update);
    } catch (err) {
        res.status(500).json(err);
    }
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const removido = await prisma.joia.delete({
            where: { id: Number(id) }
        });

        res.status(200).json(removido);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    listar,
    cadastrar,
    editar,
    excluir
};