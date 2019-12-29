const pushfrm = document.getElementById('btnRegister');
pushfrm.addEventListener('click', async function(event) {
    event.preventDefault()

    const inputName = document.getElementById('input_name').value;
    const inputPhone = document.getElementById('input_phone').value;
    const user = {
            name: inputName,
            phone: inputPhone,
        }
        /*-------POST DATA API--------*/
    async function postdata(user) {
        // if (user.length === 1) {
        const setting = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch('http://5e07a02e87c6b400147a772b.mockapi.io/userinfo', setting)
        if (!response.ok) throw Error(response.message);

        try {
            const data = await response.json();
            window.location.href = "../html/chuongtrinhhoc2.html"
            return data;
        } catch (err) {
            throw err;
        }
        console.log("oki api")
    }

    postdata(user)


});