import { useName } from "../NameProvider";

const C = () => {
    const { name, setName } = useName();
    return (
        <>
            <p>name in C: {name}</p>
            <input type="text" id="name" onChange={({ target: { value } }) => setName(value)} />
        </>
    )
}

export default C