import { getCurrentUser } from "@/actions/getCurrentUser";
import RoleAuthPage from "@/components/Auth/RoleAuthPage";
import PageBanner from "@/components/Shared/PageBanner";
import { getAuthRedirectPath } from "@/utils/authRedirectPath";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Admin Login | Eduup",
};

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect(`/${lang}/${getAuthRedirectPath(currentUser)}`);
	}

	return (
		<>
			<PageBanner
				pageTitle="Admin Login"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Admin Login"
				lang={lang}
			/>
			<RoleAuthPage lang={lang} type="admin" />
		</>
	);
};

export default page;
