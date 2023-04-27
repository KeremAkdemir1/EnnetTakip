const LoginService = () => ({

    async Logins(username,password) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

      return await fetch("https://ennettakip.com/api/v1/login", requestOptions)
    }
})

export default LoginService 