import { notFound } from "next/navigation";

import { ArrowRight, BriefcaseBusiness, Clock3, MapPin } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ApplyForm } from "@/components/jobs/apply-form";

import { connectDB } from "@/lib/mongodb";
import { Job } from "@/models/Job";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function JobDetailPage({ params }: Props) {
	await connectDB();

	const { slug } = await params;

	const job = await Job.findById(slug).lean();

	if (!job) {
		notFound();
	}

	return (
		<main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
			<Navbar />

			<section className="relative overflow-hidden pt-40 pb-24">
				<div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

				<div className="container-wrapper relative z-10">
					<div className="max-w-5xl">
						<div className="flex flex-wrap items-center gap-4">
							<span className="rounded-full bg-[#A3E635]/20 px-4 py-2 text-sm font-semibold text-[#0B132B]">
								{job.type}
							</span>

							{job.salary && (
								<span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
									{job.salary}
								</span>
							)}
						</div>

						<h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-6xl lg:text-8xl">
							{job.title}
						</h1>

						<div className="mt-8 flex flex-wrap items-center gap-8 text-lg text-slate-600">
							<div className="flex items-center gap-3">
								<MapPin className="h-5 w-5" />
								{job.location}
							</div>

							<div className="flex items-center gap-3">
								<BriefcaseBusiness className="h-5 w-5" />
								{job.department}
							</div>

							<div className="flex items-center gap-3">
								<Clock3 className="h-5 w-5" />
								Immediate Hiring
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-32">
				<div className="container-wrapper">
					<div className="grid gap-10 lg:grid-cols-[1fr_420px]">
						<div className="space-y-10">
							<div className="rounded-[2rem] border border-white/60 bg-white/80 p-10 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
								<h2 className="text-3xl font-black text-[#0B132B]">
									Role Overview
								</h2>

								<p className="mt-6 text-lg leading-relaxed text-slate-600">
									{job.description}
								</p>
							</div>

							<div className="rounded-[2rem] border border-white/60 bg-white/80 p-10 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
								<h2 className="text-3xl font-black text-[#0B132B]">
									Requirements
								</h2>

								<ul className="mt-8 space-y-5 text-lg text-slate-600">
									{job.requirements?.map(
										(
											requirement: string,
											index: number,
										) => (
											<li key={index}>• {requirement}</li>
										),
									)}
								</ul>
							</div>
						</div>

						<div>
							<div className="sticky top-28 rounded-[2rem] bg-[#020617] p-10 text-white">
								<h3 className="text-3xl font-black">
									Apply For This Role
								</h3>

								<p className="mt-5 text-lg leading-relaxed text-slate-300">
									Join enterprise workforce operations with
									Span Resources.
								</p>

								<div className="mt-10">
									<ApplyForm jobId={job._id.toString()} />
								</div>

								<div className="mt-10 space-y-5 border-t border-white/10 pt-8">
									<div>
										<p className="text-sm text-slate-400">
											Location
										</p>

										<p className="mt-2 text-lg font-semibold">
											{job.location}
										</p>
									</div>

									<div>
										<p className="text-sm text-slate-400">
											Employment Type
										</p>

										<p className="mt-2 text-lg font-semibold">
											{job.type}
										</p>
									</div>

									{job.salary && (
										<div>
											<p className="text-sm text-slate-400">
												Salary Range
											</p>

											<p className="mt-2 text-lg font-semibold">
												{job.salary}
											</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
