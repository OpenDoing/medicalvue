<template>
    <div>
      <Header :tittle="tittle"></Header>
    </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'AddPatient',
  components: {
    Header
  },
  data () {
    return {
      tittle: '添加家庭成员'
    }
  }
}
</script>

<style scoped>

</style>
