import { useState } from 'react'
import languages from '../data/languages'

export default function CardComponent() {

    const btn_primary = 'btn btn-primary'
    const btn_warning = 'btn btn-warning'

    const [activeIds, setActiveIds] = useState([])

    function toggleText(id) {

        setActiveIds((current) => {

            if (current.includes(id)) {
                return current.filter((activeId) => activeId !== id)
            }

            return [...current, id]

        })
    }

    return (
        <div className="container">
            {
                languages.map((item) => {
                    const isOpen = activeIds.includes(item.id)
                    const btnClass = isOpen ? btn_warning : btn_primary

                    return (
                        <div className="card p-3 mb-3" key={item.id}>
                            <button onClick={() => toggleText(item.id)} className={btnClass}>{item.title}</button>
                            {
                                isOpen && (
                                    <p>{item.description}</p>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}