import mongoose, {
  Schema,
} from "mongoose"

const ApplicationSchema =
  new Schema(
    {
      jobId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
      },

      fullName: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      coverLetter: {
        type: String,
      },

      resumeUrl: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )

export const Application =
  mongoose.models.Application ||
  mongoose.model(
    "Application",
    ApplicationSchema
  )
