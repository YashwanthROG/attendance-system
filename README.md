# HAL Internship Students Attendance and Project Record System

A web-based offline application designed to efficiently manage internship student attendance and project tracking. The system uses browser-based storage (IndexedDB) for secure, real-time record keeping without relying on an internet connection.

---

##  Overview

This system allows HAL internship administrators to digitally manage intern attendance and project details, replacing traditional manual processes with a streamlined and user-friendly web interface. It is built using **HTML, CSS, and JavaScript** and works **entirely offline**.

---

##  Objectives

- Efficiently manage and record internship student attendance.
- Track intern project details accurately.
- Improve accessibility and data management.
- Replace paperwork and manual entries with a digital solution.
- Provide an intuitive and error-free interface for administrators and students.

---

##  Features

### Functional Requirements

- **User Management**:  
  - Admin can manage student details.  
  - Students can register by providing personal and project-related information.

- **Attendance Management**:  
  - Admin can mark daily attendance.  
  - View past attendance records.

- **Project Tracking**:  
  - Stores each intern's project title for reference.

- **Data Storage**:  
  - Uses **IndexedDB** for secure local data storage (no server required).

---

###  Non-functional Requirements

- **Performance**: Real-time updates for attendance.
- **Security**: Data like name, mobile number, college, and project title are stored securely in the browser.
- **Reliability**: Data persists locally as long as the browser cache isn't cleared.
- **Usability**: Simple Admin Dashboard and easy-to-use interface for students and admins.

---

##  Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | HTML, CSS, JavaScript  |
| Database    | IndexedDB (Browser DB) |
| Hosting     | Runs locally (Offline) |

---

##  Scope of the Project

###  Admin Module
- Login to admin dashboard
- Record daily attendance
- Manage student records
- View historical attendance

###  User Module (Students)
- Register by entering personal details
- Submit project title and academic information

---

##  How to Run the Project

1. Download or clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hal-attendance-system.git
