import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { DM_Sans, DM_Mono } from 'next/font/google'
import '@/styles/globals.css'
import React from 'react'
import ThemeProvider from '@/providers/theme-provider'

const dmSans = DM_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const dmMono = DM_Mono({
	variable: '--font-dm-mono',
	subsets: ['latin'],
	weight: '400',
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
				className={`${dmSans.variable} ${dmMono.variable} antialiased`}
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
