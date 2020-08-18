const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Dennis Costa",
        avatar: "https://avatars2.githubusercontent.com/u/56238317?s=460&v=4",
        whatsapp: "11881154410",
        bio: "Melhor professor",
    }

    classValue = {
        subject: "História",
        cost: "500",
        //proffy id vira pelo db
    }

    classScheduleValues = [
        //class_id vira pelo db
        {
            weekday: 1,
            time_from: 720,
            time_to: 920
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 920
        }
    ]

    await createProffy(db,{proffyValue, classValue, classScheduleValues})
})