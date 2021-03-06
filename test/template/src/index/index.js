
import _ from 'lodash';
import common from '@/static/js/inline';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack', '你gg好gfffgddd年'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';

  console.log(common());
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

// 注册 Service Worker
if (process.env.WORKBOX && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-wroker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
