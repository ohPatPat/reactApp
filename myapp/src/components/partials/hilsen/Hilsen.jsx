import { useState } from 'react'

export const Greatings = () => {
    const [name, setName] = useState('')

    return (
        <>
            <h2>Send en hilsen til {name}</h2>
            <input type="text" onInput={e => setName(e.target.value)} />
        </>
    )
}