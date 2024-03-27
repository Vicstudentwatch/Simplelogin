    let loggedUser = [{username:'admin' ,password:'12334',name:'admin'},{username:'user1' ,password:'56778',name:'user1'},{username:'user2' ,password:'901223',name:'user2'},{username: 'user3' ,password: '45667',name: 'user3'},{username: 'user4' ,password: '8901223',name: 'user4'}]
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const welcome =  document.getElementById('welcome');
    const welcomeButton = document.getElementById('welcomeButton');
    let currentUser = '';
    let currentPassword =  '';


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    for(i=0;i<5;i++){
        if (loggedUser[i].username === username.value && loggedUser[i].password === password.value) {
           currentUser =  loggedUser[i].name;
           console.log(currentUser);
        //    welcome.innerText = `Welcome ${currentUser}to this App!`;
           welcomeButton.style = "display:block;"         
           alert(`hi there ${currentUser}`);
        }
    }
    console.log(currentUser);
});

