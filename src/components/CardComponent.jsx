import { useState } from 'react'
import languages from '../data/languages'

export default function CardComponent() {

    const btn_primary = 'btn btn-primary'
    const btn_warning = 'btn btn-warning'

    const [isActive, isStateActive] = useState(null)

    function toggleText(id) {

        if (isActive === id) {

            return isStateActive(null)

        }

        isStateActive(id)

    }

    return (

        <div className="container">
            {
                languages.map((item) => {

                    const btnClass = item.id === isActive ? btn_warning : btn_primary

                    return (
                        <div className="card p-3 mb-3" key={item.id}>
                            <button onClick={() => toggleText(item.id)} className={btnClass}>{item.title}</button>
                            {
                                isActive === item.id && (

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