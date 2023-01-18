// import React from 'react';

// import TextReadme from 'components/text/README.md';
// import TextDocs from 'components/text/DOCS.md';

// import { Text, Row, Col } from 'components';

// import { sizes, colors } from 'styles';
// import { decorator } from '../../utils/decorator';
// import { WrappedComponent } from '../helpers/wrapped';

// // eslint-disable-next-line
// const WrappedCol = ({ children }) => (
//   <Col xs='1' sm='2' lg='4' style={{ display: 'flex', justifyContent: 'center' }}>
//     {children}
//   </Col>
// );

// // eslint-disable-next-line
// const Child = () => {
//   return (
//     <>
//       <Row>
//         <WrappedCol>
//           <Text size={sizes.l} color={colors.base900}>
//             Name
//           </Text>
//         </WrappedCol>
//         <WrappedCol>
//           <Text size={sizes.l} color={colors.base900}>
//             Text Size
//           </Text>
//         </WrappedCol>
//         <WrappedCol>
//           <Text size={sizes.l} color={colors.base900}>
//             Line Height
//           </Text>
//         </WrappedCol>
//       </Row>
//       {Object.keys(sizes)
//         .reverse()
//         .map((el) => (
//           <Row key={el}>
//             <WrappedCol>
//               <Text size={sizes[el]} color={colors.base900}>
//                 {el}
//               </Text>
//             </WrappedCol>
//             <WrappedCol>
//               <Text size={sizes[el]} color={colors.base900}>
//                 {sizes[el].textSize}
//               </Text>
//             </WrappedCol>
//             <WrappedCol>
//               <Text size={sizes[el]} color={colors.base900}>
//                 {sizes[el].lineHeight}
//               </Text>
//             </WrappedCol>
//           </Row>
//         ))}
//     </>
//   );
// };

// export default decorator('Text', TextDocs, TextReadme).add('Text component', () => {
//   return (
//     <WrappedComponent>
//       <Child />
//     </WrappedComponent>
//   );
// });
