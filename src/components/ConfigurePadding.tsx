import { activeColorAtom } from "../atoms"
import Slider from "./Slider"
import {useAtom} from 'jotai'

const ConfigurePadding = () => {
  const [activeColor] = useAtom(activeColorAtom)
  return (
    <div className="paddingConfigs">
      <p>Padding</p>
      <Slider property='x' value={50} />
      <Slider property='y' value={50} />
      {activeColor}
    </div>
  )
}

export default ConfigurePadding