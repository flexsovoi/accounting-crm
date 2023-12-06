import 'styled-components'

import { ITheme } from '@/core/types/theme-types'

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
