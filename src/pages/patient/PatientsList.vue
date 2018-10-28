<template>
  <div>
    <Header :tittle="tittle"></Header>
    <ListBody></ListBody>
  </div>
</template>

<script>
import Header from './components/Header'
import ListBody from './components/ListBody'
export default {
  name: 'PatientsList',
  components: {
    Header,
    ListBody
  },
  data () {
    return {
      tittle: '家庭成员管理'
    }
  }
}
</script>

<style scoped>

</style>
