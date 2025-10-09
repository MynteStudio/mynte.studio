import { DefaultLogo } from './svg/default_logo'
import { SmallLogo } from './svg/small_logo'

export type LogoSize = 'default' | 'small'

export interface LogoProps {
  size: LogoSize
}

export const Logo = ({ size = 'default' }: LogoProps) => {
  if (size === 'small') return <SmallLogo />
  return <DefaultLogo />
}
