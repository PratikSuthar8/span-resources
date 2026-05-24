"use client";

import { motion } from "framer-motion";

const testimonials = [
	{
		quote: "Span Resources helped streamline our workforce operations with reliable staffing and compliance systems.",
		name: "Operations Head",
		company: "Manufacturing Enterprise",
	},
	{
		quote: "Professional manpower deployment and payroll support that scaled with our operations.",
		name: "HR Director",
		company: "Pharmaceutical Company",
	},
];

const clients = [
	"Manufacturing",
	"Pharma",
	"Infrastructure",
	"Logistics",
	"Enterprise",
	"Operations",
];

export function TestimonialsSection() {
	return (
		<section className="relative overflow-hidden py-32">
			<div className="absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#A3E635]/10 blur-3xl" />

			<div className="container-wrapper relative z-10">
				<div className="mb-20 text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#84CC16]">
						Trusted By Enterprises
					</p>

					<h2 className="text-4xl font-black tracking-[-0.04em] text-[#0B132B] md:text-5xl">
						Trusted Workforce Partner
						<br />
						Across Gujarat
					</h2>
				</div>

				<div className="relative mb-20 overflow-hidden">
					<div className="flex gap-6 whitespace-nowrap">
						{[...clients, ...clients].map((client, index) => (
							<div
								key={index}
								className="rounded-full border border-neutral-200 bg-white/80 px-8 py-4 text-sm font-semibold text-[#0B132B] shadow-sm backdrop-blur-xl"
							>
								{client}
							</div>
						))}
					</div>
				</div>

				<div className="grid gap-6 lg:grid-cols-2">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.name}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							viewport={{ once: true }}
							className="rounded-[2rem] border border-white/60 bg-white/70 p-10 shadow-[0_10px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl"
						>
							<p className="text-xl leading-relaxed tracking-[-0.02em] text-[#0B132B]">
								“{testimonial.quote}”
							</p>

							<div className="mt-10">
								<h3 className="text-lg font-bold text-[#0B132B]">
									{testimonial.name}
								</h3>

								<p className="mt-1 text-sm text-[#64748B]">
									{testimonial.company}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
