
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import React from "react";

function App () {
    return(        
        <Canvas>            
            <Sky sunPosition={[100,100,20]}>
            </Sky>           
        </Canvas>
    )
}

export default App