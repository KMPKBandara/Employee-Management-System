# 💼 Employee-Management-System

A **Full-Stack Employee Management System (EMS)** built with **Spring Boot 3** and **React JS**.  
This project is a complete **CRUD** application allowing users to **Add**, **Update**, **View**, **Delete**, and **Search** employees. It also displays the total number of employees and provides a fully responsive UI.

## 📌 Features

- ✅ Add New Employee
- ✅ Update Existing Employee Details
- ✅ Delete Employee
- ✅ View All Employees
- ✅ Search Employees by Name
- ✅ Display Total Employee Count
- ✅ Responsive Design for All Devices

## 🧰 Technologies Used

### 🔙 Backend

- Java
- Spring Boot 3
- Spring Data JPA
- MySQL (via XAMPP)

### 🔜 Frontend

- React JS
- Bootstrap 5
- Axios

### 🧪 Tools

- Visual Studio Code (Frontend)
- IntelliJ IDEA (Backend)
- Postman (API Testing)
- XAMPP (MySQL Server)

## 🗂️ Project Structure

EMS/
├── ems-backend/ # Spring Boot Backend
│ ├── controller/
│ ├── model/
│ ├── repository/
│ ├── service/
│ └── application.properties
├── ems-frontend/ # React Frontend
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js

## ⚙️ Installation & Setup

### 🔧 Backend Setup

1. Open the `backend` folder in **IntelliJ IDEA**
2. Create a MySQL database named `ems` using XAMPP
3. Configure the database credentials in `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
Run the Spring Boot application

### 💻 Frontend Setup
Open the frontend folder in Visual Studio Code

Install required dependencies:
npm install

Start the React development server:
npm start

⚠️ Make sure the backend is running at http://localhost:8080 before starting the frontend.

🖼️ Screenshots
🏠 Home Page
(Add Screenshot Here)

👥 All Employees Page
(Add Screenshot Here)

➕ Add Employee Page
(Add Screenshot Here)

👨‍💻 Author
Name: Pramuditha Bandara

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourusername
```
