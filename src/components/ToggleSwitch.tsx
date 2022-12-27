import { ChangeEvent } from 'react'

const ToggleSwitch = ({ property }: { property: string }) => {
   const clickhandle = (event: ChangeEvent<HTMLInputElement>) => {
      console.log('click', event.target.value)
   }
   return (
      <label className='toggleSwitch'>
         <p>{property}</p>
         <div className='toggleWrapper'>
            <input type='checkbox' id={property} className='toggleInput' onChange={clickhandle} />
            <span className='toggleVirtual'></span>
         </div>
      </label>
   )
}

export default ToggleSwitch
