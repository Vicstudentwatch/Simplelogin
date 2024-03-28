    let loggedUser = [{username:'admin' ,password:'12334',name:'admin'},{username:'user1' ,password:'56778',name:'user1'},{username:'user2' ,password:'901223',name:'user2'},{username: 'user3' ,password: '45667',name: 'user3'},{username: 'user4' ,password: '8901223',name: 'user4'}]

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    let currentUser = '';
    let currentPassword =  '';

    function logIn(event) {
        event.preventDefault();
    
        for(i=0;i<loggedUser.length;i++){
            if (loggedUser[i].username === username.value && loggedUser[i].password === password.value) {
                currentUser =  loggedUser[i].name;
                window.location.href = "homepage.html";
            }}
        if (currentUser === '') {
            errorMessage.style = "display:block;"
        }
        console.log(currentUser + "1");
        return currentUser;
    }

document.getElementById('login-form').addEventListener('submit', logIn);


