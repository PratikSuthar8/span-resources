"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";

import { ResumeUpload } from "./resume-upload";

type Props = {
	jobId: string;
};

export function ApplyForm({ jobId }: Props) {
	const [loading, setLoading] = useState(false);

	const [open, setOpen] = useState(false);

	const [resumeUrl, setResumeUrl] = useState("");

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		coverLetter: "",
	});

	function showToast(message: string, error = false) {
		const toast = document.createElement("div");

		toast.innerText = message;

		toast.className = `fixed right-8 top-8 z-[9999] rounded-2xl px-6 py-4 text-sm font-bold shadow-2xl ${
			error ? "bg-red-500 text-white" : "bg-[#A3E635] text-[#0B132B]"
		}`;

		document.body.appendChild(toast);

		setTimeout(() => {
			toast.remove();
		}, 3000);
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!resumeUrl) {
			showToast("Please upload your resume", true);

			return;
		}

		try {
			setLoading(true);

			const response = await fetch("/api/applications", {
				method: "POST",

				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					...formData,
					jobId,
					resumeUrl,
				}),
			});

			if (!response.ok) {
				throw new Error();
			}

			showToast("Application submitted successfully");

			setFormData({
				fullName: "",
				email: "",
				phone: "",
				coverLetter: "",
			});

			setResumeUrl("");

			setOpen(false);
		} catch {
			showToast("Failed to submit application", true);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="inline-flex h-16 w-full items-center justify-center rounded-full bg-[#A3E635] px-8 text-lg font-bold text-[#0B132B] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(163,230,53,0.35)]">
					Apply Now
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

				<Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
					<div className="relative p-8 md:p-10">
						<Dialog.Close className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 transition-all duration-300 hover:bg-slate-200 hover:text-[#0B132B]">
							×
						</Dialog.Close>

						<div>
							<p className="text-sm font-bold uppercase tracking-[0.25em] text-[#84CC16]">
								Apply Now
							</p>

							<Dialog.Title className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#0B132B]">
								Job Application
							</Dialog.Title>

							<Dialog.Description className="mt-3 text-base leading-relaxed text-slate-500">
								Complete the form below and our recruitment team
								will contact you shortly.
							</Dialog.Description>
						</div>

						<form
							onSubmit={handleSubmit}
							className="mt-8 space-y-5"
						>
							<div className="grid gap-4 md:grid-cols-2">
								<input
									required
									value={formData.fullName}
									onChange={(e) =>
										setFormData({
											...formData,
											fullName: e.target.value,
										})
									}
									placeholder="Full Name"
									className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-[#0B132B] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#A3E635]"
								/>

								<input
									required
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
									placeholder="Email Address"
									className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-[#0B132B] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#A3E635]"
								/>
							</div>

							<input
								required
								value={formData.phone}
								onChange={(e) =>
									setFormData({
										...formData,
										phone: e.target.value,
									})
								}
								placeholder="Phone Number"
								className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-[#0B132B] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#A3E635]"
							/>

							<textarea
								rows={4}
								value={formData.coverLetter}
								onChange={(e) =>
									setFormData({
										...formData,
										coverLetter: e.target.value,
									})
								}
								placeholder="Tell us about your experience..."
								className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[#0B132B] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#A3E635]"
							/>

							<div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-semibold text-[#0B132B]">
											Resume Upload
										</h3>

										<p className="mt-1 text-sm text-slate-500">
											PDF format only
										</p>
									</div>

									<div className="rounded-full bg-[#A3E635]/15 px-3 py-1 text-xs font-bold text-[#65A30D]">
										SECURE
									</div>
								</div>

								<div className="mt-4">
									<ResumeUpload
										onUploadComplete={setResumeUrl}
									/>
								</div>

								{resumeUrl && (
									<div className="mt-4 rounded-xl bg-[#A3E635]/10 px-4 py-3 text-sm font-semibold text-[#65A30D]">
										Resume uploaded successfully
									</div>
								)}
							</div>

							<button
								disabled={loading}
								className="h-14 w-full rounded-2xl bg-[#0B132B] text-base font-bold text-white transition-all duration-300 hover:bg-[#111C44]"
							>
								{loading
									? "Submitting..."
									: "Submit Application"}
							</button>
						</form>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
