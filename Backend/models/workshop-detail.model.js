const db = require('../utils/db');

const TBL_WORKSHOP_DETAIL = 'workshop_detail';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_WORKSHOP_DETAIL}`);
    },

    async singleByWorkshopID(id) {
        const rows = await db.load(`select * from ${TBL_WORKSHOP_DETAIL} where WorkshopID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_WORKSHOP_DETAIL);
    },

    del(entity){
        const condition = {WorkshopID: entity.WorkshopID};
        return db.del(condition, TBL_WORKSHOP_DETAIL);
    },

    patch(entity){
        const condition = {WorkshopID: entity.WorkshopID};
        return db.patch(entity,condition,TBL_WORKSHOP_DETAIL);
    }
};