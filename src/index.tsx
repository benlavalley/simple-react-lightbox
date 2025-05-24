import React from 'react'

import SRLContextComponent from './SRL/SRLContext'
import { useLightbox } from './SRL/SRLHooks'
import SRLLightbox from './SRL/SRLLightbox'
import SRLWrapper from './SRL/SRLWrapper'

interface SimpleReactLightboxProps {
  children?: React.ReactNode
}

const SimpleReactLightbox: React.FC<SimpleReactLightboxProps> = ({ children = null }) => {
  return (
    <SRLContextComponent>
      {children}
      <SRLLightbox />
    </SRLContextComponent>
  )
}

export { SRLWrapper, useLightbox }
export default SimpleReactLightbox