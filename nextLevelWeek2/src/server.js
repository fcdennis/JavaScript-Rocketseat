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
    }
]

const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/index.html", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study.html", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/giveclasses.html", (req, res) => {
    return res.sendFile(__dirname + "/views/giveclasses.html")
})

.listen(5500)
