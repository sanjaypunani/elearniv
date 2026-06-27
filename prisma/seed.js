const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
	const email = "sanjayadmintest@yopmail.com";
	const password = "Test@123";
	const hashedPassword = await bcrypt.hash(password, 12);

	console.log("Seeding database...");

	const user = await prisma.user.upsert({
		where: { email },
		update: {
			hashedPassword,
			role: "ADMIN",
			email_confirmed: true,
			is_active: true,
		},
		create: {
			name: "Sanjay Admin",
			email,
			hashedPassword,
			role: "ADMIN",
			is_instructor: false,
			email_confirmed: true,
			is_active: true,
		},
	});

	console.log(`Successfully seeded admin user: ${user.email}`);
}

main()
	.catch((e) => {
		console.error("Error during seed:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
