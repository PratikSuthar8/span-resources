import { connectDB } from "@/lib/mongodb"

import { Application } from "@/models/Application"

export default async function ApplicationsPage() {
  await connectDB()

  const applications =
    await Application.find({})
      .sort({
        createdAt: -1,
      })
      .lean()

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
        Applications
      </p>

      <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-[#0B132B]">
        Candidate Applications
      </h1>

      <div className="mt-12 grid gap-6">
        {applications.map(
          (application: any) => (
            <div
              key={application._id.toString()}
              className="rounded-[2rem] bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0B132B]">
                    {
                      application.fullName
                    }
                  </h3>

                  <div className="mt-4 space-y-2 text-slate-600">
                    <p>
                      {
                        application.email
                      }
                    </p>

                    <p>
                      {
                        application.phone
                      }
                    </p>

                    <p>
                      Experience:{" "}
                      {
                        application.experience
                      }
                    </p>
                  </div>

                  {application.coverLetter && (
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                      {
                        application.coverLetter
                      }
                    </p>
                  )}
                </div>

                <a
                  href={
                    application.resumeUrl
                  }
                  target="_blank"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#0B132B] px-8 text-base font-semibold text-white"
                >
                  View Resume
                </a>
              </div>
            </div>
          )
        )}

        {applications.length ===
          0 && (
          <div className="rounded-[2rem] bg-white p-20 text-center shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
            <h3 className="text-3xl font-black text-[#0B132B]">
              No Applications Yet
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}
