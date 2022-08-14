const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Create a schema for our User model
const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  habit: [
    {
      type: String,
      trim: true,
    },
  ],
  totalPoints: {
    type: Number,
    default: 0
  },
});

// Custom method to generate hash
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    console.log(err);
  }
})

// Custom method to compare password to hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    console.log(err);
  }
}

const User = model('User', userSchema);

module.exports = User;
