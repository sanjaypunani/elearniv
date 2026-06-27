import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

function generateOrderNumber() {
	return `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

// GET — check if current user is enrolled in this course
export async function GET(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json({ isEnrolled: false });
	}

	const { courseId } = await params;
	if (!courseId) {
		return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
	}

	const enrolment = await prisma.enrolment.findFirst({
		where: {
			userId: currentUser.id,
			courseId: parseInt(courseId),
		},
	});

	return NextResponse.json({ isEnrolled: !!enrolment });
}

// POST — enrol the current user in a course for free
export async function POST(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Please login to enrol in a course." },
			{ status: 401 }
		);
	}

	const { courseId } = await params;
	if (!courseId) {
		return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
	}

	// Check the course exists and is approved
	const course = await prisma.course.findUnique({
		where: { id: parseInt(courseId) },
	});

	if (!course || !course.approved) {
		return NextResponse.json(
			{ message: "Course not found or not available." },
			{ status: 404 }
		);
	}

	// Prevent duplicate enrolment
	const existing = await prisma.enrolment.findFirst({
		where: {
			userId: currentUser.id,
			courseId: parseInt(courseId),
		},
	});

	if (existing) {
		return NextResponse.json(
			{ message: "You are already enrolled in this course." },
			{ status: 409 }
		);
	}

	const enrolment = await prisma.enrolment.create({
		data: {
			userId: currentUser.id,
			courseId: parseInt(courseId),
			order_number: generateOrderNumber(),
			price: 0,
			payment_status: "PAID",
			status: "PAID",
			payment_via: "Free",
		},
	});

	return NextResponse.json(
		{ message: "Successfully enrolled!", enrolment },
		{ status: 201 }
	);
}
