const {
    Date,
    Appointments
} = require('../models/index');

const DateController = {

    async register(req, res) {
        try {
            const date = await Date.create({
                date: req.body.date,
                status: "enabled"
            });
            res.status(200).send({
                date,
                message: "la fecha se ha registrado de manera satisfactoria"
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de crear la fecha'
            });
        }
    },

    async getAll(req, res) {
        try {
            const dates = await Date.findAll({
                include: [Appointments]
            })
            res.status(201).send({
                dates
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de encontrar las fechas'
            });
        }
    },

    async getEnabled(req, res) {
        try {
            const dates = await Date.findAll({
                include: [Appointments],
                where: {
                    status: "enabled"
                },
                order: [['date', 'ASC']]            
            })
            if(dates.length > 0){
                return res.status(200).send({
                    dates
                })
            }else{
                return res.status(400).send({
                    message: "no hay citas habilitadas"
                })   
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de encontrar las fechas'
            });
        }
    },

    async changeStatus(req, res) {
        try {

            const option = req.body.option;
            const date = await Date.update({
                status: option
            }, {
                where: {
                    id: req.body.id
                }
            })
            res.status(200).send({
                date,
                message: ' se ha cambiado el estatus de manera exitosa'
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de cambiar el '
            });
        }
    }
}

module.exports = DateController;