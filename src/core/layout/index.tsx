import { FC, PropsWithChildren, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/globalStyles'
import { palette } from '../theme/pallete'
import { ITheme } from '../types/theme-types'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
	const theme: ITheme = palette(themeMode)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

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
