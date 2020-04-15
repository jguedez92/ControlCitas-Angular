const { Appointments } =  require('../models/index');

const appController = {
    async register(req, res){
        try {
            const app = await Appointments.create({
                UserId : req.body.userId,
                DateId : req.body.dateId,
                hours : req.body.hours,
                status : "reserved",
                observations : req.body.observations
            });
            res.status(200).send({
                app,
                message : "se ha creado la cita de manera satisfactoria"
            })
        } catch (error) {   
            console.log(error);
            res.status(500).send({
                message : "hubo un problema al tratar de crear la cita"
            });
        }
    },

    async getAll(req,res){
        try {
            const app = await Appointments.findAll({ })
            res.status(200).send({
                app
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message : "hubo un problema al tratar de buscar las citas"
            });
        }
    },

    async getOne(req,res){
        try {
            const app = await Appointments.findOne({
                where: {
                    id : req.body.id
                }
            });
            if (!app){
                return res.status(200).send({
                    message : "no hay citas pautadas por usted"
                });
            } else {
                return res.status(200).send({
                    app
                });
            } 
        } catch (error) {
            
        }
    },

    async update(req,res){
        try {
            const app = await Appointments.update({
                hours : req.body.hours,
                status : req.body.status,
                observations : req.body.observations
            });
            res.status(200).send({
                app,
                message : "se ha actualizado la cita de manera satisfactoria"
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message : "hubo un problema al intentar actualizar la cita"
            })
        }
    }
}

module.exports = appController;