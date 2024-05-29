import { NameProvider } from "../NameProvider"
import B from "./B"

const A = () => {
    return (
        <NameProvider>
            <B />
        </NameProvider>
    )
}

export default A