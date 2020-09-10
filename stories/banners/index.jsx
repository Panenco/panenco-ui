import React from 'react';

// import PaginationReadme from 'components/pagination/README.md';

import {
  CookiesBanner,
  UnsupportedBanner,
  // AndroidInstall,
  // IosInstall,
  // NewVersion,
} from 'components';

import { BrowserRouter } from 'react-router-dom';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

import { Lipsum } from './lipsum';

const cookiesList = [
  {
    cookieId: 'cookie1',
    cookieTitle: 'Identification',
    cookieDescription: 'This type of cookies is used for identification of current user in system',
  },
  {
    cookieId: 'cookie2',
    cookieTitle: 'Marketing',
    cookieDescription: 'This type of cookies is used for making cool offers and deals to user.',
  },
];

export default decorator('Banners', '', '')
  .add('Cookies', () => {
    return (
      <WrappedComponent>
        <BrowserRouter>
          <Lipsum />
          <CookiesBanner
            cookiesList={cookiesList}
            onSave={(data) => {
              alert(JSON.stringify(data));
            }}
            portalContainer={document.getElementById('portal')}
          />
        </BrowserRouter>
      </WrappedComponent>
    );
  })
  .add('Unsupported', () => {
    return (
      <WrappedComponent>
        <Lipsum />
        <UnsupportedBanner
          onIgnore={() => {
            alert('You ignored message');
          }}
          portalContainer={document.getElementById('portal')}
        />
      </WrappedComponent>
    );
  });
// .add('Android Install', () => {
//   return (
//     <WrappedComponent>
//       <Lipsum />
//       <AndroidInstall
//         onInstall={() => {
//           alert('Installing app');
//         }}
//         iconSrc="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
//         portalContainer={document.getElementById('portal')}
//       />
//     </WrappedComponent>
//   );
// })
// .add('iOS Install', () => {
//   return (
//     <WrappedComponent>
//       <IosInstall
//         iconSrc="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
//         portalContainer={document.getElementById('portal')}
//       />
//     </WrappedComponent>
//   );
// })
// .add('New Version', () => {
//   return (
//     <WrappedComponent>
//       <NewVersion
//         onUpdate={() => {
//           alert('Updating app');
//         }}
//         onCanel={() => {
//           alert('You ignored an update');
//         }}
//         portalContainer={document.getElementById('portal')}
//       />
//     </WrappedComponent>
//   );
// });
