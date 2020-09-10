import { storiesOf } from '@storybook/react';

import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

import AutoCompleteStory from './autocomplete';
import AccordionStory from './accordion';
import ButtonsStory from './buttons';
import ChipStory from './chip';
import CheckboxStory from './checkbox';
import ContentHighlightStory from './content-highlight';
import DropzoneStory from './dropzone';
// import AvatarStory from './avatar';
import FileUploaderStory from './file-uploader';
import FormsStory from './forms';
import IconsStory from './icons';
import GridStory from './grid';
import LinkStory from './link';
import NotificationStory from './notification';
import RadioStory from './radiobutton';
import StampStory from './stamp';
import SliderStory from './slider';
import SelectStory from './select';
import TableStory from './table';
import ResponsiveTableStory from './responsive-table';
import TextStory from './text';
import PaginationStory from './pagination';
import WizardStory from './wizard';
import BannersStory from './banners';

storiesOf('Accordion', AccordionStory);
storiesOf('AutoComplete', AutoCompleteStory);
storiesOf('Button', ButtonsStory);
storiesOf('Chip', ChipStory);
storiesOf('CheckBox', CheckboxStory);
storiesOf('ContentHighlight', ContentHighlightStory);
storiesOf('Grid', GridStory);
// storiesOf('Avatar', AvatarStory);
storiesOf('Icon', IconsStory);
storiesOf('Icon', TextStory);
storiesOf('Forms', FormsStory);
storiesOf('Table', TableStory);
storiesOf('ResponsiveTable', ResponsiveTableStory);
storiesOf('Slider', SliderStory);
storiesOf('Stamp', StampStory);
storiesOf('Link', LinkStory);
storiesOf('RadioButton', RadioStory);
storiesOf('Select', SelectStory);
storiesOf('Dropzone', DropzoneStory);
storiesOf('FileUploader', FileUploaderStory);
storiesOf('Notification', NotificationStory);
storiesOf('Pagination', PaginationStory);
storiesOf('Wizard', WizardStory);
storiesOf('Banners', BannersStory);
