import { ISRLCaptionContainerComponent } from '../../../../../types'
import { SRLCaption } from '../../../../styles/SRLCaptionStyles'

const SRLCaptionContainerComponent = ({
  id,
  captionAlignment,
  captionOptions,
  caption,
  thumbnailsPosition,
  SRLCaptionRef
}: ISRLCaptionContainerComponent) => {
  return (
    <SRLCaption
      id={id}
      captionAlignment={captionAlignment}
      captionStyle={captionOptions}
      thumbnailsPosition={thumbnailsPosition}
      className="SRLCaptionContainer"
      ref={SRLCaptionRef}
    >
      <p className="SRLCaptionText">{caption}</p>
    </SRLCaption>
  )
}

export default SRLCaptionContainerComponent
