import { ChangeEvent } from "react";

const Slider = ({ property, value }: { property: string; value: number }) => {
   const change = (e: ChangeEvent<HTMLInputElement> ) => {
      console.log(e.target.value)
   }
   return (
      <div className='paddingSlider'>
         <p>{property}</p>
         <input type='range' className='slider'  onChange={change} />
      </div>
   )
}

export default Slider
