import { CSSProperties } from 'react'

export interface IAtoms extends IMargin, IFlex {}

interface IMargin {
	m: string | number
	mt: number
	mb: number
	mr: number
	ml: number
	mx: number
	my: number
}

export interface IFlex {
	// Flex characteristics
	center: boolean
	jc: CSSProperties['justifyContent']
	ai: CSSProperties['alignItems']
	JC_center: boolean
	JC_SB: boolean
	JC_end: boolean
	AI_center: boolean
	fullWidth: boolean
}
// TODO: сделать интерфейс как sx в mui

// interface IStyles extends IFlex, IMargin {}
