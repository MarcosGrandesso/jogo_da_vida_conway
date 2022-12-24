<template>
  <button :class='{"box":true, "alive":state}' @click="changeState"></button>
</template>

<script>
export default{
  props:{
      row: "",
      col: "",
      state: 0
      
  },
  methods:{
      changeState(){
          this.$emit('update-life', [this.row, this.col, this.state])
          if (this.state == 1) {
              this.state = 0
          } else {
              this.state = 1
          }
      }
  }
}
</script>

<style>
.box{
  display: inline-block;
  border: 1px solid red;
  padding: 8px;
  color: white;
  background-color: red;
  margin: 2px;
}
.alive{
  color: blue;
  background-color: blue;
}
</style>