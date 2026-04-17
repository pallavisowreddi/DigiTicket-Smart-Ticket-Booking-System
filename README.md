# DigiTicket-Smart-Ticket-Booking-System
DigiTicket is a full-stack web application designed for seamless booking of flights and movie tickets. It provides a user-friendly interface, secure authentication, and efficient booking management.


# 🎟️ DigiTicket – Smart Ticket Booking System
## 🚀 Overview

**DigiTicket** is a full-stack web application that enables users to seamlessly book **flight tickets ✈️** and **movie tickets 🎬** on a single platform.
It provides secure authentication, an intuitive user interface, and efficient booking management.

This project demonstrates real-world implementation of modern web technologies including frontend, backend, database, and API integration.


## ✨ Key Features

* 🔐 Secure User Authentication (JWT-based login/signup)
* 🎬 Movie Ticket Booking System
* ✈️ Flight Ticket Booking System
* 📊 Booking Management (View & Track bookings)
* ⚡ Fast and Responsive User Interface
* 🎨 UI Designed using Figma
* 🔗 RESTful API Integration
* 
## 🛠️ Tech Stack
### 💻 Frontend
* HTML, CSS, JavaScript
* React (Vite)

### 🖥️ Backend
* Node.js
* Express.js
* MongoDB 

### 🎨 Design
* Figma (UI/UX Prototyping)

## 📂 Project Structure

DigiTicket/
│
├── client/              # Frontend (React + Vite)
│   ├── src/
│   └── package.json
│
├── server/              # Backend (Node.js + Express)
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── server.js
│
├── README.md
├── .env.example
└── demo-video.mp4


## 🎥 Demo Video
📌 Watch the working demo of DigiTicket:
👉https://github.com/pallavisowreddi/DigiTicket-Smart-Ticket-Booking-System/blob/main/demo-video.mp4

## 📸 Screenshots
https://github.com/pallavisowreddi/DigiTicket-Smart-Ticket-Booking-System/blob/main/digiticket_screenshots.png

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository

git clone https://github.com/your-username/DigiTicket.git
cd DigiTicket

### 2️⃣ Setup Backend

cd server
npm install
npm run dev

### 3️⃣ Setup Frontend

cd client
npm install
npm run dev

## 🔑 Environment Variables

Create a `.env` file inside the **server/** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## 🔗 API Endpoints

| Endpoint        | Description         |
| --------------- | ------------------- |
| `/api/auth`     | User Authentication |
| `/api/flights`  | Flight Data         |
| `/api/movies`   | Movie Data          |
| `/api/bookings` | Booking Management  |

---

## 🔄 Future Enhancements

* 💳 **Secure Payment Integration**
  Integrate payment gateways like Razorpay or Stripe for real-time transactions.

* 📱 **Mobile Responsive Design**
  Enhance UI for better experience on all devices.

* 🔔 **Real-Time Notifications**
  Email/SMS confirmations for bookings.

* 🧑‍💼 **Admin Dashboard**
  Manage users, bookings, flights, and movies.

* 🎟️ **E-Ticket Generation**
  Generate downloadable tickets with QR codes.

* 🌐 **Live Deployment**
  Host the application using platforms like Vercel and Render.

* 🤖 **AI-Based Recommendations (Advanced)**
  Suggest movies or flights based on user behavior.

## 👩‍💻 Author

**Pallavi Sowreddi**

## ⭐ Support

If you like this project:

⭐ Give it a star on GitHub
📢 Share it with others

## 📌 Note

This project is developed for educational and demonstration purposes to showcase full-stack development skills using modern technologies.
