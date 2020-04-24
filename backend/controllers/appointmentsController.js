const {
    Appointments
} = require('../models/index');

const appController = {

    async register(req, res) {
        try {
            const filter = await Appointments.findOne({
                where: {
                    UserId: req.body.UserId,
                    status: "actived"
                }
            })

            if (filter) {
                return res.status(400).send({
                    message: 'Usted ya posee una cita reservada'
                })
            }

            const app = await Appointments.create({
                UserId: req.body.UserId,
                DateId: req.body.DateId,
                status: "actived",
                observations: req.body.observations
            });
            res.status(200).send({
                app,
                message: "se ha reservado la cita de manera satisfactoria"
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "hubo un problema al tratar de crear la cita"
            });
        }
    },

    async getAll(req, res) {
        try {
            const app = await Appointments.findAll({})
            res.status(200).send({
                app
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "hubo un problema al tratar de buscar las citas"
            });
        }
    },

    async getUserApp(req, res) {
        try {
            const app = await Appointments.findOne({
                where: {
                    UserId: req.body.UserId,
                    status: "actived"
                }
            });
            if (!app) {
                return res.status(200).send({
                    message: "no hay citas pautadas por usted"
                });
            }
            res.status(200).send({
                app
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "hubo un problema al tratar de buscar las citas"
            });
        }
    },

    async update(req, res) {
        try {
            const app = await Appointments.update({
                status: req.body.status,
                observations: req.body.observations
            }, {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).send({
                app,
                message: "se ha actualizado la cita de manera satisfactoria"
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message: "hubo un problema al intentar actualizar la cita"
            })
        }
    }
}

module.exports = appController;