import { Col, Dropzone, Row, Text, Icon } from 'components';
import DropzoneDOCS from 'components/dropzone/DOCS.md';
import DropzoneREADME from 'components/dropzone/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export const DropzoneChild = ({ error, isDragActive, isLoading, content, icon }) => {
  return (
    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
      <Icon size={20} icon={icon} />
      <Text component='p'>{content}</Text>
      {!error && !isDragActive && !isLoading && (
        <Text component='p' size='s'>
          Only mp4 format and max size 100Mb
        </Text>
      )}
    </div>
  );
};

export default decorator('Dropzone', DropzoneDOCS, DropzoneREADME).add('Dropzone component', () => {
  const [showErrMsgInCustomDropzone, setShowErrMsg] = React.useState(false);
  const dropzoneMapper = {
    error: {
      text: 'Error msg',
      icon: Icon.icons.close,
    },
    default: {
      text: 'Custom dropzone',
      icon: Icon.icons.upload,
    },
    onDrag: {
      text: 'Drop your file here',
      icon: Icon.icons.fileMinus,
    },
  };

  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around', marginBottom: '20px' }}>
        <Col xs='2' sm='4' lg='4'>
          <Dropzone
            options={{
              onDrop: (files, rejectedFiles) => {
                if (rejectedFiles.length > 0) {
                  setShowErrMsg(true);
                } else {
                  setShowErrMsg(false);
                }

                files.forEach(async (file) => {
                  const reader = new FileReader();

                  reader.onloadend = function () {
                    const arrayBufferView = new Uint8Array(reader.result);
                    // you can send blob if needed to server in a blob format
                    const blob = new Blob([arrayBufferView], { type: 'video/mp4' });
                    // or you can use videoUrl for show video material if needed
                    const videoUrl = URL.createObjectURL(blob);
                    console.log('CHECK the console', videoUrl);
                  };

                  reader.onerror = () => {
                    console.log('error');
                  };

                  reader.readAsArrayBuffer(file);
                });
              },
              accept: 'video/mp4',
              maxSize: 100 * 1048576,
              multiple: false,
            }}
            mode='custom'
            wrapperProps={{ style: { minHeight: '200px' } }}
          >
            {(props) => {
              const info =
                // eslint-disable-next-line no-nested-ternary
                showErrMsgInCustomDropzone && !props.isDragActive
                  ? dropzoneMapper.error
                  : props.isDragActive
                  ? dropzoneMapper.onDrag
                  : dropzoneMapper.default;

              return (
                <DropzoneChild
                  isLoading={false}
                  error={showErrMsgInCustomDropzone && dropzoneMapper.error.text}
                  isDragActive={props.isDragActive}
                  content={info.text}
                  icon={info.icon}
                />
              );
            }}
          </Dropzone>
        </Col>
        <Col xs='2' sm='4' lg='4'>
          <Dropzone loading />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col xs='2' sm='4' lg='4'>
          <Dropzone>
            <Text style={{ marginTop: '25px' }}>
              This is some additional content. It may contain pictures, lists, QR-codes or whatever you want.
            </Text>
          </Dropzone>
        </Col>
        <Col xs='2' sm='4' lg='4'>
          <Dropzone error='Wrong format! Please upload a new file following the correct format.' />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
