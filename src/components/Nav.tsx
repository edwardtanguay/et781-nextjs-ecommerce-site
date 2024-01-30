"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Nav = () => {
	const activeSegment = useSelectedLayoutSegment();

	return (
		<nav>
			<ul className="flex gap-4 bg-slate-700 text-white p-2 font-semibold rounded mb-4">
				<li>
					<Link
						href="/"
						className={
							activeSegment === "(welcome)"
								? "text-yellow-200"
								: ""
						}
					>
						Welcome
					</Link>
				</li>
				<li>
					<Link
						href="/products"
						className={
							activeSegment === "products"
								? "text-yellow-200"
								: ""
						}
					>
						Products
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={
							activeSegment === "contact"
								? "text-yellow-200"
								: ""
						}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};
