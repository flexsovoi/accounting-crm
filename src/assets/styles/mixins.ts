import { StyleFunction, css } from 'styled-components'
import { IFlex } from '../../core/types/atoms-types'

export const FlexMixin: StyleFunction<Partial<IFlex>> = props => {
	let rules = ''
	if (!props) return

	if (props.JC_center) {
		rules += css`
			justify-content: center;
		`
	}
	if (props.JC_SB) {
		rules += css`
			justify-content: space-between;
		`
	}
	if (props.JC_end) {
		rules += css`
			justify-content: flex-end;
		`
	}
	if (props.jc) {
		rules += `
			justify-content: ${props.jc};
		`
	}

	if (props.fullWidth) {
		rules += css`
			width: 100%;
		`
	}
	if (props.gap) {
		rules += `
			gap: ${props.gap * props.theme.spaces.base}px;
		`
	}

	if (props.w) {
		if (typeof props.w == 'number') {
			rules += `
			width: ${props.w * props.theme.spaces.base}px;
		`
		}
		if (typeof props.w == 'string') {
			rules += `
			width: ${props.w};
		`
		}
	}
	if (props.bgc) {
		rules += `
			background-color: ${props.bgc};
		`
	}

	console.log(rules)
	return rules
}
