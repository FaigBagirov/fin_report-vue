<template>
  <div class="card">
    <div class="card-header">
      <p class="trancacs" style="opacity: 0;">
        sorry for this method, but I liked this idea of mine so much
      </p>
    </div>
    <div class="card-body">
      <h1 class="welcome">
        Welcome
      </h1>
      <p class="welcome_desc">
        With supporting text below as a natural lead-in to additional content
      </p>
      <button type="button" class=" btn btn-primary">
        See Transactions
      </button>
    </div>
    <div class="card-footer">
      <p class="trancacs">
        You have {{ countOfTransactions }} transactions
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countOfTransactions: {
      type: Number,
      required: true
    }
  }

}
</script>

<style>
  .card-body, .card-footer{
      text-align: center;
  }
</style>