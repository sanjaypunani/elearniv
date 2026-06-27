"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Input from "../FormHelpers/Input";
import FileUpload from "../FormHelpers/FileUpload";

const UploadAssetForm = ({ courseId }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			lecture_name: "",
			asset_zip: "",
			asset_type: "DOCUMENT",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		if (!data.asset_zip) {
			toast.error("Please upload the file.");
			setIsLoading(false);
			return;
		}
		axios
			.post(`/api/course/${courseId}/asset`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
				reset({
					lecture_name: "",
					asset_zip: "",
					asset_type: data.asset_type, // retain selected type for convenience
				});
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const asset_zip = watch("asset_zip");
	const asset_type = watch("asset_type");

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Material Title / Lecture Name"
						id="lecture_name"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">Material Type</label>
						<select
							className="form-select form-control"
							disabled={isLoading}
							{...register("asset_type")}
						>
							<option value="DOCUMENT">📄 Document / PDF</option>
							<option value="BOOK">📖 Book / eBook</option>
							<option value="VIDEO">🎬 Video Lecture</option>
						</select>
					</div>
				</div>

				<div className="col-md-12">
					<FileUpload
						onChange={(value) => setCustomValue("asset_zip", value)}
						value={asset_zip}
						label={`Upload Course Material (${asset_type})`}
					/>
				</div>

				<div className="col-12 mt-3">
					<button type="submit" className="default-btn" disabled={isLoading}>
						<i className="flaticon-right-arrow"></i>
						Upload Material <span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default UploadAssetForm;
