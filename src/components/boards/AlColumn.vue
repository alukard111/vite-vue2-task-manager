<template>
  <div class="al-column">
    <div class="al-column__wrapper">
      <div class="al-column__input-box m-1">
        <span v-if="!inputBoxState" @click="inputBoxOnState()">
          {{ valueInput }}
        </span>
        <input 
          @blur="inputBoxOffState()"
          @keyup.enter="inputBoxOffState()"
          v-focus
          v-if="inputBoxState"
          v-model="valueInput"
          type="text"
          class="al-column__input"  
        >
      </div>
      <div class="al-column__add-card add-card m-1 h-full">
        <div v-if="addCardState" 
          class="add-card__item-one"
        > 
          <div class="add-card__textarea">
            <textarea 
              @blur="addCardOffState()"
              class="w-full p-2"
              name="Название задачи"
              id=""
              cols="30"
              rows="4"
              v-focus
              v-model="valueTextarea"
            >

            </textarea>
          </div>
          <div class="add-card__btns flex">
            <AlAuthBtn 
              :authBtnName="btnCardName"
              :classes="classesCardBtn"
              @click="addCardOffState()"
            />
            <span>
            X
            </span>
          </div>
        </div>
        <div class="add-card__item-two h-full flex flex-col" v-if="!addCardState">
          <span class="border h-full border-black p-2 whitespace-pre-wrap shadow-2xl" v-if="Boolean(valueTextarea)">
            {{ valueTextarea }}
          </span>
          <span @click="addCardOnState()">
            Добавить карточку
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlColumnsCard from "./AlColumnsCard.vue"
import AlAuthBtn from '../AutentificationComponents/AlAuthBtn.vue'

export default {
  components: {
    AlColumnsCard,
    AlAuthBtn,
  },

  data: () => ({
    valueInput: 'Название процесса',
    valueTextarea: '',
    inputBoxState: false,
    addCardState: false,

    btnCardName: 'Добавить карточку',

    classesCardBtn: [
      'w-auto',
      'h-full',
    ],

  }),

  directives: {
    focus: {
      // определение директивы
      inserted: function (el) {
        el.focus()
      }
    },
  },


  methods: {
    inputBoxOnState() {
      this.inputBoxState = true
    },
    inputBoxOffState() {
      this.inputBoxState = false
    },
    
    addCardOnState() {
      this.addCardState = true
    },
    addCardOffState() {
      this.addCardState = false
    }
    
  },
}

</script>

<style lang="postcss" scoped>

.al-column {
  @apply
    w-80
  ;
}
.al-column__input {
  @apply
    w-full
    h-8
    border
    border-2
    border-gray-400
    focus:border-blue-400

    outline-none

    transition
    ease-in-out
    duration-300
  ;
}
.al-column__wrapper {
  @apply
    p-2
    
    h-full
    border
    border-black
    rounded-lg
    
    border-opacity-30
  ;
}

</style>