'use client';

import {Canvas} from '@react-three/fiber';
import {Text} from '@react-three/drei';

function Scene() {
  return (
    <Canvas>
      <Text color="black" anchorX="center" anchorY="middle">
        hello world!
      </Text>
    </Canvas>
  )
}

export default Scene;
