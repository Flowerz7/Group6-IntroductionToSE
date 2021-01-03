const db = require('../utils/db');

const TBL_MEETING = 'meeting';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_MEETING}`);
    },

    allOfWorkshop(id) {
        return db.load(`select * from ${TBL_MEETING} where WorkshopID = ${id}`);
    },

    allOfMentee(id) {
        return db.load(`select * from ${TBL_MEETING} where MenteeID = ${id}`);
    },

    async singleByWorkshopMentee(workshopID, menteeID) {
        const rows = await db.load(`select * from ${TBL_MEETING} where WorkshopID = ${workshopID} and MenteeID = ${menteeID}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_MEETING);
    },

    del(entity){
        const condition = {WorkshopID: entity.WorkshopID};
        return db.del(condition, TBL_MEETING);
    },

    patch(entity){
        const condition = {WorkshopID: entity.WorkshopID};
        return db.patch(entity, condition, TBL_MEETING);
    }
};