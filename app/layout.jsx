import "@/assets/styles/globals.scss";

export const metadata = {
	title: "Book your next stay",
	keywords: "Rental, property, real estate ",
	description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
	return (
		<html>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
