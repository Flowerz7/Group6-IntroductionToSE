const db = require('../utils/db');

const TBL_APPOINTMENT = 'appointment';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_APPOINTMENT}`);
    },

    allOfMentee(id) {
        return db.load(`select * from ${TBL_APPOINTMENT} where MenteeID = ${id}`);
    },

    allOfMentor(id) {
        return db.load(`select * from ${TBL_APPOINTMENT} where MentorID = ${id}`);
    },

    allOfMenteeMentor(menteeID, mentorID) {
        return db.load(`select * from ${TBL_APPOINTMENT} where MentorID = ${mentorID} and MenteeID = ${menteeID}`);
    },

    async singleByAppointmentID(id) {
        const rows = await db.load(`select * from ${TBL_APPOINTMENT} where ID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_APPOINTMENT);
    },

    del(entity){
        const condition = {ID: entity.ID};
        return db.del(condition, TBL_APPOINTMENT);
    },

    patch(entity){
        const condition = {ID: entity.ID};
        return db.patch(entity,condition,TBL_APPOINTMENT);
    }
};