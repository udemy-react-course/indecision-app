class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.handleToggleShow = this.handleToggleShow.bind(this)
    }
    handleToggleShow() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleShow}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (
                    <div>
                        <p>Here are some details!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot)