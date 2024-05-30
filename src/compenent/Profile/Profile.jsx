/* Profile.css */
.app {
  display: flex;
  font-family: 'Arial', sans-serif;
  background: #eef2f5;
  min-height: 100vh;
  margin: 0;
}

.menu {
  background-color: #2c3e50;
  padding: 20px;
  width: 250px;
  height: 100vh;
  box-sizing: border-box;
}

.menu a {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 15px;
  font-size: 18px;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #1abc9c;
}

.profile-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
}

.profile-info,
.profile-form,
.password-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  margin-top: 100px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-info:hover,
.profile-form:hover,
.password-form:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}

.profile-info h2,
.profile-form h2,
.password-form h2 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
}

.profile-info p {
  font-size: 16px;
  margin-bottom: 10px;
  color: #34495e;
}

.profile-info p strong {
  color: #2c3e50;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.form-group input,
.form-group select {
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  padding: 12px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #1abc9c;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button[type='submit'] {
  background-color: #1abc9c;
  color: white;
}

button[type='button'] {
  background-color: #e74c3c;
  color: white;
  margin-left: 10px;
}

button:hover {
  transform: translateY(-2px);
}

button[type='submit']:hover {
  background-color: #16a085;
}

button[type='button']:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .menu {
    width: 200px;
  }

  .profile-content {
    padding: 20px;
  }

  .form-actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  button[type='button'] {
    margin-left: 0;
  }

  .profile-info,
  .profile-form,
  .password-form {
    padding: 20px;
    margin-top: -500px;
  }

  .profile-info p strong {
    display: block;
    width: 100%;
  }
}
