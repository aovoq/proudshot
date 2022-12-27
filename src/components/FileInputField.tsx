import { FiImage } from 'react-icons/fi'

const FileInputField = ({handleChange}: {handleChange: Function}) => {
   return (
      <div className='fileInputField'>
         <FiImage size={36} />
         <p>
            Please Drag & Drop Image
            <br />
            or
            <br />
            Click on this area to select an image
         </p>
         <input type="file" accept="image/png,image/jpg" onChange={() => handleChange(event)} />
      </div>
   )
}

export default FileInputField
