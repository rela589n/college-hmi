<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-bind:class="{active: currentPage.is( 'all-tracks-list')}">
          <a class="nav-link" @click="$emit('select-page', 'all-tracks-list')" href="#">All tracks <span
              v-if="currentPage.is( 'all-tracks-list')" class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" v-bind:class="{active: currentPage.is( 'all-playlists-list')}">
          <a class="nav-link" @click="$emit('select-page', 'all-playlists-list')" href="#">Playlists <span
              v-if="currentPage.is( 'all-playlists-list')" class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" v-bind:class="{active: currentPage.is( 'authors-list')}">
          <a class="nav-link" @click="$emit('select-page', 'authors-list')" href="#">Authors <span
              v-if="currentPage.is( 'authors-list')" class="sr-only">(current)</span></a>
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

</style>