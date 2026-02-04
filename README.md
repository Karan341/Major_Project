
# 🌍 Wanderlust

### Full-Stack Accommodation Listing Web Application

**Wanderlust** is a full-stack web application inspired by platforms like Airbnb. It allows users to create, explore, and manage accommodation listings, post reviews, and securely manage user accounts.

The application is built using **Node.js, Express.js, MongoDB**, and follows the **MVC (Model-View-Controller)** architecture to ensure a clean, scalable, and maintainable codebase.

---

## 🌐 Live Project

🔗 **Live URL:**
[https://major-project-0rmj.onrender.com/](https://major-project-0rmj.onrender.com/)

⚠️ *Note:* The project is hosted on a free deployment service, so the first load may take a few seconds.

---

## 📌 Project Overview

* **Project Name:** Wanderlust
* **Type:** Full-Stack Web Application
* **Purpose:**
  To implement real-world full-stack development concepts such as:

  * Authentication & Authorization
  * CRUD operations
  * Image uploads
  * Session management
  * Server-side validation

---

## ✨ Key Features

### 🔐 Authentication & Authorization

* Secure signup, login, and logout using **Passport.js**
* Password hashing and salting for enhanced security
* Authorization checks to ensure only listing owners can edit or delete their listings

### 🏠 Listings Management

* View all listings on the homepage
* Create new listings with title, description, price, location, and images
* Edit and delete listings (owner-only access)
* Search and filter listings

### ⭐ Reviews System

* Users can add reviews to listings
* Review deletion restricted to review authors only
* One-to-many relationship between listings and reviews

### 🖼️ Image Uploads

* Image uploads handled using **Multer**
* Images stored securely on **Cloudinary**

### ⚠️ Error Handling & Flash Messages

* Flash messages for success and error feedback
* Custom middleware for handling invalid routes and server errors

### 📱 Responsive Design

* Mobile-friendly UI using CSS and JavaScript
* Clean and user-friendly interface

### ✅ Data Validation

* Server-side form validation using **Joi**
* Prevents invalid or malicious data submission

---

## 🛠️ Technology Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* passport-local
* passport-local-mongoose

### Frontend

* EJS (Templating Engine)
* HTML, CSS, JavaScript

### Tools & Libraries

* Cloudinary – Image storage
* Multer – File uploads
* connect-mongo – Session storage
* connect-flash – Flash messages
* Joi – Validation
* method-override – PUT & DELETE support
* dotenv – Environment variables

---

## 🧱 Project Architecture

The application follows the **MVC (Model-View-Controller)** architecture:

```
wanderlust/
├── app.js              # Main application file
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── middleware/         # Custom middleware
├── utils/              # Helper utilities
├── views/              # EJS templates
├── public/             # Static assets
└── init/               # Database initialization
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd wanderlust
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
ATLASDB_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=

SECRET=your_session_secret
```

### 4️⃣ (Optional) Initialize Sample Data

```bash
node init/index.js
```

### 5️⃣ Start the Application

```bash
node app.js
```

Server will start at:

```
http://localhost:8080
```

---

## 🔌 API Routes

### Listings

* `GET /listings` – View all listings
* `POST /listings` – Create new listing
* `GET /listings/:id` – View single listing
* `PUT /listings/:id` – Update listing
* `DELETE /listings/:id` – Delete listing

### Reviews

* `POST /listings/:id/reviews` – Add review
* `DELETE /listings/:id/reviews/:reviewId` – Delete review

### Users

* `GET /signup` – Signup page
* `POST /signup` – Register user
* `GET /login` – Login page
* `POST /login` – Authenticate user
* `GET /logout` – Logout user

---

## 🧪 Testing

The project has been manually tested for:

* Authentication and authorization flows
* CRUD operations for listings and reviews
* Error handling for invalid routes

---

## 🚀 Future Improvements

* Pagination for listings
* User profile pages
* Advanced filtering options
* UI/UX enhancements

---

## 👤 Author

**Karan**

* GitHub: [https://github.com/Karan341](https://github.com/Karan341)
* LinkedIn: [https://www.linkedin.com/in/karan-9889472a8/](https://www.linkedin.com/in/karan-9889472a8/)

---

## 🙏 Acknowledgements

* Inspired by platforms like Airbnb & Wanderlust
* Built as part of a full-stack learning journey

