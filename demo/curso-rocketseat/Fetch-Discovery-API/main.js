const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

const newUser = {
    name: "Ricardo Goulart",
    avatar: "https://picsum.photos/200/300",
    city: "Rio do Sul"
}

const updatedUser = {
    name: "Fábio",
    avatar: "https://picsum.photos/200/300",
    city: "Guapé"
}

//updateUser(updatedUser, 11)
getUser(2)
getUsers()
//addUser(newUser)
deleteUser(6)