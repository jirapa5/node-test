module.exports = {
  async up(db, client) {
    await db.createCollection('products');
  },

  async down(db, client) {
    db.collection.remove('products');
  },
};
