const db = require('../utils/db');

const TBL_FIELD = 'field';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_FIELD}`);
    },

    allOfUser(id) {
        return db.load(`select * from ${TBL_FIELD} where UserID = ${id}`);
    },

    async singleByUserIDFieldname(userID, fieldname) {
        const rows = await db.load(`select * from ${TBL_FIELD} where UserID = ${userID} and Fieldname = ${fieldname}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_FIELD);
    },

    del(entity){
        const condition = {ID: entity.ID};
        return db.del(condition, TBL_FIELD);
    },

    patch(entity){
        const condition = {ID: entity.ID};
        return db.patch(entity,condition,TBL_FIELD);
    }
};