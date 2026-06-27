import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request, { params }) {
	const { courseId } = await params;

	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Unauthorized user.",
				},
				{ status: 401 }
			);
		}
		const body = await request.json();
		const { lecture_name, asset_zip, asset_type } = body;

		if (!lecture_name || !asset_zip) {
			return NextResponse.json(
				{
					message: "One or more fields are empty!",
				},
				{ status: 400 }
			);
		}

		await prisma.asset.create({
			data: {
				lecture_name,
				asset_zip,
				asset_type: asset_type || "DOCUMENT",
				courseId: parseInt(courseId),
			},
		});

		return NextResponse.json(
			{
				message: "Asset uploaded.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	const { courseId: assetId } = await params;
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Unauthorized user.",
				},
				{ status: 401 }
			);
		}

		await prisma.asset.delete({
			where: {
				id: parseInt(assetId),
			},
		});

		return NextResponse.json(
			{
				message: "Asset deleted.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
