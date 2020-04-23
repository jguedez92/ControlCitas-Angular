const {
    News
} = require('../models/index');

const NewsController = {

    async register(req, res) {
        try {
            const news = await News.create({
                title: req.body.title,
                content: req.body.content,
                UserId: req.body.userId,
                status: "enabled"
            });
            res.status(200).send({
                news,
                message: "el segmento se ha registrado de manera satisfactoria"
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de crear el segmento'
            });
        }
    },

    async getAll(req, res) {
        try {
            const news = await News.findAll()
            res.status(201).send({
                news
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
            const news = await News.findAll({
                where: {
                    status: "enabled"
                },
                order: [['createdAt', 'DESC']]            
            })
            if(news.length > 0){
                return res.status(200).send({
                    news
                })
            }else{
                return res.status(400).send({
                    message: "no hay segmentos"
                })   
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de encontrar los segmentos'
            });
        }
    },

    async changeStatus(req, res) {
        try {
            const news = await News.update({
                status: req.body.status
            }, {
                where: {
                    id: req.body.id
                }
            })
            res.status(200).send({
                message: ' se ha cambiado el estatus de manera exitosa'
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de cambiar el estatus '
            });
        }
    }
}

module.exports = NewsController;