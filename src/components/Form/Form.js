import React, { Component } from "react"
import { v4 as uuidV4 } from "uuid"

class Form extends Component {
    constructor() {
        super()
        this.state ={
            stance: "",
            name: "",
            obstacle: "",
            link: ""
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const newTrick = {
            id: uuidV4(),
            ...this.state
        }
        this.props.addTrick(newTrick)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            stance: "",
            name: "",
            obstacle: "",
            link: ""
        })
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <form>
                <select name="stance" value={this.state.stance} onChange={this.handleChange} >
                    <option value="">Choose Your Stance</option>
                    <option value="Regular">Regular</option>
                    <option value="Switch">Switch</option>
                </select>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name of Trick"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <select name="obstacle" value={this.state.obstacle} onChange={this.handleChange} placeholder="Choose obstacle">
                    <option value="">Choose Your Obstacle</option>
                    <option value="Flatground">Flatground</option>
                    <option value="Ledge">Ledge</option>
                    <option value="Rail">Rail</option>
                    <option value="Stairs">Stairs</option>
                    <option value="Pool">Pool</option>
                </select>
                 <input 
                    type="text"
                    name="link"
                    placeholder="Link to Tutorial"
                    value={this.state.link}
                    onChange={this.handleChange}
                />
                <button name="submit" onClick={(event) => this.onSubmit(event)}>SEND IT</button>  
            </form>
        )
    }
}

export default Form