<template>
  <div>
    <h1>{{bigTitle}}</h1>
    <input type="text" class="item-input"  :placeholder=placeholder v-model="newItem" @keyup.enter="addItem()">

    <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div v-for="(item, index) in items" :key="item.id" class="item">
      <div class="item-left">
        <div v-if="!item.editing" @dblclick="editItem(item)" class="item-label" >{{ index+1 +","+item.title }}</div>
        <input v-else class="item-edit" type="text" v-model="item.title" @blur="doneEdit(item)" @keyup.enter="doneEdit(item)" @keyup.esc="cancelEdit(item)" v-focus>
      </div>
      <div class="remove-item" @click="removeItem(index)">
        &times;
      </div>
    </div>
    </transition-group>
    </div>
</template>

<script>
export default {
  name: 'items-list',
  props:['bigTitle','placeholder'],
  data () {
    return {
      newItem: '',
      idForItem: 1,
      beforeEditCache: '',
      items:[]
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    fetchData(){
      return this.items;
    },
    addItem() {
      if (this.newItem.trim().length == 0) {
        return
      }
      this.items.push({
        id: this.idForItem,
        title: this.newItem,
        editing: false,
      })
      this.newItem = ''
      this.idForItem++
    },
    editItem(item) {
      this.beforeEditCache = item.title
      item.editing = true
    },
    doneEdit(item) {
      if (item.title.trim() == '') {
        item.title = this.beforeEditCache
      }
      item.editing = false
    },
    cancelEdit(item) {
      item.title = this.beforeEditCache
      item.editing = false
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
  }
}
</script>

<style  >
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
  .item-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

  }
  .item-input:focus {
      outline: 0;
    }
  .item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
  }
  .remove-item {
    cursor: pointer;
    margin-left: 14px;
  
  }
  .remove-item:hover {
      color: black;
    }
  .item-left {
    display: flex;
    align-items: center;
  }
  .item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
  .item-edit {
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .item-edit:focus {
      outline: none;
    }
 
  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
 
  }
  button:focus {
      outline: none;
    }


  button:hover {
      background: lightgreen;
    }
  .active {
    background: lightgreen;
  }
 
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>