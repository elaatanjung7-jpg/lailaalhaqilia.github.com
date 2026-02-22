function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !phone || !email || !password) {
        alert("Harap isi semua data!");
        return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Pendaftaran berhasil! Silakan login.");
}

function login() {
    const firstName = document.getElementById("loginFirstName").value;
    const lastName = document.getElementById("loginLastName").value;
    const password = document.getElementById("loginPassword").value;

    if (
        firstName === localStorage.getItem("firstName") &&
        lastName === localStorage.getItem("lastName") &&
        password === localStorage.getItem("password")
    ) {
        localStorage.setItem("isLogin", "true");
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Data login salah!");
    }
}

function logout() {
    localStorage.removeItem("isLogin");
    window.location.href = "login.html";
}

function kirimPesan() {
    const email = document.getElementById("contactEmail").value;
    const phone = document.getElementById("contactPhone").value;
    const pesan = document.getElementById("contactPesan").value;

    if (!email || !phone || !pesan) {
        alert("Harap isi semua field!");
        return;
    }

    alert("Pesan berhasil dikirim!");
}
