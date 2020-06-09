import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getNewData() {
        fetch('https://randomuser.me/api/', {
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        })
            .then(res => res.json())
            .then(responseData => {
                const result = responseData.results[0];
                this.setState({
                    gender: result.gender,
                    name: result.name.first + ' ' + result.name.last,
                    location: result.location.city,
                    age: result.dob.age,
                    img: result.picture.large,
                    email: result.email,
                    phone: result.phone,
                    display: '',
                })
                console.log(this.state);
            })
    }


    componentDidMount() {
        this.getNewData();
    }

    handelClick = () => {
        this.getNewData();
    }

    setData = (data) => {
        this.setState({ display: data })
    }

    render() {
        return (
            < div >
                <h2>{this.state.name}</h2>
                <img src={this.state.img} alt="random person"></img>
                <br></br>
                {this.state[this.state.display]}
                <br></br>
                <button onClick={() => { this.setData('phone') }}>Phone</button>
                <button onClick={() => { this.setData('email') }}>email</button>
                <button onClick={() => { this.setData('location') }}>location</button>
                <button onClick={() => { this.setData('age') }}>age</button>
                <button onClick={() => { this.setData('gender') }}>gender</button>
                <br></br>
                <button onClick={this.handelClick}>new user</button>
            </div >
        )
    }
}
