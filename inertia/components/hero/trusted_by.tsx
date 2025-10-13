import { DzrptLogo } from '~/components/svgs/dzrpt_logo'
import { HaguenauLogo } from '~/components/svgs/haguenau_logo'
import { PicassoLogo } from '~/components/svgs/picasso_logo'
import { RoshniTechnologiesLogo } from '~/components/svgs/roshni_technologies_logo'
import { SolarTerraLogo } from '~/components/svgs/solar_terra_logo'
import styles from './trusted_by.module.css'
import { useTranslation } from '~/hooks/use_translation'

export const TrustedBy = () => {
  const { t } = useTranslation()

  const logos = [
    <DzrptLogo key="dzrpt" />,
    <HaguenauLogo key="haguenau" />,
    <SolarTerraLogo key="solarterra" />,
    <PicassoLogo key="picasso" />,
    <RoshniTechnologiesLogo key="roshnitechnologies" />,
  ]

  return (
    <div className="w-full">
      <span className="block mb-4 text-center text-xs font-light font-en">
        {t('home.hero.trusted_by')}
      </span>
      <div dir="ltr" className={styles.container}>
        <div>{logos}</div>
        <div>{logos}</div>
      </div>
    </div>
  )
}
