# 🍽️ EatFeast — Full-Stack Food Delivery Platform

A real-time, full-stack food delivery web application with **three distinct user roles** — Customer, Shop Owner, and Delivery Boy — featuring live order tracking, online payments, and an intuitive UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-010101?logo=socket.io&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

### 🔐 Authentication & Security

- Email/Password sign-up & sign-in with **bcrypt** hashed passwords
- **Google OAuth** sign-in via Firebase Authentication
- **Forgot Password** flow with OTP verification via email (Nodemailer)
- JWT-based session management with HTTP-only cookies

### 👤 Customer Panel

- Browse food items and shops **by city** (auto-detected via geolocation)
- Filter items by food categories — Snacks, Pizza, Burgers, South Indian, Chinese, and more
- **Search** for food items across all shops in your city
- Add items to cart with quantity management
- **Checkout** with interactive map (Leaflet) for delivery address selection
- Drag-to-pin or use current GPS location for delivery
- **Cash on Delivery (COD)** and **Razorpay online payment** support
- View order history and **live-track delivery** on a real-time map
- Rate food items (1–5 star ratings)

### 🏪 Shop Owner Panel

- Create and edit your restaurant/shop profile with image upload
- Add, edit, and delete food items with categories, pricing, and veg/non-veg tags
- Manage incoming orders — update status from _Pending → Preparing → Out for Delivery → Delivered_
- Auto-assign delivery boys based on **proximity** (GeoSpatial queries)
- View order history with delivery details

### 🛵 Delivery Boy Panel

