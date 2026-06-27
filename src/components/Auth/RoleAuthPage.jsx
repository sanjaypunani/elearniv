import Link from "next/link";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const roleContent = {
	student: {
		badge: "Student Portal",
		title: "Start learning with courses built for your pace.",
		description:
			"Login to continue your enrolled lessons, review your wishlist, and discover your next course.",
		loginTitle: "Student Login",
		loginSubtitle: "Use your Eduup student credentials to continue learning.",
		loginButton: "Login as Student",
		registerTitle: "Create Student Account",
		registerSubtitle:
			"Join Eduup to save courses, checkout faster, and track your learning progress.",
		registerButton: "Create Student Account",
		highlights: [
			"Access purchased courses",
			"Track video progress",
			"Save courses to wishlist",
		],
	},
	teacher: {
		badge: "Teacher Studio",
		title: "Teach online and manage your course business.",
		description:
			"Login to manage your courses, upload course videos and assets, and keep your lessons moving.",
		loginTitle: "Teacher Login",
		loginSubtitle: "Use your Eduup teacher credentials to access course tools.",
		loginButton: "Login as Teacher",
		registerTitle: "Register as Teacher",
		registerSubtitle:
			"Create an instructor account so you can submit courses and build your teaching catalog.",
		registerButton: "Create Teacher Account",
		highlights: [
			"Create and edit courses",
			"Upload videos and assets",
			"Manage course catalog",
		],
	},
	admin: {
		badge: "Admin Console",
		title: "Platform management for the Eduup team.",
		description:
			"Admin access is reserved for approved platform managers. There is no public admin registration.",
		loginTitle: "Admin Login",
		loginSubtitle: "Use your assigned admin credentials to access the dashboard.",
		loginButton: "Login as Admin",
		registerTitle: null,
		registerSubtitle: null,
		registerButton: null,
		highlights: [
			"Approve and feature courses",
			"Manage users and content",
			"Control categories and coupons",
		],
	},
};

const RoleAuthPage = ({ lang, type }) => {
	const content = roleContent[type] || roleContent.student;

	return (
		<div className={`role-auth-area role-auth-${type} ptb-100`}>
			<div className="container">
				<div className="role-auth-topbar">
					<Link href={`/${lang}/auth`} className="auth-secondary-link">
						<i className="bx bx-arrow-back"></i> Choose another portal
					</Link>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12">
						<div className="role-auth-intro">
							<span>{content.badge}</span>
							<h1>{content.title}</h1>
							<p>{content.description}</p>

							<ul>
								{content.highlights.map((item) => (
									<li key={item}>
										<i className="bx bx-check"></i>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="col-lg-7 col-md-12">
						<div
							className={`role-auth-forms ${
								type === "admin" ? "single-form" : ""
							}`}
						>
							<LoginForm
								lang={lang}
								accountType={type}
								title={content.loginTitle}
								subtitle={content.loginSubtitle}
								buttonText={content.loginButton}
								compact={type === "admin"}
							/>

							{type !== "admin" ? (
								<div id="register">
									<RegisterForm
										accountType={type}
										title={content.registerTitle}
										subtitle={content.registerSubtitle}
										buttonText={content.registerButton}
										loginHref={`/${lang}/auth/${type}`}
									/>
								</div>
							) : (
								<div className="admin-no-registration">
									<h3>No public registration</h3>
									<p>
										Admin accounts are created internally.
										If you need access, contact the platform
										owner.
									</p>
									<Link href={`/${lang}/auth/student`}>
										Looking for student login?
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoleAuthPage;
