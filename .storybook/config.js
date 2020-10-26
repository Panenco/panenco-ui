import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    theme: {
      brandTitle: 'Panenco UI',
      brandUrl: '#',
    },
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,

    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,

    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,

    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'right',

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,

    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,

    /**
     * theme storybook, see link below
     */
    theme: undefined,

    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: undefined,
  },
});
// Option defaults:

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
