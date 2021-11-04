<template>
  <div>
    <AlAuthBtn 
      :authBtnName="btnCardName"
      :classes="classesCardBtn"
    />
  </div>
</template>

<script>
import AlAuthBtn from '../AutentificationComponents/AlAuthBtn.vue'
export default {
  components: {
    AlAuthBtn,
  },

  data: () => ({
    btnCardName: 'Добавить карточку',

    classesCardBtn: [
      'w-auto',
      'h-full'
    ]

  })
}
</script>