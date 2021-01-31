<template>
    <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot" :class="{ '--exceeded': newTwootCharacterCount > 180}">
        <div class="form-group">
            <label for="newTwoot"><strong>NewTwoot</strong> ({{ newTwootCharacterCount}} / 180)</label>
            <textarea class="form-control" name="" id="newTwoot" rows="4" v-model="state.newTwootContent"/>
        </div>
        <div class="user-profile__create-twoot-type form-group">
            <label for="newTwootType"><strong>Type: </strong></label>
            <select class="form-select ml-3" name="" id="newTwootType" v-model="state.selectedTwootType">
                <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">
                    {{ option.name }}
                </option>
            </select>
        </div>
        <button class="btn btn-sm btn-success">Twoot!</button>
    </form>
</template>

<script>
import { reactive, computed } from 'vue';

  export default {
    name: "CreateTwootPanel",
    setup(props, ctx){
      const state = reactive({
        newTwootContent: '',
        selectedTwootType: 'instant',
        twootTypes: [
          { value: 'draft', name: 'Draft'},
          { value: 'instant', name: 'Instant Twoot'}
        ]
      });

      const newTwootCharacterCount = computed(() => {
        return state.newTwootContent.length;
      });

      function createNewTwoot(){
        if(state.newTwootContent && state.selectedTwootType !== 'draft'){
          ctx.emit('add-twoot', state.newTwootContent);
          state.newTwootContent = '';
        }
      }

      return {
        state,
        newTwootCharacterCount,
        createNewTwoot
      }
    }
  }
</script>

<style scoped>

</style>