import CheckoutForm from "@/components/Checkout/CheckoutForm";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "Checkout | Eduup - React Next.js Learning Management System",
};

const page = async ({ params }) => {
	const { lang } = await params;
	return (
		<>
			<PageBanner
				pageTitle="Checkout"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Checkout"
				lang={lang}
			/>

			<CheckoutForm lang={lang} />
		</>
	);
};

export default page;
