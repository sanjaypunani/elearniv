export function getAuthRedirectPath(currentUser) {
	if (currentUser?.role === "ADMIN") {
		return "admin";
	}

	if (currentUser?.role === "INSTRUCTOR" || currentUser?.is_instructor) {
		return "instructor/courses";
	}

	return "learning/my-courses";
}
