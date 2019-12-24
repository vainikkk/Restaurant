
import React, { Component } from 'react';
import axios from 'axios'
class Showcollection extends Component {
    state = {
        collections: '',
        city_id: '',
        change: true
    }
    componentDidMount() {
        axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=${this.props.match.params.id}`, {
            headers: {
                'Accept': 'application/json',
                'user-key': 'a2a59715391aa49c1ae6a1f6b626e3c7',
            }
        })
            .then(res => {
                const collections = res.data;
                this.setState({ collections });
            })
    }
    handleClick = (v) => {
        this.setState({ change: false });
        this.props.history.push(`/restaurant/${v.collection.collection_id}`)
    }

    render() {
        return (
            <div>
                < div className="container" >
                    {this.state.collections.collections && this.state.collections.collections.map((value, index) => (
                        <div className="list-group-item m-2 d-flex " key={index}>
                            <div className="card border-0" style={{ width: "18rem" }} onClick={() => this.handleClick(value)}>
                                <img className="imgs" src={value.collection.image_url} alt={value.collection.title} />
                                <div className="card-body">
                                    <h5 className="card-title text-center font-weight-bold">{value.collection.title}</h5>
                                    <p className="card-text text-center">{value.collection.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Showcollection;