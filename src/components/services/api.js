
const getMissions = () => {
    return fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
}

const getMission = (id) => {
    return fetch('https://api.spacexdata.com/v3/launches/' + id)
        .then(response => response.json())
}

export {getMissions, getMission}