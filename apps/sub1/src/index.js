window.mount = () => {
  console.log('sub1 mount');
  document.getElementById('app').innerHTML = 'Hello sub1';
}

window.unmount = () => {
  document.getElementById('app').innerHTML = '';
}

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}