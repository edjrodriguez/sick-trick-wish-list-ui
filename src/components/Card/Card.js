import React from "react"

const Card  = ({id, stance, name, obstacle, tutorial}) => {
    const card = {
        background: "white",
        width: "28%",
        borderRadius: "15px",
        textAlign: "center",
    }

    return (
        <div style={card}className="card">
            <h3>{stance} {name}</h3>
            <h3>Obstacle: {obstacle}</h3>
            <h3>Link to tutorial: <a href={tutorial}>{tutorial}</a></h3>
        </div>
    )
}

export default Card