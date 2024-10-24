<template>
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card p-4 shadow-lg" style="max-width: 400px; width: 100%;">
        <div class="text-center mb-4">
          <h2 class="fw-bold">Login</h2>
          <p class="text-muted">Enter your credentials to access your account</p>
        </div>
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="email" class="form-label">Email address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="form-control" 
              placeholder="name@example.com" 
            
            />
            <small v-if="errohandler.email" class="text-danger">{{ this.errohandler.email }}</small>
          </div>
          <div class="form-group mb-4">
            <label for="password" class="form-label">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              class="form-control" 
              placeholder="••••••••" 
            />
            <small v-if="errohandler.password" class="text-danger">{{ this.errohandler.password }}</small>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <div class="text-center mt-4">
          <p class="small">Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        errohandler:{}

      };
    },
    methods: {
      login() {
        this.errohandler = {}



        if(!this.email){
            this.errohandler.email='email is required'
        }
        if(!this.password){
            this.errohandler.password='password is required'
        }
        // Call the authentication API to handle login
        const user = {
          email: this.email,
          password: this.password
        };
        console.log('Logging in user:', user);
        // You would replace the console.log with actual authentication logic here
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    /* background-color: #f8f9fa; */
    height: 88vh !important;
  }
  
  .card {
    border-radius: 10px;
  }
  .form-control {
  box-shadow: none !important;
  outline: none !important;
}

.form-control:focus {
  box-shadow: none !important;
  outline: none !important;
}
  
  button:focus {
    box-shadow: none !important;
    color: white !important;
  }
  
  button {
    background-color: #0066ff;
    border: none;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #0056d2;
  }
  
  a {
    color: #0066ff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  