import React from 'react'
import PropTypes from 'prop-types'

import SRLContextComponent from './SRL/SRLContext'
import { useLightbox } from './SRL/SRLHooks'
import SRLLightbox from './SRL/SRLLightbox'
import SRLWrapper from './SRL/SRLWrapper'

const SimpleReactLightbox = ({ children = null }) => {
  return (
    <SRLContextComponent>
      {children}
      <SRLLightbox />
    </SRLContextComponent>
  )
}

SimpleReactLightbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export { SRLWrapper, useLightbox }
export default SimpleReactLightbox
