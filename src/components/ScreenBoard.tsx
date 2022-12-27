import { ChangeEvent, useState } from 'react'
import FileInputField from './FileInputField'
import PreviewField from './PreviewField'

const ScreenBoard = () => {
   const [image, setImage] = useState('')

   const handleGetImage = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files
      if (!files || files?.length === 0) return
      const file = files[0]
      console.log('file:', file)
      console.log(window.URL.createObjectURL(file))
      setImage(window.URL.createObjectURL(file))
   }

   return <div className='board screen'>{image ? <PreviewField image={image} /> : <FileInputField handleChange={handleGetImage} />}</div>
}

export default ScreenBoard
