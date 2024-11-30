const App = {
	data()
	{
		return {
			counter: 0,
			title: 'Счетчик'
		};
	},
	methods:
	{
		increaseCounter()
		{
			this.counter++;
		},
		dicreaseCounter()
		{
			this.counter--;
		},
	}
};

Vue.createApp(App).mount('#app');
