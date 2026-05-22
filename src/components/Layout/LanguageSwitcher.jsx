"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const languages = ["en", "hi"];

const LanguageSwitcher = ({ lang }) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("q");

	function switchLocale(locale) {
		const currentLocale = pathname.split("/")[1]; // Extract current language code
		const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
		const queryString = query
			? `?${new URLSearchParams({ q: query }).toString()}`
			: ""; // Check if query exists
		router.push(`${newPath}${queryString}`, undefined, { shallow: true });
	}
	return (
		<div className="language-switcher">
			{languages.map((locale) => (
				<button
					key={locale}
					className={lang === locale ? "active" : null}
					onClick={() => switchLocale(locale)}
				>
					{locale.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default LanguageSwitcher;
