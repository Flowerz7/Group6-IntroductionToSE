const db = require('../utils/db');

const TBL_PROFILE = 'profile';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_PROFILE}`);
    },

    async singleByUser(id) {
        const rows = await db.load(`select * from ${TBL_PROFILE} where UserID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_PROFILE);
    },

    del(entity){
        const condition = {UserID: entity.UserID};
        return db.del(condition, TBL_PROFILE);
    },

    patch(entity){
        const condition = {UserID: entity.UserID};
        return db.patch(entity,condition,TBL_PROFILE);
    }
};