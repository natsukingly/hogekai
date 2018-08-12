<template>
  <header>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <ul class="nav navbar-nav">
          <li><router-link :to="'/'">HOME</router-link></li>
          <li><router-link :to="'/events'">EVENTS</router-link></li>
        </ul>
      </ul>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: pink;
  }
</style>
