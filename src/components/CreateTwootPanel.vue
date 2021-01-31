<template>
    <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot" :class="{ '--exceeded': newTwootCharacterCount > 180}">
        <div class="form-group">
            <label for="newTwoot"><strong>NewTwoot</strong> ({{ newTwootCharacterCount}} / 180)</label>
            <textarea class="form-control" name="" id="newTwoot" rows="4" v-model="newTwootContent"/>
        </div>
        <div class="user-profile__create-twoot-type form-group">
            <label for="newTwootType"><strong>Type: </strong></label>
            <select class="form-select ml-3" name="" id="newTwootType" v-model="selectedTwootType">
                <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                    {{ option.name }}
                </option>
            </select>
        </div>
        <button class="btn btn-success">Twoot!</button>
    </form>
</template>

<script>
  export default {
    name: "CreateTwootPanel",
    data(){
      return {
        newTwootContent: '',
        selectedTwootType: 'instant',
        twootTypes: [
          { value: 'draft', name: 'Draft'},
          { value: 'instant', name: 'Instant Twoot'}
        ]
      }
    },
    computed: {
      newTwootCharacterCount() {
        return this.newTwootContent.length;
      }
    },

    methods: {
      createNewTwoot(){
        if(this.newTwootContent && this.selectedTwootType !== 'draft'){
          this.$emit('add-twoot', this.newTwootContent);
          this.newTwootContent = '';
        }
      }
    }
  }
</script>

<style scoped>

</style>