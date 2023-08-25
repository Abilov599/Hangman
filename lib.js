// Custom selectors and event listeners
const $ = (...args) => document.querySelector.call(document, ...args);
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
};

// HTMLElement.prototype.on = function (eventType, callback) {
//   this.addEventListener(eventType, callback);
// }; 
