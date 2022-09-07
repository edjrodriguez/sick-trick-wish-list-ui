import React from "react"
import Card from "../Card/Card"

const Tricks  = ({tricks}) => {
    const trickCard = tricks.map(trick =>{
        return(
            <Card 
                key={trick.id}
                id={trick.id}
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
            />
        )
    })

    const trickContainerStyles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
    }
    return (
        <div style={trickContainerStyles} className="trick-container">
            {trickCard}
        </div>
    )
}

export default Tricks