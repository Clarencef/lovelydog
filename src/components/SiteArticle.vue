<template>
  <section class="site-article layout-grid__cell--span-12">
    <img class="article-avatar" src="../assets/images/avatar.jpg" />
    <div class="article-content">
      <p>The old man wiped the tears away on his grimy knuckles and took up the tale in a tremulous, piping voice that soon strengthened as he got the swing of the narrative.he got the swing of the narrative.he got the swing of the narrative.</p>
      <p>After I ceased there was tense silence, as all eyes were riveted upon Tal Hajus. He did not speak or move, but the blotchy green of his countenance turned livid, and the froth froze upon his lips.he got the swing of the narrative.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'site-article'
}
</script>

<style lang="scss">
  .site-article {
    margin-top: 24px;
    --layout-grid-gutter: 0px;
    display: flex;
    justify-content: space-between;
    background: white;
    color:black;
    padding: 24px;
    .article-content {
      display: flex;
      flex-direction: column;
      padding-left: 24px;
      padding-right: 24px;
    }
    p {
      display: inline;
    }
  }
</style>
