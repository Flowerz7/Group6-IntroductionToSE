const db = require('../utils/db');

const TBL_NOTIFY = 'notify';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_NOTIFY}`);
    },

    allDone() {
        return db.load(`select * from ${TBL_NOTIFY} where IsDone = 1`);
    },

    allNotDone() {
        return db.load(`select * from ${TBL_NOTIFY} where IsDone = 0`);
    },

    allOfMentee(id) {
        return db.load(`select * from ${TBL_NOTIFY} where MenteeID = ${id}`);
    },

    allOfMentor(id) {
        return db.load(`select * from ${TBL_NOTIFY} where MentorID = ${id}`);
    },

    allOfMenteeMentor(menteeID, mentorID) {
        return db.load(`select * from ${TBL_NOTIFY} where MentorID = ${mentorID} and MenteeID = ${menteeID}`);
    },

    async singleByNotiID(id) {
        const rows = await db.load(`select * from ${TBL_NOTIFY} where NotiID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_NOTIFY);
    },

    del(entity){
        const condition = {NotiID: entity.NotiID};
        return db.del(condition, TBL_NOTIFY);
    },

    patch(entity){
        const condition = {NotiID: entity.NotiID};
        return db.patch(entity,condition,TBL_NOTIFY);
    }
};