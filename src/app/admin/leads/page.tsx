import { connectDB } from "@/lib/mongodb"
import { Lead } from "@/models/Lead"

export default async function LeadsPage() {
  await connectDB()

  const leads = await Lead.find({})
    .sort({ createdAt: -1 })
    .lean()

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#84CC16]">
        Lead Management
      </p>

      <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-[#0B132B]">
        Enterprise Leads
      </h1>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="px-6 py-5 text-left text-sm font-bold text-slate-500">
                  Name
                </th>

                <th className="px-6 py-5 text-left text-sm font-bold text-slate-500">
                  Company
                </th>

                <th className="px-6 py-5 text-left text-sm font-bold text-slate-500">
                  Email
                </th>

                <th className="px-6 py-5 text-left text-sm font-bold text-slate-500">
                  Phone
                </th>

                <th className="px-6 py-5 text-left text-sm font-bold text-slate-500">
                  Message
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead: any) => (
                <tr
                  key={lead._id.toString()}
                  className="border-b border-slate-100"
                >
                  <td className="px-6 py-5 font-semibold text-[#0B132B]">
                    {lead.fullName}
                  </td>

                  <td className="px-6 py-5 text-slate-600">
                    {lead.companyName || "-"}
                  </td>

                  <td className="px-6 py-5 text-slate-600">
                    {lead.email}
                  </td>

                  <td className="px-6 py-5 text-slate-600">
                    {lead.phone || "-"}
                  </td>

                  <td className="max-w-[320px] px-6 py-5 text-slate-600">
                    {lead.message}
                  </td>
                </tr>
              ))}

              {leads.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-16 text-center text-lg text-slate-500"
                  >
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
