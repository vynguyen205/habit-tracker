const db = require('../config/connection');
const { Tag } = require('../models');

const TagData = require('./tagData.json');

db.once('open', async () => {
  try {
    // always delete all tags before seeding
    await Tag.deleteMany({});
    await Tag.insertMany(TagData);

    console.log('🗄🗄🗄 Tags seeded! 🗄🗄🗄');
    // process.exit() is used to end the process after the seed is done
    process.exit(0);

  } catch (err) {
    console.log(err);
  }
});
