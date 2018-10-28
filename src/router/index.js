import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import PatientsList from '../pages/patient/PatientsList'
import AddPatient from '../pages/patient/AddPatient'
import EditPatient from '../pages/patient/EditPatient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/patient',
      name: 'PatientsList',
      component: PatientsList
    },
    {
      path: '/patient/addpatient',
      name: 'AddPatient',
      component: AddPatient
    },
    {
      path: '/patient/editpatient/:id',
      name: 'EditPatient',
      component: EditPatient
    }
  ]
})
