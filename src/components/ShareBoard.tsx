import { FiDownload, FiTwitter, FiCopy } from 'react-icons/fi'

const ShareBoard = () => {
  return (
    <div className={`board share`}>
      <FiTwitter size={24} />
      <FiCopy size={24} />
      <FiDownload size={24} />
    </div>
  )
}

export default ShareBoard