function register(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(!name || !email || !password){
        alert("Harap isi semua data!");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Pendaftaran berhasil!");
}

function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === localStorage.getItem("email") &&
       password === localStorage.getItem("password")){
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Email atau Password salah!");
    }
}

function kirimPesan(){
    alert("Pesan berhasil dikirim!");
}
