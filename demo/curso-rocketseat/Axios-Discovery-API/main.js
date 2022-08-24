const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.log(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error))
}

function getUser(id) { 
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.log(error))
}

function updateUser(id, userUpdated){

    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

const newUser = {
    name: "Letícia Eduarda",
    avatar: "https://picsum.photos/200",
    city: "Guapé MG"
}

const userUpdated = {
    name: "Guilherme Mikael",
    avatar: "https://picsum.photos/200",
    city: "Batatais"
}
//addNewUser(newUser)
deleteUser(9)
//updateUser(1, userUpdated)
getUsers()
getUser(1)


