const db = require('../utils/db');

const TBL_WORKSHOP = 'workshop';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_WORKSHOP}`);
    },

    allOfMentor(id) {
        return db.load(`select * from ${TBL_WORKSHOP} where MentorID = ${id}`);
    },

    async singleByWorkshopID(id) {
        const rows = await db.load(`select * from ${TBL_WORKSHOP} where WorkshopID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_WORKSHOP);
    },

    del(entity){
        const condition = {WorkshopID: entity.WorkshopID};
        return db.del(condition, TBL_WORKSHOP);
    },

    patch(entity){
        const condition = {WorkshopID: entity.WorkshopID};
        return db.patch(entity,condition,TBL_WORKSHOP);
    }
};