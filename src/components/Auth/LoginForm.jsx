"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../FormHelpers/Input";

const roleRedirects = {
	student: "learning/my-courses",
	teacher: "instructor/courses",
	admin: "admin",
};

const LoginForm = ({
	lang,
	accountType = "student",
	title = "Login",
	subtitle,
	buttonText = "Log In",
	compact = false,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);
		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (!callback?.error) {
				toast.success("Logged in");
				const redirectPath = roleRedirects[accountType] || "";
				router.push(`/${lang}/${redirectPath}`);
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	return (
		<div className={`login-form ${compact ? "auth-card-compact" : ""}`}>
			<h2>{title}</h2>
			{subtitle && <p className="auth-form-intro">{subtitle}</p>}

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Email"
					id="email"
					type="email"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
						<p>
							<input type="checkbox" id="test2" />
							<label htmlFor="test2">Remember me</label>
						</p>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
						<Link
							href={`/${lang}/forgot-password`}
							className="lost-your-password"
						>
							Lost your password?
						</Link>
					</div>
				</div>

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Please wait..." : buttonText}
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
