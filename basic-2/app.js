const App = {
	data()
	{
		return {
			title: 'Список дел',
			customPlaceholder: 'Введите текст задачи',
			inputValue: '',
			notes: [],
		};
	},
	computed:
	{
		// computed всегда должен что-то возвращать
		// computed - getter, неизменяемое свойство
		completedNotes()
		{
			return this.notes.filter(note => note.isCompleted);
		},
	},
	methods:
	{
		addNote()
		{
			// не создавать пустую заметку
			if (!this.inputValue.trim())
				return;

			this.notes.push({ text: this.inputValue, isCompleted: false, });
			this.inputValue = '';
		},
		deleteNote(index)
		{
			this.notes.splice(index, 1);
		},
		completeNote(index)
		{
			this.notes[index].isCompleted = true;
		},
		// legacy методы
		// используем вместо метода v-model
		changeInputValue(event)
		{
			console.log(event.target.value);
			this.inputValue = event.target.value;
		},
		// во vue при событии keypress можно сразу указывать key, отдельный метод не нужен
		keyHandler(event)
		{
			if (event.key === 'Enter')
				this.addNote();
		},
	}
};

Vue.createApp(App).mount('#app');
