import
class Specialty extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageUrl} alt={''} />
                <h3>{this.prop.name}</h3>
                <div>{this.prop.description}</div>
                </div>
        )
    }
}

export default SpecialtiesList