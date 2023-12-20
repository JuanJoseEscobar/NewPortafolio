import { useGLTF } from "@react-three/drei"

export const Model = (props) => {
    const model = useGLTF('./models/DunaBlanco.glb')
  return (
    <primitive object={ model.scene } {...props} />
  )
}
