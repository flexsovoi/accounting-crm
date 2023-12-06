import { CSSProperties } from 'react'

export interface ITheme extends Partial<IColors> {
	primary: {
		brand: IColors['100']
		blue: IColors['100']
		purple: CSSProperties['color']
		purple_50: CSSProperties['color']
		light: CSSProperties['color']
		bg: IColors['100']
	}
	secondary: Partial<IColors>
	spaces: {
		base: number
	}
}

interface IColors {
	Indigo: CSSProperties['color']
	Green: CSSProperties['color']
	Cyan: CSSProperties['color']
	Blue: CSSProperties['color']
	Mint: CSSProperties['color']
	Purple: CSSProperties['color']
	Red: CSSProperties['color']
	Orange: CSSProperties['color']
	Yellow: CSSProperties['color']
	100: CSSProperties['color']
	80: CSSProperties['color']
	40: CSSProperties['color']
	20: CSSProperties['color']
	10: CSSProperties['color']
	5: CSSProperties['color']
}
