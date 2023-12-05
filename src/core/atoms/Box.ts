import styled from 'styled-components'

interface BoxProps {
	centred: boolean
}

const Box = styled.div<BoxProps>`
	display: flex;
	justify-content: ${({ centred }) => (centred ? 'center' : 'flex-start')};
`

export default Box
