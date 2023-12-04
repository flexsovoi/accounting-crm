import { FC, PropsWithChildren, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { palette } from '../theme/pallete'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
	const theme = palette(themeMode)

	return (
		<ThemeProvider theme={theme}>
			{
				// Header
			}
			{
				// SideBar
			}

			{children}
			{
				// Footer
			}
		</ThemeProvider>
	)
}

export default Layout
