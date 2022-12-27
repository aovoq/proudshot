import { useAtom } from 'jotai'
import { activeColorAtom } from '../atoms'

const PreviewField = ({ image }: { image: string }) => {
  const [activeColor, setactiveColor] = useAtom(activeColorAtom)

   return (
      <div className='previewField'>
         <div className='wrapper' style={{background: `#${activeColor}`}}>{image && <img className='userScreenshot' src={image} />}</div>
      </div>
   )
}

export default PreviewField
