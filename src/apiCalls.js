let fetchData = () => 
    fetch("http://localhost:3001/api/v1/tricks")
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.statusText)
            } else {
                return response.json();
            }
        })
    

export {fetchData}