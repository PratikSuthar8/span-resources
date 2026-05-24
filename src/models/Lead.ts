import mongoose, {
  Schema,
  models,
} from "mongoose"

const LeadSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Lead =
  models.Lead ||
  mongoose.model("Lead", LeadSchema)
