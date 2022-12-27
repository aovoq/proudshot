import ColorButton from './ColorButton'
import ConfigurePadding from './ConfigurePadding'
import ToggleSwitch from './ToggleSwitch'

const ConfigureBoard = () => {
   const colors = ['FFAE50', '72DC1E', 'C712E4', '46E5C9', 'FB60C6', 'AD7432', '2F5BB0', 'F4EE5E']
   return (
      <div className={'board configure'}>
         <div className='colorButtons'>
            {colors.map((color) => (
                  <ColorButton colorCode={color} key={color}/>
            ))}
         </div>
         <ConfigurePadding />
         <ToggleSwitch property='Shadow' />
      </div>
   )
}

export default ConfigureBoard
