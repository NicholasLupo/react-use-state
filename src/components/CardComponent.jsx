import languages from '../data/languages'

export default function CardComponent() {

    const btn_primary = 'btn btn-primary'
    const btn_warning = 'btn btn-warning'

    return (
        <div className="container">
            {
                languages.map((item) => {

                    const btnClass = item.id % 2 === 0 ? btn_warning : btn_primary

                    return (
                        <div className="card p-3 mb-3" key={item.id}>
                            <button className={btnClass}>{item.title}</button>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}