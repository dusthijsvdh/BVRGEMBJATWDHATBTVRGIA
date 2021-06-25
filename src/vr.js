AFRAME.registerComponent('change-color-on-hover', {
  schema: {
    color: {default: 'red'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;  // <a-box>
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', data.color);
    });

    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', defaultColor);
    });
  }
});

AFRAME.registerComponent('navigate', {
  schema: {
    url: {default: ''}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener('mouseenter', function () {
      console.log('navigate to:', data.url);
    });

    el.addEventListener('mouseleave', function () {
      console.log('aaaaaaaa');
    });
  }
});