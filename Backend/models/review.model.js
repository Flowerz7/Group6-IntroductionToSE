const db = require('../utils/db');

const TBL_REVIEW = 'review';

module.exports = {
    all() {
        return db.load(`select * from ${TBL_REVIEW}`);
    },

    allOfMentee(id) {
        return db.load(`select * from ${TBL_REVIEW} where MenteeID = ${id}`);
    },

    allOfMentor(id) {
        return db.load(`select * from ${TBL_REVIEW} where MentorID = ${id}`);
    },

    allOfMenteeMentor(menteeID, mentorID) {
        return db.load(`select * from ${TBL_REVIEW} where MentorID = ${mentorID} and MenteeID = ${menteeID}`);
    },

    async singleByReviewID(id) {
        const rows = await db.load(`select * from ${TBL_REVIEW} where ReviewID = ${id}`);
        if (rows.length === 0)
            return null;
            
        return rows[0];
    },

    add(entity) {
        return db.add(entity,TBL_REVIEW);
    },

    del(entity){
        const condition = {ReviewID: entity.ReviewID};
        return db.del(condition, TBL_REVIEW);
    },

    patch(entity){
        const condition = {ReviewID: entity.ReviewID};
        return db.patch(entity,condition,TBL_REVIEW);
    }
};