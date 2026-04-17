// Global Script for DigiTicket HTML Frontend

const API_URL = "http://localhost:5000/api";

function getAuthToken() {
    return localStorage.getItem("digiticket_token");
}

function handleLogout() {
    localStorage.removeItem("digiticket_token");
    localStorage.removeItem("digiticket_user");
    window.location.href = "login.html";
}

function initializeNavbar() {
    const token = getAuthToken();
    const user = JSON.parse(localStorage.getItem("digiticket_user") || "null");
    
    const authGroup = document.getElementById("nav-auth");
    if (authGroup) {
        if (token && user) {
            authGroup.innerHTML = `
                <a href="profile-menu.html" style="color: #000; font-weight: 700; text-decoration: none; margin-right: 15px; display: flex; align-items: center; gap: 8px;">
                    Hello, ${user.name} <span style="font-size: 12px;">▼</span>
                </a>
                <button onclick="handleLogout()" style="background: transparent; border: 2px solid var(--primary-red); color: var(--primary-red); border-radius: 50px; padding: 6px 16px; font-weight: 700; cursor: pointer;">Log Out</button>
            `;
        } else {
            authGroup.innerHTML = `
                <a href="login.html" class="btn-text">Login</a>
                <a href="signup.html" class="btn-red-solid">Sign Up</a>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initializeNavbar();
});
