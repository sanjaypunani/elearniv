"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const RegisterForm = ({
	accountType = "student",
	title = "Register",
	subtitle,
	buttonText = "Register",
	loginHref,
}) => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		await axios
			.post("/api/register", {
				...data,
				accountType,
			})
			.then(() => {
				toast.success("Registration success! Please login.");
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="register-form">
			<h2>{title}</h2>
			{subtitle && <p className="auth-form-intro">{subtitle}</p>}

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Full Name"
					id="name"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

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
					type="password"
					label="Password"
					id="password"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<p className="description">
					The password should be at least eight characters long. To
					make it stronger, use upper and lower case letters, numbers,
					and symbols like ! " ? $ % ^ & )
				</p>

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Please wait..." : buttonText}
				</button>

				{loginHref && (
					<p className="auth-switch-text">
						Already have an account?{" "}
						<Link href={loginHref}>Login here</Link>
					</p>
				)}
			</form>
		</div>
	);
};

export default RegisterForm;
