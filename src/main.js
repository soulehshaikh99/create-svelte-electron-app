import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appName: 'Electron-Svelte'
	}
});

export default app;