<template>
    <div>
      <Header :tittle="tittle"></Header>
    </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'EditPatient',
  components: {
    Header
  },
  data () {
    return {
      tittle: '编辑家庭成员'
    }
  }
}
</script>

<style scoped>

</style>
