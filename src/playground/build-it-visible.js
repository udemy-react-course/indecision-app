const appRoot = document.getElementById('app')

const details = ["Detail one", "Detail two"]

let show = false
const toggleShow = () => {
    show = !show
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleShow}>{show ? "Hide details" : "Show details"}</button>
            {show && details.map(detail => <p key={detail}>{detail}</p>)}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()