<template>
  <div class="report_card card card-body">
    <p class="count">
      {{ countOfOperations }}
    </p>
    <p class="name">
      {{ operationType }}
    </p>
    <!-- <button [routerLink]="['/navigator']" [queryParams]="{tab: tabNo}" class="seeall_btn btn btn-primary">See all</button> -->

    <nuxt-link :to="{ path: 'navigator', query: { tab: tabNo }}" tag="button" class="seeall_btn btn btn-primary">
      See all
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    operationType: {
      type: String,
      required: true
    },
    countOfOperations: {
      type: Number,
      required: true
    },
    tabNo: {
      type: Number,
      required: true
    }
  }
}
</script>

<style >
    .count{
        font-weight: bold;
        text-align: left;
    }
    .name{
        text-align: left;
    }
    .seeall_btn{
        margin-left: auto;
        margin-right: 10px;
        min-width: 100px;
        max-width: 200px;
        width: 10vw;
    }
</style>
