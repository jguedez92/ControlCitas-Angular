const {
    User,
    Token
} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
enviroment = 'development';
const {
    jwt_secret,
    API_URL
} = require('../config/config.json')[enviroment];

const UserController = {

    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            await User.create({
                name: req.body.name,
                lastName: req.body.lastName,
                dni: req.body.dni,
                email: req.body.email,
                password,
                phone: req.body.phone,
                role: "user",
                status: "active"
            });
            res.status(201).send({
                message: 'Usuario Creado con Exito'
            });

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de crear el usuario'
            });
        }
    },

    async login(req, res) {
        try {

            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Usuario y/o contraseña incorrectas'
                })
            }


            const valid = await bcrypt.compare(req.body.password, user.password)

            if (!valid) {
                return res.status(400).send({
                    message: 'Usuario y/o contraseña incorrectas'
                })
            }

            const token = jwt.sign({
                id: user.id
            }, jwt_secret);
            Token.create({
                token,
                UserId: user.id
            })
            res.send({
                message: 'Bienvenid@ ' + user.name,
                user,
                token
            })

        } catch (error) {
            console.log(error)
            res.status(500).send({
                message: 'Hubo un problema al tratar de logearnos'
            })

        }
    },

    async getAll(req,res){
        try {
            const users = await User.findAll()
            res.status(200).send({
                users
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message: 'Hubo ocurrido un error'
            })
        }
    },

    async changePassword(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            const date = await Date.update({
                password
            }, {
                where: {
                    id: req.body.id
                }
            })
            res.status(200).send({
                date,
                message: 'se ha cambiado la contraseña de manera exitosa'
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de cambiar la contraseña '
            });
        }
    },

    async changePhone(req, res) {
        try {
            const date = await Date.update({
                phone : req.body.phone
            }, {
                where: {
                    id: req.body.id
                }
            })
            res.status(200).send({
                date,
                message: 'se ha cambiado el telefono de manera exitosa'
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de cambiar el telefono'
            });
        }
    },
    
    async changeEmail(req, res) {
        try {
            const date = await Date.update({
                email : req.body.email
            }, {
                where: {
                    id: req.body.id
                }
            })
            res.status(200).send({
                date,
                message: 'se ha cambiado el email de manera exitosa'
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de cambiar el email'
            });
        }
    }
}

module.exports = UserController;