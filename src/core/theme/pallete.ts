import { ITheme } from '../types/theme-types'

const WHITE = {
	100: 'rgba(255, 255, 255, 1)',
	80: 'rgba(255, 255, 255, 0.8)',
	40: 'rgba(255, 255, 255, 0.4)',
	20: 'rgba(255, 255, 255, 0.2)',
	10: 'rgba(255, 255, 255, 0.1)',
	5: 'rgba(255, 255, 255, 0.05)'
}
const BLACK = {
	100: 'rgba(28, 28, 28, 1)',
	80: 'rgba(28, 28, 28, 0.8)',
	40: 'rgba(28, 28, 28, 0.4)',
	20: 'rgba(28, 28, 28, 0.2)',
	10: 'rgba(28, 28, 28, 0.1)',
	5: 'rgba(28, 28, 28, 0.05)'
}
const COLORS = {
	Indigo: '#95A4FC',
	Green: '#A1E3CB',
	Cyan: '#A8C5DA',
	Blue: '#B1E3FF',
	Mint: '#BAEDBD',
	Purple: '#C6C7F8',
	Red: '#FF4747',
	Orange: '#FFCB83',
	Yellow: '#FFE999'
}

export function palette(mode: 'light' | 'dark') {
	const light: ITheme = {
		primary: {
			brand: BLACK[100],
			blue: '#E3F5FF',
			purple: '#E5ECF6',
			purple_50: '#E5ECF680',
			light: '#F7F9FB',
			bg: WHITE[100]
		},
		secondary: { ...COLORS },
		spaces: {
			base: 4
		}
	}
	const dark: ITheme = {
		primary: {
			brand: COLORS.Purple,
			blue: '#E3F5FF',
			purple: '#E5ECF6',
			purple_50: '#E5ECF680',
			light: WHITE[5],
			bg: BLACK[100]
		},
		secondary: { ...COLORS },
		spaces: {
			base: 4
		}
	}
	return mode === 'light' ? light : dark
}
