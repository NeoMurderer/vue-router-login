<template>
  <div>
    <h1>Login form</h1>
      <form action="login" method="POST">
        <input type="email" name="email" placeholder="E-mail"><br/>
        <input type="password" name="password">
        <input type="button" value="Login">
      </form>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style scoped>

</style>


