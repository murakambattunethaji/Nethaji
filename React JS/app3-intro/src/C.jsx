import { useState } from "react"

export const Name = () => {
    const [product, setarray] = useState(["vivo", "oppo", "redmi", "apple"])

    const changearray = () => {
        setarray(["VIVO", "OPPO", "REDMI", "APPLE"])
    }

    return <div>

        <button onClick={changearray}>change array name in capital</button>

        <ul>
            {product.map(function (src) {
                return <li>{src}</li>
            })}
        </ul>
    </div>
}

export default Name