Vue.createApp({
	data()
	{
		return {
			title: 'Что еще есть во Vue',
			customPlaceholder: 'Введите текст задачи',
			notes: [],
		};
	},
	methods:
	{
		// работа с рефами
		addItem(event)
		{
			this.notes.unshift({ text: this.$refs.myInput.value, isCompleted: false, });
			this.$refs.myInput.value = '';
			console.log(event.key);
		},
		deleteNote(index)
		{
			this.notes.splice(index, 1);
		},
		completeNote(index)
		{
			this.notes[index].isCompleted = true;
		},
	}
}).mount('#app');
