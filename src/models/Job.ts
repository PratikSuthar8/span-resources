import mongoose, { Schema } from "mongoose"

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    requirements: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Job =
  mongoose.models.Job ||
  mongoose.model("Job", JobSchema)
