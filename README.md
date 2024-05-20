# Manage -  Educational Platform for Online Learning
Repository for "manage" which is a website where students can gain knowledge by going through a wide variety of courses available at manage. Instructors can join manage and add their respective courses for students to share their knowledge and explore the space of knowledge regarding everyday things and it was built for Distributed Systems (DS) module of the second semester of the third year in the BSc. in IT degree specialized in Software Engineering program at SLIIT.

<h2>DS Assignment - S2-SE-WE-45</h2>
<p>A full Backend and Frontend implementation of Manage which is a website where users can login as students or instructors. The students can view all the courses that are submitted by the instructors, they can enroll themselves to the course and for that they need to make the payment via Stripe. Once the payment is done, they will enrolled to the course after administrator approval. The instructors can create specific courses to share their knowledge among the students and they can also update and delete the courses accordingly. The users can also view their user profiles and manage them. 
<p>The architecture behind Manage is the Microservices architecture which is an architecture that is consisted of small services. All the requests between the client side and the server side is done through the API gateway. Our system has 4 specific microservices,
  <ul>
  <li>User Management System</li>
  <li>Course Management System</li>
  <li>Enrollment Management System</li>
  <li>Payment Management System</li>
</ul>
</p>

<p>System Demonstration Video Link : https://www.youtube.com/watch?v=irYGMlJKooo </p>

<h2>Contributors & Contribution</h2>
<ul>
  <li>Manula Gunatilleke - Enrollment Management Service and UI's</li>
  <li>Teshan Jayakody - Course Management Service and UI's</li>
  <li>Bihesha Dilshan - User Management Service and UI's</li>
  <li>Keshan Pathirana - Payment Management Service and UI's</li>
</ul>

<h2>Setup Instructions</h2>
<ul>
  <li>Clone the project, open the folder in the command prompt and give the command "code ."</li>
  <li>To Install all the Node Modules: npm install </li>
  <li>Specific Node Packages used : express, mongoose, bodyParser, cors, dotenv, jsonwebtoken, bcrypt, emailjs, nodemon, jest, bootstrap, react-toastify</li>
  <li>Since the Services are dockerized, build by: docker-compose up --build</li>
  <li>After the build is successful, access the specific port; localhost:3000</li>
</ul>

<h2>Technologies Used :</h2>
<ul>
  <li>MERN Stack: MongoDB, Express, React, Node</li>
  <li>CSS Frameworks: Tailwind CSS, Material UI</li>
  <li>API Testing: Postman</li>
  <li>IDE : Visual Studio Code</li>
  <li>Containerization: Docker</li>
  <li>Container Orchestration System : Kubernetes</li>
</ul>
