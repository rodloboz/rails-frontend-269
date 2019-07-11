import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["restaurants", "bars", "entertainment"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
