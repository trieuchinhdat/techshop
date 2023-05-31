import { Fragment } from 'react'
// import { useTranslation } from 'react-i18next'

import Logo from 'src/assets/icon/TechShop_Logo.png'

export default function Brand() {
  return (
    <Fragment>
      <img src={Logo} alt='logo' width='166' height='51' />
    </Fragment>
  )
}
