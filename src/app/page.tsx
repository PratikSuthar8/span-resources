import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { ServicesSection } from "@/components/sections/services";
import { IndustriesSection } from "@/components/sections/industries";
import { TrustSection } from "@/components/sections/trust";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

import { FadeUp } from "@/components/animations/fade-up";
import { FloatingElements } from "@/components/animations/floating-elements";
import { MagneticButton } from "@/components/animations/magnetic-button";

export default function HomePage() {
	return (
		<main className="min-h-screen overflow-hidden bg-[#F6F7F2] text-[#0B132B]">
			<Navbar />

			<section className="relative flex min-h-screen items-center pt-28 md:pt-32">
				<div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D9F99D]/30 blur-3xl" />

				<div className="absolute right-[-5%] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-3xl" />

				<div className="container-wrapper relative z-10">
					<div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
						<FadeUp>
							<div className="space-y-8 md:space-y-10">
								<div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-xl">
									<span className="text-xs font-semibold tracking-[0.22em] text-[#64748B]">
										ENTERPRISE WORKFORCE SOLUTIONS
									</span>
								</div>

								<div className="space-y-6">
									<h1 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#0B132B] sm:text-5xl md:text-6xl lg:text-7xl">
										Workforce
										<br />
										<span className="text-[#A3E635]">
											Infrastructure
										</span>
										<br />
										For Modern Industry
									</h1>

									<p className="max-w-xl text-lg leading-relaxed text-[#475569]">
										Recruitment, payroll, compliance, and
										workforce management trusted by
										enterprises across Gujarat.
									</p>
								</div>

								<div className="flex flex-col gap-4 sm:flex-row">
									<MagneticButton>
										<button className="group flex items-center justify-center gap-2 rounded-full bg-[#0B132B] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1">
											Hire Workforce
											<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</button>
									</MagneticButton>

									<MagneticButton>
										<button className="rounded-full border border-neutral-300 bg-white/80 px-8 py-4 text-sm font-semibold text-[#0B132B] transition-all hover:border-[#A3E635] hover:bg-[#F7FEE7]">
											Explore Jobs
										</button>
									</MagneticButton>
								</div>

								<div className="grid max-w-xl grid-cols-3 gap-4 border-t border-neutral-200 pt-8 sm:gap-8">
									<div>
										<h3 className="text-3xl font-black text-[#0B132B] sm:text-4xl">
											15+
										</h3>

										<p className="mt-2 text-sm text-[#64748B]">
											Years Experience
										</p>
									</div>

									<div>
										<h3 className="text-3xl font-black text-[#0B132B] sm:text-4xl">
											20K+
										</h3>

										<p className="mt-2 text-sm text-[#64748B]">
											Workforce Managed
										</p>
									</div>

									<div>
										<h3 className="text-3xl font-black text-[#0B132B] sm:text-4xl">
											400+
										</h3>

										<p className="mt-2 text-sm text-[#64748B]">
											Enterprise Clients
										</p>
									</div>
								</div>
							</div>
						</FadeUp>

						<FloatingElements
							className="relative hidden h-[600px] items-center justify-center lg:flex"
							y={18}
							duration={4}
						>
							<div className="absolute h-[420px] w-[420px] rounded-full border border-[#A3E635]/30" />

							<div className="absolute h-[320px] w-[320px] rounded-full border border-blue-200/40" />

							<div className="absolute h-[220px] w-[220px] rounded-full bg-[#A3E635]/20 blur-3xl" />

							<div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
								<Image
									src="/assets/logo.png"
									alt="Span Resources"
									width={160}
									height={160}
									style={{ height: "8rem", width: "auto" }}
									loading="eager"
									loading="eager"
								/>
							</div>

							<FloatingElements y={14} duration={3.5} delay={0.2}>
								<div className="absolute left-10 top-16 rounded-2xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl">
									<p className="text-sm text-[#64748B]">
										Workforce Managed
									</p>

									<h3 className="mt-1 text-3xl font-black text-[#0B132B]">
										20K+
									</h3>
								</div>
							</FloatingElements>

							<FloatingElements y={12} duration={3.2} delay={0.4}>
								<div className="absolute bottom-16 right-10 rounded-2xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl">
									<p className="text-sm text-[#64748B]">
										Enterprise Clients
									</p>

									<h3 className="mt-1 text-3xl font-black text-[#0B132B]">
										400+
									</h3>
								</div>
							</FloatingElements>
						</FloatingElements>
					</div>
				</div>
			</section>

			<ServicesSection />

			<IndustriesSection />

			<TrustSection />

			<ProcessSection />

			<TestimonialsSection />

			<CTASection />

			<Footer />
		</main>
	);
}
