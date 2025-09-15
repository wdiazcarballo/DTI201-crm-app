import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    company: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?[0-9\- ]{7,20}$/, "Please fill a valid phone number"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

ContactSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;