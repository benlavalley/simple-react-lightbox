import { useEffect, useState } from 'react'

import { ISRLProgressBarComponent } from '../../../../../types'
import { useInterval } from '../../../../SRLHooks'
import {
  SRLProgressBar,
  SRLProgressBarWrapper
} from '../../../../styles/SRLProgressBarStyles'

const SRLProgressBarComponent = ({
  autoplay,
  autoplaySpeed,
  progressBar,
  currentElementID
}: ISRLProgressBarComponent) => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Call of the interval to fill the progress bar
  function fillProgressBar() {
    setIsPlaying(true)
  }

  useEffect(() => {
    setIsPlaying(false)
  }, [currentElementID])

  // Use interval hook
  useInterval(
    () => fillProgressBar(),
    autoplay ? autoplaySpeed / 100 : null,
    currentElementID
  )

  return (
    <SRLProgressBarWrapper
      barHeight={progressBar.height}
      backgroundColor={progressBar.backgroundColor}
      className="SRLProgressBar"
    >
      <SRLProgressBar
        barHeight={progressBar.height}
        fillColor={progressBar.fillColor}
        style={{
          transform: `scaleX(${isPlaying ? 1 : 0})`,
          transitionDuration: `${isPlaying ? autoplaySpeed + 'ms' : '0ms'}`
        }}
      />
    </SRLProgressBarWrapper>
  )
}

SRLProgressBarComponent.defaultProps = {
  autoplay: false,
  autoplaySpeed: 3000,
  currentElementID: '',
  progressBar: {
    backgroundColor: '#f2f2f2',
    fillColor: '#000000',
    height: '3px'
  }
}

export default SRLProgressBarComponent
