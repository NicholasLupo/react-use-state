import languages from '../data/languages'

export default function CardComponent() {

    return (

        <div className="container">
            {
                languages.map((item) => (

                    <div className="card p-3 mb-3" key={item.id}>
                        <button className="btn btn-primary"> {item.title} </button>
                        <p> {item.description} </p>
                    </div>

                ))
            }
        </div>

    )
}