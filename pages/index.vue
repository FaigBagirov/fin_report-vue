<template>
  <div class="main-wrapper">
    <div class="heading">
      <Welcome :count-of-transactions="countofTransactions" />
    </div>
    <!-- Here I create cards and fill them with data in a for loop to make it scalable and to show that I know this method -->
    <div class="report-cards">
      <Report-card
        v-for="(operType, index) in operationTypes"
        :key="index"
        :operation-type="opNameBeautify(operType)"
        :count-of-operations="numOfOps(operType)"
        :tab-no="index"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    // Modal //2a)add a component: register the component
  },
  data () {
    return {
      countOfTransactions: 0,
      operationTypes: ['income', 'investment', 'outcome', 'loan']
    }
  },
  computed: mapGetters([
    'total',
    'numOfOps',
    'countofTransactions'
  ]),
  methods: {
    // someone may think that it's not good to beautify the text this way
    // but the reason is that in future the list of operation types may/should be dynamic,
    // so I have to make it automated
    opNameBeautify (opType) {
      if (opType.slice(-1) !== 's') {
        opType += 's'
      }
      return opType.charAt(0).toUpperCase() + opType.slice(1)
    }
    // I couldn't thinks of a better method than just counting all occurences in the JSON file
    // getNumOfOps (operationType) {
    //   let opsCount = 0
    //   this.reportsData.data.forEach((operation) => {
    //     if (operation.type === operationType) {
    //       opsCount++
    //     }
    //   })
    //   return opsCount
    // },

  }

}
</script>

<style >
  .main-wrapper{
      margin: 0 auto;
      min-width: 500px;
      width:50%;
  }

  .report-cards{
      margin-top: 10px;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 10px;
  }
</style>
