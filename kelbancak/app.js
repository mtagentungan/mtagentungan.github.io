const GAS_URL = "https://script.google.com/macros/s/AKfycbzsl3tDsePt6SPKKjKoZI_nvSMHi2HomQtfrmoPeupeNqIKeoR6sjTO8oS4Wr30Cfk/exec";

async function login() {
    const user = document.getElementById("username").value;
    const pin = document.getElementById("pin").value;
    
    const response = await fetch(GAS_URL);
    const data = await response.json();
    
    const userAccount = data.find(item => item.username === user && item.pin === pin);
    
    if(userAccount) {
        localStorage.setItem("user", JSON.stringify(userAccount));
        window.location.href = userAccount.role === 'admin' ? 'admin.html' : 'anggota.html';
    } else {
        alert("Username atau PIN salah");
    }
}
