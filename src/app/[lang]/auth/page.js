import PageBanner from "@/components/Shared/PageBanner";
import AuthEntryCards from "@/components/Auth/AuthEntryCards";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import { getAuthRedirectPath } from "@/utils/authRedirectPath";

export const metadata = {
	title: "Choose Login Portal | Eduup",
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
				pageTitle="Choose Your Login Portal"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Login Portal"
				lang={lang}
			/>

			<div className="auth-entry-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Welcome to Eduup</span>
						<h2>Select how you want to enter</h2>
						<p>
							Students learn, teachers create courses, and admins
							manage the platform from separate entry experiences.
						</p>
					</div>

					<AuthEntryCards lang={lang} />
				</div>
			</div>
		</>
	);
};

export default page;
