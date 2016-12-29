<template>
  <div class="home-view">

    <div>
      <img class="image" src="~public/images/a-quick-one.jpg" alt="logo">
    </div>

    <article>
      <h1>A Quick One While She’s Away</h1>
      <p>
        Massively hopped with 25 kg of <strong>Mosaic</strong> and <strong>Citra</strong>.
        <br />It’s very sessionable and super juicy. Our NEIPA.
      </p>
      <ul>
        <li>Style: NEIPA</li>
        <li>ABV: 5.5%</li>
        <li>Bitterness: Medium</li>
        <li>Brewed at Camba Bavaria</li>
      </ul>
    </article>

  </div>
</template>

<style lang="stylus" scoped>
  .home-view
    display flex
    max-width auto

    article
      padding 0 15px 0 30px

  .image
    margin-top -2em
    max-width 400px

  @media (max-width 800px)
    .home-view
      display block

      article
        padding 0

      .image
        max-width 100%

  @media (max-width 600px)
    .home-view
      padding 0

      article
        padding 0 15px

</style>
