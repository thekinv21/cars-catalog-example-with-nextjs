import { Provider } from '@/provider/Provider'

import { CustomFooter, CustomNavbar } from '../import'
import './globals.css'

export const metadata = {
	title: 'Car Catalog',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='relative'>
				<CustomNavbar />
				<main>
					<Provider>{children}</Provider>
				</main>
				<CustomFooter />
			</body>
		</html>
	)
}
