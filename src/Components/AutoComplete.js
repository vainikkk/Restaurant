import Axios from "axios";
import React, { Component } from 'react';
class AutoComplete extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            suggetions: []
        }
    }
    // componentDidMount() {
    //     Axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${this.state.city}`, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'user-key': 'a2a59715391aa49c1ae6a1f6b626e3c7',
    //         }
    //     })
    //         .then(res => {
    //             const suggetions = res.data.location_suggestions
    //             this.setState((prevstate) => ({ ...prevstate, suggetions }));
    //             console.log(this.state.suggetions)
    //         })
    // }
    handleChange = async (event) => {
        const res = await Axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${event.target.value}`, {
            headers: {
                'Accept': 'application/json',
                'user-key': 'a2a59715391aa49c1ae6a1f6b626e3c7',
            }
        })
        const suggetions = await res.data
        this.setState({ suggetions: suggetions.location_suggestions });
        // .then(res => {
        //         const suggetions = res.data.location_suggestions
        //         this.setState((prevstate) => ({ ...prevstate, suggetions }));
        //         console.log(this.state.suggetions)
        //     })
        // this.setState(({ city: event.target.value }));
        // console.log(this.state.city)
    }
    handleClick = () => {
        console.log(this.state.suggetions)
        console.log(this.state.city)
    }

    render() {
        return (
            <div>
                <input type="text" name="city" onChange={this.handleChange} />
                {this.state.suggetions && this.state.suggetions.map(city => (<li key={city.id}>{city.name}</li>))}
                <input type="submit" onClick={this.handleClick} />
            </div>
        );
    }
}

export default AutoComplete;