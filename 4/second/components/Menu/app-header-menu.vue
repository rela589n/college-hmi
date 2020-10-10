<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item menu-li">
          <NuxtLink to="/all-tracks-list">All tracks</NuxtLink>
        </li>
        <li class="nav-item menu-li">
          <NuxtLink to="/all-playlists-list">Playlists</NuxtLink>
        </li>
        <li class="nav-item menu-li">
          <NuxtLink to="/authors-list">Authors</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-header-menu",
  props: ['currentPage']
}
</script>

<style scoped>
.menu-li {
  margin-left: 3rem;
}
</style>
