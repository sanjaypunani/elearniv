import { getPartners } from "@/actions/admin/getPartners";
import { getTestimonials } from "@/actions/admin/getTestimonials";
import { getCurrentUser } from "@/actions/getCurrentUser";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import AboutUs from "@/components/eLearningSchool/AboutUs";
import AffordableCertification from "@/components/eLearningSchool/AffordableCertification";
import Banner from "@/components/eLearningSchool/Banner";
import Features from "@/components/eLearningSchool/Features";
import FeedbackSliderWithFunFacts from "@/components/eLearningSchool/FeedbackSliderWithFunFacts";
import Partner from "@/components/eLearningSchool/Partner";
import NoticeBoard from "@/components/eLearningSchool/NoticeBoard";
import LeadershipPanel from "@/components/eLearningSchool/LeadershipPanel";
import GovtInitiatives from "@/components/eLearningSchool/GovtInitiatives";
import { getDictionary } from "./dictionaries";

export const metadata = {
	title: "Home | Eduup - Government eLearning Portal",
};

export default async function Page({ params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const currentUser = await getCurrentUser();
	const { partners } = await getPartners();
	const { testimonials } = await getTestimonials();
	return (
		<>
			<Banner
				currentUser={currentUser}
				{...dict}
				lang={lang}
			/>
			<NoticeBoard lang={lang} />
			<LeadershipPanel lang={lang} />
			<GovtInitiatives lang={lang} />
			<Features {...dict} />
			<AboutUs lang={lang} {...dict} />
			<FeedbackSliderWithFunFacts testimonials={testimonials} {...dict} />
			<Partner partners={partners} />
			<AffordableCertification {...dict} />
			<SubscribeForm {...dict} />
		</>
	);
}
