import { useRef, useEffect, useState } from 'react'
import Globe from 'vanta/dist/vanta.globe.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null) 
    const [vanta, setVanta] = useState(0) 

    useEffect(() => {
        if (!vanta) {
            setVanta(Globe({
                THREE,
                el: myRefDiv.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x20f72b,
                size: 1.30,
                backgroundColor: 0x894ef4
            })) 
        }
        return () => {
            if (vanta) {
                vanta.destroy()
            }
        }
    }, [vanta])

    return myRefDiv
}

export default useVanta