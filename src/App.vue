<template>
  <div id="app">
    <div class="header">
      <router-link to="/" exact class="logo">
        <img src="~public/favicon/favicon-96x96.png" alt="logo">
        <h1>FUERST WIACEK – Modern, balanced craft beer from Berlin</h1>
      </router-link>
      <router-link to="/Home">FUERST WIACEK</router-link>
      <router-link to="/Brewery">Brewery</router-link>
      <router-link to="/Contact">Contact</router-link>
      <!-- <router-link to="/Beer">Beer</router-link> -->
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  line-height 2
  font-weight 300
  margin 0
  padding-top 20px
  color rgba(0, 0, 0, .7)
  overflow-y scroll

strong
  color #000
  font-weight 400

a
  color rgba(0, 0, 255, 1)
  text-decoration none

article
  max-width 800px

ul
  list-style none
  padding 0

h1
  color #000
  font-weight normal
  margin-bottom 0

h2
  color #000
  font-size 15px
  font-weight normal
  margin-bottom 0

  & + p
    margin-top 0

.header
  background-color rgba(255, 255, 255, 1)
  box-shadow 0 1px 2px rgba(0, 0, 0, .1)
  padding 15px 30px
  position fixed
  z-index 999
  top 0
  left 0
  right 0

  a
    color rgba(0, 0, 0, .7)
    transition color .15s ease
    display inline-block
    vertical-align middle
    letter-spacing .075em
    margin-right 1.8em

    &:hover
      color #000
    &.router-link-active
      color #000
      font-weight 400

.view
  padding 80px 30px 10px 105px

.logo

  h1
    text-indent -999em
    position absolute

  img
    display inline-block
    width 48px
    vertical-align middle

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 800px)
  .view
    padding 80px 105px

@media (max-width 600px)
  body
    font-size 14px

  .header
    padding 15px

    a
      margin-right 1em
      &:nth-child(2)
        display none
      &:nth-child(3)
        display inline

  .view
    padding 80px 15px 0 15px


</style>
