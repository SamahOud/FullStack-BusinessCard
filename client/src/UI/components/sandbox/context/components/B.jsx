import { useName } from "../NameProvider"
import C from "./C";

const B = () => {
    const { name } = useName();
    return (
        <>
            <p>name in B: {name}</p>
            <C />
        </>
    )
}

export default B