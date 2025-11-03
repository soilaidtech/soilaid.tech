import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import localFont from 'next/font/local'
import '@/styles/globals.css'
import React from 'react'
import ThemeProvider from '@/providers/theme-provider'

const avenirLT = localFont({
	src: [
		{
			path: '../../public/fonts/avenir-lt-pro/AvenirLTProBlack.otf',
			weight: '900',
			style: 'bold',
		},
		{
			path: '../../public/fonts/avenir-lt-pro/AvenirLTProMedium.otf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-avenir-lt-pro',
})

export const metadata: Metadata = {
	title: 'SoilAid',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${avenirLT.className} ${avenirLT.className} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
