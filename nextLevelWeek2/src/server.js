//Dados
const proffys = [
    {name : "David Malan",
    avatar: "https://avatars3.githubusercontent.com/u/788678?s=400&u=9894c93f99d64d6846942503ccc0c76bfce94540&v=4",
    whatsapp: "11993376632",
    bio: "David J. Malan is Gordon McKay Professor of the Practice of Computer Science in the School of Engineering and Applied Sciences and a Member of the Faculty of Education in the Graduate School of Education at Harvard University. He teaches Computer Science 50, otherwise known as CS50, which is Harvard University’s largest course, one of Yale University’s largest courses, and edX’s largest MOOC, with over 2M registrants. He also teaches at Harvard Business School, Harvard Law School, Harvard Extension School, and Harvard Summer School. All of his courses are freely available as OpenCourseWare.",
    subject: "Matemática",
    cost: "2000",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
    },

    {name : "Kamran Ahmed",
    avatar: "https://avatars2.githubusercontent.com/u/4921183?s=460&u=12416fa01eb7f7d28df420f773dab31e6279c75b&v=4",
    whatsapp: "11994487743",
    bio: "Lover of all things web and opensource. Coding and writing stuff for humans ™. Building https://roadmap.sh",
    subject: "Geografia",
    cost: "500",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
    },

    {name : "Brendan Forster",
    avatar: "https://avatars2.githubusercontent.com/u/359239?s=460&u=8cf5f84ab5b916b3304e1d9f8805a2a90b14f2de&v=4",
    whatsapp: "11995598854",
    bio: "Recovering Open Source Cat Herder.",
    subject: "Física",
    cost: "1000",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html",{ proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
    const data = req.query
    //adicionar dados a lista de proffys
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study.html")
    }
    
    return res.render("giveclasses.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',
    {express: server,
    noCache: true,
    })

//Início e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/index.html", pageLanding)
.get("/study.html", pageStudy)
.get("/giveclasses.html", pageGiveClasses)
//start do servidor
.listen(5500)