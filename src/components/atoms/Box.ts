import styled from 'styled-components'
import { FlexMixin } from '../../assets/styles/mixins'
import { IAtoms } from '../../core/types/atoms-types'

interface IBox extends Partial<IAtoms> {}

const Box = styled.div<IBox>`
	display: flex;
	${FlexMixin}
`

export default Box
