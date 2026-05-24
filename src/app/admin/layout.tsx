import { Sidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen bg-[#F8FAFC]">
			<Sidebar />

			<div className="flex-1 overflow-x-hidden">
				<div className="p-6 md:p-10">{children}</div>
			</div>
		</main>
	);
}
