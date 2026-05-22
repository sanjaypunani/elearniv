/** @type {import('next').NextConfig} */
const nextConfig = {
	// trailingSlash: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "via.placeholder.com",
			},
			{
				protocol: "https",
				hostname: "developers.google.com",
			},
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f21gftybjsygg458086548a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dpvlrlsa2",
		NEXT_CLOUDINARY_PRESET: "eduup_preset",
		STRIPE_PUBLISHABLE_KEY:
			"pk_test_ZaZZWybfgfglvdIn12yFleIqyjSI00G4e18Kf7",
		STRIPE_SECRET_KEY: "sk_test_2DqyjEwaUtrbrbrb0PpEMVQ3qSAw00zgrbnfPk",
	},
};

export default nextConfig;