- Receive **real-time delivery assignment broadcasts** via Socket.IO
- Accept or view pending assignments
- **Live GPS location sharing** — customers track delivery boy on a live map
- OTP-based delivery verification (OTP sent to customer's email, delivery boy verifies)
- Dashboard with **today's deliveries chart** (Recharts bar chart)

### ⚡ Real-Time Features

- **Socket.IO** for live order status updates, delivery assignment broadcasts, and location tracking
- Real-time delivery boy location updates rendered on **Leaflet maps**
- Instant notification when order status changes

---

## 🛠️ Tech Stack

| Layer                | Technology                                      |
| -------------------- | ----------------------------------------------- |
| **Frontend**         | React 19, Vite 7, TailwindCSS 4                 |
| **State Management** | Redux Toolkit                                   |
| **Routing**          | React Router DOM v7                             |
| **Backend**          | Node.js, Express 5                              |
| **Database**         | MongoDB Atlas (Mongoose ODM)                    |
| **Authentication**   | JWT, bcrypt, Firebase Auth (Google OAuth)       |
| **Real-Time**        | Socket.IO                                       |
| **Payments**         | Razorpay                                        |
| **File Uploads**     | Multer + Cloudinary                             |
| **Email**            | Nodemailer                                      |
| **Maps**             | Leaflet / React-Leaflet, OpenCage Geocoding API |
| **Charts**           | Recharts                                        |

---

## 📁 Project Structure

```
eatfeast/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   ├── auth.controllers.js    # Sign up, sign in, Google Auth, OTP, reset password
│   │   ├── item.controllers.js    # CRUD items, search, filter by city, ratings
│   │   ├── order.controllers.js   # Place order, Razorpay, delivery assignment, OTP verify
│   │   ├── shop.controllers.js    # Create/edit shop, get shops by city
│   │   └── user.controllers.js    # Get current user
│   ├── middlewares/
│   │   ├── isAuth.js              # JWT authentication middleware
│   │   └── multer.js              # File upload middleware
│   ├── models/
│   │   ├── deliveryAssignment.model.js
│   │   ├── item.model.js
│   │   ├── order.model.js
│   │   ├── shop.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── item.routes.js
│   │   ├── order.routes.js
│   │   ├── shop.routes.js
│   │   └── user.routes.js
│   ├── utils/
│   │   ├── cloudinary.js          # Cloudinary image upload helper
│   │   ├── mail.js                # Nodemailer OTP & delivery OTP emails
│   │   └── token.js               # JWT token generation
│   ├── socket.js                  # Socket.IO event handlers
│   ├── index.js                   # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/                # Food category images & illustrations
│   │   ├── components/
│   │   │   ├── Nav.jsx            # Navigation bar with search & cart
│   │   │   ├── UserDashboard.jsx  # Customer home — categories, shops, food cards
│   │   │   ├── OwnerDashboard.jsx # Shop owner home — manage shop & items
│   │   │   ├── DeliveryBoy.jsx    # Delivery boy dashboard — assignments & chart
│   │   │   ├── DeliveryBoyTracking.jsx  # Live map tracking component
│   │   │   ├── FoodCard.jsx       # Food item display card
│   │   │   ├── CategoryCard.jsx   # Category carousel card
│   │   │   ├── CartItemCard.jsx   # Cart item with quantity controls
│   │   │   ├── OwnerItemCard.jsx  # Owner's item management card
│   │   │   ├── OwnerOrderCard.jsx # Owner's order management card
│   │   │   └── UserOrderCard.jsx  # Customer's order history card
│   │   ├── hooks/
│   │   │   ├── useGetCurrentUser.jsx
│   │   │   ├── useGetCity.jsx         # Auto-detect city via geolocation
│   │   │   ├── useGetMyShop.jsx
│   │   │   ├── useGetShopByCity.jsx
│   │   │   ├── useGetItemsByCity.jsx
│   │   │   ├── useGetMyOrders.jsx
│   │   │   └── useUpdateLocation.jsx  # Live GPS updates for delivery boys
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Role-based dashboard routing
│   │   │   ├── SignUp.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── CreateEditShop.jsx
│   │   │   ├── AddItem.jsx
│   │   │   ├── EditItem.jsx
│   │   │   ├── Shop.jsx           # Individual shop page
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckOut.jsx       # Map-based checkout with payments
│   │   │   ├── OrderPlaced.jsx
│   │   │   ├── MyOrders.jsx
│   │   │   └── TrackOrderPage.jsx # Live delivery tracking
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── userSlice.js       # User, cart, orders, search state
│   │   │   ├── ownerSlice.js      # Shop owner state
│   │   │   └── mapSlice.js        # Map/location state
│   │   ├── category.js            # Food category definitions
│   │   ├── App.jsx                # Routes & Socket.IO setup
│   │   └── main.jsx               # React entry point
│   ├── firebase.js                # Firebase config for Google Auth
│   ├── vite.config.js
│   └── package.json
│
└── readme.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB Atlas** account (or local MongoDB instance)
- **Cloudinary** account for image uploads
- **Razorpay** account for payment processing
- **Firebase** project for Google OAuth

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/eatfeast.git
cd eatfeast
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL=your_email@gmail.com
PASS=your_email_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_GEOAPIKEY=your_opencage_geocoding_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the frontend dev server:

```bash
npm run dev
```

The app will be available at **`http://localhost:5173`**.

---

## 🗄️ API Endpoints

### Auth (`/api/auth`)

| Method | Endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| POST   | `/signup`         | Register a new user         |
| POST   | `/signin`         | Login with email & password |
| GET    | `/signout`        | Logout                      |
| POST   | `/send-otp`       | Send OTP for password reset |
| POST   | `/verify-otp`     | Verify OTP                  |
| POST   | `/reset-password` | Reset password              |
| POST   | `/google`         | Google OAuth sign-in        |

### Shop (`/api/shop`)

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| POST   | `/create-edit` | Create or update a shop  |
| GET    | `/my-shop`     | Get current owner's shop |
| GET    | `/city/:city`  | Get all shops in a city  |

### Item (`/api/item`)

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| POST   | `/add`            | Add a new food item           |
| PUT    | `/edit/:itemId`   | Edit a food item              |
| DELETE | `/delete/:itemId` | Delete a food item            |
| GET    | `/city/:city`     | Get items by city             |
| GET    | `/shop/:shopId`   | Get items by shop             |
| GET    | `/search-items`   | Search items by name/category |
| POST   | `/rating`         | Rate a food item              |

### Order (`/api/order`)

| Method | Endpoint                    | Description                          |
| ------ | --------------------------- | ------------------------------------ |
| POST   | `/place-order`              | Place a new order                    |
| POST   | `/verify-payment`           | Verify Razorpay payment              |
| GET    | `/my-orders`                | Get user's order history             |
| PUT    | `/update-status`            | Update order status (owner)          |
| GET    | `/assignments`              | Get delivery assignments             |
| POST   | `/accept-order`             | Accept a delivery assignment         |
| GET    | `/current-order`            | Get delivery boy's current order     |
| GET    | `/get-order-by-id/:orderId` | Get order details                    |
| POST   | `/send-delivery-otp`        | Send delivery verification OTP       |
| POST   | `/verify-delivery-otp`      | Verify delivery OTP & mark delivered |
| GET    | `/today-deliveries`         | Get today's delivery stats           |

---

## 📡 Socket.IO Events

| Event                    | Direction       | Description                            |
| ------------------------ | --------------- | -------------------------------------- |
| `identity`               | Client → Server | Register user's socket ID              |
| `updateLocation`         | Client → Server | Delivery boy sends GPS coordinates     |
| `updateDeliveryLocation` | Server → Client | Broadcast delivery boy's live location |
| `orderStatusUpdate`      | Server → Client | Notify order status changes            |
| `newAssignment`          | Server → Client | Broadcast new delivery assignment      |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">
  Made with ❤️ by <strong>EatFeast Team</strong>
</p>
