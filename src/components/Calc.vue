<template lang="pug">
#calc
  .gbs: .gbs--wrap
    img.gbs--preview(:src="previewGB", :alt="$store.state.gbs[currentGB].name")
    .gbs--select: .row
      .col.lg
        SelectBox
          span(slot="label") великое строение
          span(slot="value") {{ $store.state.gbs[currentGB].name }}
          ul(slot="menu_items")
            li(
              v-for="GreatBuilding in $store.state.gbs" 
              :class="GreatBuilding.key === currentGB ? 'active' : ''"
              :key="GreatBuilding.key" 
              @click="setGB(GreatBuilding.key)") {{ GreatBuilding.name }}
      .col.sm: .gbs--input.cnt
        label Уровень 
        input(type="number", :value="level" min='0' :max="$store.state.gbsLevels[currentGB].levels.length -1", @change="setLevel($event)")
    .gbs--funded
      .progress: div(:style="{ width: (totalFunded / priceGB.cost * 100).toFixed(2) + '%' }")
      .info
        .info--left
          img(src="../assets/inf_l.png", alt="")
          span {{level}}
        .info--center
          .total
            small стоимость уровня / нужно вложить
            span {{priceGB.cost}} / {{totalNeeded}}
        .info--right
          img(src="../assets/inf_r.png", alt="")
          span {{Number(level)+1}}
    .gbs--owner: .row
      .col.sm: .gbs--input
          label Владелец
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="owner" step="1" min="0" :max="priceGB.cost")
      .col.sm: .gbs--input
          label Остаток
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="remainFund" disabled)
      .col.sm: .gbs--input.cnt
        label Коеф.
        input(type="number", v-model="ratio" min='0' step="0.01")
    .gbs--infos
      h5 Необходимо для гаранта
      .row
        .col
          small #1 
          span {{garants[0]}}
        .col
          small #2 
          span {{garants[1]}}
        .col
          small #3
          span {{garants[2]}}
        .col
          small #4
          span {{garants[3]}}
        .col
          small #5
          span {{garants[4]}}

    .gbs--invest
      .row
        .position #1
        .recoil: .gbs--input
          label Откат
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" readonly v-model="priceGB.reward[0]")
        .invest: .gbs--input
          label Вложение
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="position_1.value")
        .wrap
        .status
          .status--toggle(:class="position_1.status ? 'on': 'off'" @click="position_1.status = !position_1.status"): span.toggler
        .guarantor
          svg(v-if="guaranteeStatus_1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2bc032" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"): path(d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")
          svg( v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c0392b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield-off")
            path(d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18")
            path(d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38")
            line(x1="1" y1="1" x2="23" y2="23")
      .row
        .position #2
        .recoil: .gbs--input
          label Откат
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" readonly v-model="priceGB.reward[1]")
        .invest: .gbs--input
          label Вложение
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="position_2.value")
        .wrap
        .status
          .status--toggle(:class="position_2.status ? 'on': 'off'", @click="position_2.status = !position_2.status"): span.toggler
        .guarantor
          svg(v-if="guaranteeStatus_2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2bc032" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"): path(d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")
          svg( v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c0392b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield-off")
            path(d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18")
            path(d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38")
            line(x1="1" y1="1" x2="23" y2="23")
      .row
        .position #3
        .recoil: .gbs--input
          label Откат
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" readonly v-model="priceGB.reward[2]")
        .invest: .gbs--input
          label Вложение
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="position_3.value")
        .wrap
        .status
          .status--toggle(:class="position_3.status ? 'on': 'off'", @click="position_3.status = !position_3.status"): span.toggler
        .guarantor
          svg(v-if="guaranteeStatus_3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2bc032" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"): path(d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")
          svg( v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c0392b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield-off")
            path(d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18")
            path(d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38")
            line(x1="1" y1="1" x2="23" y2="23")
      .row
        .position #4
        .recoil: .gbs--input
          label Откат
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" readonly v-model="priceGB.reward[3]")
        .invest: .gbs--input
          label Вложение
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="position_4.value")
        .wrap
        .status
          .status--toggle(:class="position_4.status ? 'on': 'off'", @click="position_4.status = !position_4.status"): span.toggler
        .guarantor
          svg(v-if="guaranteeStatus_4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2bc032" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"): path(d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")
          svg( v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c0392b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield-off")
            path(d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18")
            path(d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38")
            line(x1="1" y1="1" x2="23" y2="23")
      .row
        .position #5
        .recoil: .gbs--input
          label Откат
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" readonly v-model="priceGB.reward[4]")
        .invest: .gbs--input
          label Вложение
          img.label(src="../assets/so.png", alt="Forge Point")
          input(type="number" v-model="position_5.value")
        .wrap
        .status
          .status--toggle(:class="position_5.status ? 'on': 'off'", @click="position_5.status = !position_5.status"): span.toggler
        .guarantor
          svg(v-if="guaranteeStatus_5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2bc032" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"): path(d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")
          svg( v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c0392b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield-off")
            path(d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18")
            path(d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38")
            line(x1="1" y1="1" x2="23" y2="23")
    .gbs--copy Гильдия «ДРУЗЬЯ» Грейфентал, ждем тебя!
</template>

<script>
import SelectBox from './SelectBox.vue'

export default {
  name: 'App',
  data: function () {
    return {
      position_1: { value: 0, status: false },
      position_2: { value: 0, status: false },
      position_3: { value: 0, status: false },
      position_4: { value: 0, status: false },
      position_5: { value: 0, status: false },
      owner: 0,
      ratio: 1.9,
    }
  },
  components: { SelectBox },
  computed: {
    currentGB: function () {
      return this.$route.params.building
    },
    level: function () {
      return this.$route.params.level
    },
    totalFunded: function () {
      let fund = 0
      this.position_1.status ? (fund += Number(this.position_1.value)) : null
      this.position_2.status
        ? (fund = fund + Number(this.position_2.value))
        : (fund = fund)
      this.position_3.status
        ? (fund = fund + Number(this.position_3.value))
        : (fund = fund)
      this.position_4.status
        ? (fund = fund + Number(this.position_4.value))
        : (fund = fund)
      this.position_5.status
        ? (fund = fund + Number(this.position_5.value))
        : (fund = fund)
      return fund + Number(this.owner)
    },
    priceGB: function () {
      return this.$store.state.gbsLevels[this.currentGB].levels[this.level]
    },
    previewGB: function () {
      return `assets/gbs_images/${this.currentGB}.png`
    },
    guaranteeStatus_1: function () {
      if (this.position_1.status) {
        return this.priceGB.cost - this.totalFunded > this.position_1.value
          ? false
          : true
      }
      return this.priceGB.cost - this.totalFunded - this.position_1.value >
        this.position_1.value
        ? false
        : true
    },
    guaranteeStatus_2: function () {
      if (this.position_2.status) {
        return this.priceGB.cost - this.totalFunded > this.position_2.value
          ? false
          : true
      }
      return this.priceGB.cost - this.totalFunded - this.position_2.value >
        this.position_2.value
        ? false
        : true
    },
    guaranteeStatus_3: function () {
      if (this.position_3.status) {
        return this.priceGB.cost - this.totalFunded > this.position_3.value
          ? false
          : true
      }
      return this.priceGB.cost - this.totalFunded - this.position_3.value >
        this.position_3.value
        ? false
        : true
    },
    guaranteeStatus_4: function () {
      if (this.position_4.status) {
        return this.priceGB.cost - this.totalFunded > this.position_4.value
          ? false
          : true
      }
      return this.priceGB.cost - this.totalFunded - this.position_4.value >
        this.position_4.value
        ? false
        : true
    },
    guaranteeStatus_5: function () {
      if (this.position_5.status) {
        return this.priceGB.cost - this.totalFunded > this.position_5.value
          ? false
          : true
      }
      return this.priceGB.cost - this.totalFunded - this.position_5.value >
        this.position_5.value
        ? false
        : true
    },
    remainFund: function () {
      return this.priceGB.cost - this.totalFunded
    },
    totalNeeded: function () {
      return (
        this.priceGB.cost -
        this.position_1.value -
        this.position_2.value -
        this.position_3.value -
        this.position_4.value -
        this.position_5.value
      )
    },
    garants: function () {
      let places = [0, 0, 0, 0, 0]
      let place_1 = this.priceGB.cost - this.position_1.value * 2
      let place_2 =
        this.priceGB.cost - this.position_1.value - this.position_2.value * 2
      let place_3 =
        this.priceGB.cost -
        this.position_1.value -
        this.position_2.value -
        this.position_3.value * 2
      let place_4 =
        this.priceGB.cost -
        this.position_1.value -
        this.position_2.value -
        this.position_3.value -
        this.position_4.value * 2
      let place_5 =
        this.priceGB.cost -
        this.position_1.value -
        this.position_2.value -
        this.position_3.value -
        this.position_4.value -
        this.position_5.value * 2

      place_1 > 0 ? (places[0] = place_1) : (places[0] = 0)
      place_2 > 0 ? (places[1] = place_2) : (places[1] = 0)
      place_3 > 0 ? (places[2] = place_3) : (places[2] = 0)
      place_4 > 0 ? (places[3] = place_4) : (places[3] = 0)
      place_5 > 0 ? (places[4] = place_5) : (places[4] = 0)

      if (places[1] < places[0]) {
        places[1] = places[0]
      }
      if (places[2] < places[1]) {
        places[2] = places[1]
      }
      if (places[3] < places[2]) {
        places[3] = places[2]
      }
      if (places[4] < places[3]) {
        places[4] = places[3]
      }

      return places
    },
  },
  methods: {
    setLevel: function (e) {
      this.$router.push({ name: 'Home', params: { level: e.target.value } })
      document.title = `Вложение :: ${
        this.$store.state.gbs[this.currentGB].name
      } — ${this.$route.params.level}`
    },
    calcRatedValue: function (revard) {
      this.position_1 = {
        value: Math.round(revard[0] * this.ratio),
        status: false,
      }
      this.position_2 = {
        value: Math.round(revard[1] * this.ratio),
        status: false,
      }
      this.position_3 = {
        value: Math.round(revard[2] * this.ratio),
        status: false,
      }
      this.position_4 = {
        value: Math.round(revard[3] * this.ratio),
        status: false,
      }
      this.position_5 = {
        value: Math.round(revard[4] * this.ratio),
        status: false,
      }
    },
    setGB: function (key) {
      this.$router.push({ name: 'Home', params: { building: key } })
      this.owner = 0
      this.calcRatedValue(this.priceGB.reward)
      document.title = `Вложение :: ${
        this.$store.state.gbs[this.currentGB].name
      } — ${this.$route.params.level}`
    },
  },
  watch: {
    ratio: function (val) {
      this.calcRatedValue(this.priceGB.reward)
    },
    level: function (val) {
      this.calcRatedValue(this.priceGB.reward)
    },
    currentGB: function (val) {
      this.owner = 0
      this.calcRatedValue(this.priceGB.reward)
    },
  },
  mounted: function () {
    document.title = `Вложение :: ${
      this.$store.state.gbs[this.currentGB].name
    } — ${this.$route.params.level}`

    this.calcRatedValue(this.priceGB.reward)
  },
}
</script>
