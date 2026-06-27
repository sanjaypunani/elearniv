import Link from "next/link";

const authEntries = [
	{
		type: "student",
		icon: "flaticon-computer",
		title: "Student",
		description:
			"Browse courses, manage your learning, save favourites, and continue lessons anytime.",
		loginText: "Student Login",
		registerText: "Create Student Account",
	},
	{
		type: "teacher",
		icon: "flaticon-shield-1",
		title: "Teacher",
		description:
			"Create courses, upload lessons and assets, and manage your teaching dashboard.",
		loginText: "Teacher Login",
		registerText: "Register as Teacher",
	},
	{
		type: "admin",
		icon: "flaticon-user",
		title: "Admin",
		description:
			"Access platform controls for courses, users, categories, coupons, and content.",
		loginText: "Admin Login",
		registerText: null,
	},
];

const AuthEntryCards = ({ lang }) => {
	return (
		<div className="auth-entry-grid">
			{authEntries.map((entry) => (
				<div className={`auth-entry-card ${entry.type}`} key={entry.type}>
					<div className="auth-entry-icon">
						<i className={entry.icon}></i>
					</div>
					<h3>{entry.title}</h3>
					<p>{entry.description}</p>

					<div className="auth-entry-actions">
						<Link
							href={`/${lang}/auth/${entry.type}`}
							className="default-btn"
						>
							<i className="flaticon-user"></i> {entry.loginText}
							<span></span>
						</Link>

						{entry.registerText && (
							<Link
								href={`/${lang}/auth/${entry.type}#register`}
								className="auth-secondary-link"
							>
								{entry.registerText}
							</Link>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default AuthEntryCards;
