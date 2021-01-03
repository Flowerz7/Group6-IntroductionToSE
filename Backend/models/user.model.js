const db = require('../utils/db');

const TBL_USER = 'user';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_USER}`);
    },

    async singleByID(id) {
        const rows = await db.load(`select * from ${TBL_USER} where UserID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_USER);
    },

    del(entity){
        const condition = {UserID: entity.UserID};
        return db.del(condition, TBL_USER);
    },

    patch(entity){
        const condition = {UserID: entity.UserID};
        return db.patch(entity,condition,TBL_USER);
    }
};