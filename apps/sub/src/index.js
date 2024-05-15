window.mount = () => {
  console.log('sub mount');
  document.getElementById('app').innerHTML = 'Hello sub';
}

window.unmount = () => {
  document.getElementById('app').innerHTML = '';
}

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}