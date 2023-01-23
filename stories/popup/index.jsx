// import React from 'react';
// import PopupDocs from 'components/popup/DOCS.md';
// import README from 'components/popup/README.md';
// import { Row, Col, Text } from 'components';
// import { useTheme } from 'styled-components';
// import { decorator } from '../../utils/decorator';
// import { WrappedComponent } from '../helpers/wrapped';

// import DefaultPopup from './DefaultPopup';
// import LargePopup from './LargePopup';
// import SmallPopup from './SmallPopup';
// import CustomSizePopup from './CustomSizePopup';

// export default decorator('Popup', PopupDocs, README).add('Popup component', () => {
//   const theme = useTheme();
//   return (
//     <WrappedComponent>
//       <div style={{ marginBottom: '24px' }}>
//         <DefaultPopup />
//       </div>

//       <div style={{ marginBottom: '24px' }}>
//         <p>
//           <Text size={theme.typography.sizes.l} weight={theme.typography.weights.black}>
//             Optional Sizes
//           </Text>
//         </p>
//         <p style={{ marginBottom: '12px' }}>
//           <Text>
//             You can specify a large or small popup by using the `size` prop (size = &apos;sm&apos; | &apos;md&apos; |
//             &apos;lg&apos;).
//           </Text>
//         </p>
//         <Row>
//           <Col>
//             <LargePopup />
//           </Col>
//           <Col>
//             <SmallPopup />
//           </Col>
//         </Row>
//       </div>

//       <div style={{ marginBottom: '24px' }}>
//         <p>
//           <Text size={theme.typography.sizes.l} weight={theme.typography.weights.black}>
//             Sizing modals using custom CSS
//           </Text>
//         </p>
//         <p>
//           <Text>You can apply custom css to the popup dialog div using the &quot;dialogClassName&quot; prop.</Text>
//         </p>
//         <p style={{ marginBottom: '12px' }}>
//           <Text>Example is using a custom css class with width set to 90%.</Text>
//         </p>
//         <Row>
//           <Col>
//             <CustomSizePopup />
//           </Col>
//         </Row>
//       </div>
//     </WrappedComponent>
//   );
// });
