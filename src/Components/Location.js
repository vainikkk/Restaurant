import React, { Component } from 'react';
class Location extends Component {
    state = {
        city_name: "",
        isloggedin: false
    }
    handlecity = (event) => {
        this.setState({
            city_name: event.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/collection/${this.state.city_name}`)

    }
    handleToggle = () => {
        this.setState(prevState => ({
            isloggedin: !prevState.isloggedin
        }));
    }
    render() {

        return (
            <div>
                {this.state.isloggedin && (
                    <div>
                        <p>user is loggedin </p>
                    </div>
                )}
                <button onClick={this.handleToggle}>Toggle</button>
                <form className="form-inline mt-3 justify-content-center" onSubmit={this.handleSubmit}>
                    <div className='mr-3'>
                    </div>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handlecity} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                </form>
            </div >
        );
    }
}

export default Location;