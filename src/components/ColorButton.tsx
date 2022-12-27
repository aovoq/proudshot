import {useAtom} from 'jotai'
import {activeColorAtom} from '../atoms'


const ColorButton = ({colorCode}: { colorCode: string }) => {
    const [, setActiveColor] = useAtom(activeColorAtom)

    const clickHandler = () => {
        console.log(colorCode)
        setActiveColor(colorCode)
    }
    return (
        <div className={`colorButton`} style={{background: `#${colorCode}`}} onClick={clickHandler}></div>
    )
}

export default ColorButton