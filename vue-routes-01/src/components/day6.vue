<template>
  <div class="container col-md-5 py-5">
  	<h1 class="h3 text-center">{{ name }}</h1>

  	<form class="form-inline">
	  <label for="inputPassword">Username</label>
	    <input type="text" class="form-control" placeholder="Your Username" v-model.trim="name">
	  <small class="text-muted">Must be 8 characters</small>
	</form>

  	<form class="form-inline">
	  <label for="inputPassword">Email</label>
	    <input type="email" class="form-control" placeholder="Your Email" v-model.trim="email">

	<form class="form-inline">
	  <label for="inputPassword">Password</label>
	    <input type="password" class="form-control" placeholder="Your Password" v-model="password">
		<small class="text-muted">Must be 8-10 characters</small>
	</form>

	<form class="form-inline">
	  <label for="inputPassword">Confirm Password</label>
	    <input type="password" class="form-control" placeholder="Confirm Password" v-model="passconfirm">
	</form>

	<button type="submit" class="btn btn-primary" @click.prevent="register">Submit</button>

  <div class="error-message" v-if="hasErrors">
    <p class="text-danger" v-for="error in errors">{{ error }}</p>
  </div>
  <div class="no-error" v-else="hasNone">
    <p class="text-success">{{ hasNone }}</p>
  </div>

  </div>
</template>

<script>

export default({
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passconfirm: '',
      errors: [],
      hasNone: 'you filled in everything right!'
    }
  },
  computed: {
    hasErrors () {
      return this.errors.length > 0
    }
  },
  methods: {
    register () {
      console.log('register')
      this.errors = []
      if (this.isFormValid()) {
        console.log('something')
      }
    },
    isEmpty () {
      if (this.name.length === 0 || this.email.length === 0 || this.password.length === 0 || this.passconfirm.length === 0) {
        return true
      }
      return false
    },
    passwordValid () {
      if (this.password.length < 6 || this.passconfirm.length < 6) {
        return false
      }
      if (this.password !== this.passconfirm) {
        return false
      }
      return true
    },
    isFormValid () {
      if (this.isEmpty()) {
        this.errors.push('Fill in form completely')
        return false
      }
      if (!this.passwordValid()) {
        this.errors.push('Your password is invalid')
        return false
      }
      return true
    }
  }
})

</script>


<style>

.container {
  background-color: lightgray;
}

</style>
