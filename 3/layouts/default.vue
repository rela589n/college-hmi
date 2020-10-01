<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item mx-2">
            <nuxt-link to="/1">1 (sum)</nuxt-link>
          </li>
          <li class="nav-item mx-2">
            <nuxt-link to="/2">2 (binary)</nuxt-link>
          </li>
          <li class="nav-item mx-2">
            <nuxt-link to="/3">3 (slice)</nuxt-link>
          </li>
          <li class="nav-item mx-2">
            <nuxt-link to="/4">4 (substr)</nuxt-link>
          </li>
          <li class="nav-item mx-2">
            <nuxt-link to="/5">5 (count)</nuxt-link>
          </li>
          <li class="nav-item mx-2">
            <nuxt-link to="/6">6 (matrix)</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
