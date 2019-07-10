const express =require('express');
const morgan = require('morgan');
const cors = require('cors');
const UserRouter = require('./route/routers')
const path = require('path');

class App {
 
    constructor( PORT) {
        this.app = express();

        /**  configuracoes iniciais*/
        this.setting();
        this.middalewares();
        this.routers();
        //iniciar 
        this.listen();
    }
    setting() {
        this.app.set('PORT', this.PORT || process.env.PORT || 3000)
    }

    middalewares() {
        // cors para liberar as rotas para requisisoes externas
        this.app.use(cors());
        // morgan ajuda nas mensagens de errors na hora de desenvolvimento 
        this.app.use(morgan('dev'));

        // abilitar aceitação de json e forms via requisição http
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
    routers() {
       
        // Rota Home 
        this.app.get('/', (req, res) => {

            res.sendFile(path.resolve(__dirname + "/public/views/index.html"))
        });
        this.app.use(UserRouter);
        
       /* // Rota Ranking
        this.app.get('/ranking', (req, res) => {

            res.sendFile(path.resolve(__dirname + "/public/raking/ranking.html"))
        })
        // Rota de login
        this.app.get('/login/:id', (req, res) => {

            res.sendFile(path.resolve(__dirname + "/public/assinante/assinante.html"))
        })

        /** Rotas dos controllers  */
        //this.app.use(MenssagemRoutes);

    }
    async listen() {
        await this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor Rodando na pota : " + this.app.get("PORT"))
        })
    }
}

module.exports = App;