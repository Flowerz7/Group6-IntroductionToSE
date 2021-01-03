const db = require('../utils/db');

const TBL_FRIEND = 'friend';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_FRIEND}`);
    },

    allOfUser(id) {
        return db.load(`select * from ${TBL_FRIEND} where UserID = ${id}`);
    },

    async singleByUserIDFriendID(userID, friendID) {
        const rows = await db.load(`select * from ${TBL_FRIEND} where UserID = ${userID} and FriendID = ${friendID}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_FRIEND);
    },

    del(entity){
        const condition = {ID: entity.ID};
        return db.del(condition, TBL_FRIEND);
    },

    patch(entity){
        const condition = {ID: entity.ID};
        return db.patch(entity,condition,TBL_FRIEND);
    }
};