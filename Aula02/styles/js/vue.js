Vue.component('todo-item', {
	template: '\
	  <li>\
		{{ title }}\
		<button class="btn btn-lg btn-danger btn-block" v-on:click="$emit(\'remove\')">Remove</button>\
		</li>\
	',
	props: ['title']
  })
  
  new Vue({
	el: '#todo-list-example',
	data: {
	  newTodoText: '',
	  todos: [
		{
		  id: 1,
		  title: 'Teste o Botão de Remover',
		}
	  ],
	  nextTodoId: 4
	},
	methods: {
	  addNewTodo: function () {
		this.todos.push({
		  id: this.nextTodoId++,
		  title: this.newTodoText
		})
		this.newTodoText = ''
	  }
	}
  })