import React, { Component } from 'react';
import axios from "axios"
class Showrestaurant extends Component {
    state = {
        restaurants: "",
        restaurant_id: ""
    }
    componentDidMount() {
        axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=11&entity_type=city&collection_id=${this.props.match.params.id}`, {
            headers: {
                'Accept': 'application/json',
                'user-key': 'a2a59715391aa49c1ae6a1f6b626e3c7',
            }
        })
            .then(resu => {
                const restaurants = resu.data.restaurants;
                this.setState({ restaurants });
            })
    }
    render() {
        return (
            <div>
                <div className="container pt-3">
                    {this.state.restaurants && this.state.restaurants.map((value, index) => (
                        <li className="list-group-item d-flex m-2 " key={index}>
                            <div className="card border-0" style={{ width: "18rem" }} onClick={() => this.handleClick(value)}>
                                <img className="imgs" src={value.restaurant.thumb} alt={value.restaurant.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-center font-weight-bold">{value.restaurant.name}</h5>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>

        );
    }
}

export default Showrestaurant;