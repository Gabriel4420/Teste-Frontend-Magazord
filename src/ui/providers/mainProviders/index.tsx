import * as C from 'ui/components'
import { MainProvidersProps } from './types'

export const MainProviders = ({ children }: MainProvidersProps) => (
  <C.ErrorBoundary>{children}</C.ErrorBoundary>
)
