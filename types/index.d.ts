import { App } from 'vue';

import { VComponent } from './component';
import { Dialog } from './dialog';
import { Loading } from './loading';
import { Toast } from './toast';
import { Picker } from './picker';
import { Locale } from './locale';
import { Theme } from './theme';

export const version: string;

export function install(app: App): void;

declare class ActionSheet extends VComponent { }
declare class Avatar extends VComponent { }
declare class Badge extends VComponent { }
declare class BlankPage extends VComponent { }
declare class Button extends VComponent { }
declare class ButtonGroup extends VComponent { }
declare class Checkbox extends VComponent { }
declare class CheckboxGroup extends VComponent { }
declare class Col extends VComponent { }
declare class DatetimePicker extends VComponent { }
declare class Icon extends VComponent { }
declare class Input extends VComponent { }
declare class InputGroup extends VComponent { }
declare class InfiniteLoading extends VComponent { }
declare class Indexes extends VComponent { }
declare class List extends VComponent { }
declare class ListGroup extends VComponent { }
declare class NoticeBar extends VComponent { }
declare class NavBar extends VComponent { }
declare class Popup extends VComponent { }
declare class Progress extends VComponent { }
declare class Radio extends VComponent { }
declare class RadioGroup extends VComponent { }
declare class Row extends VComponent { }
declare class SearchBar extends VComponent { }
declare class Swiper extends VComponent { }
declare class SwiperItem extends VComponent { }
declare class Switch extends VComponent { }
declare class SlipDrawer extends VComponent { }
declare class SlipDrawerGroup extends VComponent { }
declare class Tooltips extends VComponent { }
declare class Tab extends VComponent { }
declare class TabPanel extends VComponent { }
declare class Tabbar extends VComponent { }
declare class TabbarItem extends VComponent { }
declare class Tag extends VComponent { }

export {
  ActionSheet,
  Avatar,
  Badge,
  BlankPage,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  DatetimePicker,
  Dialog,
  Icon,
  Input,
  InputGroup,
  InfiniteLoading,
  Indexes,
  List,
  ListGroup,
  Loading,
  Locale,
  NoticeBar,
  NavBar,
  Picker,
  Popup,
  Progress,
  Radio,
  RadioGroup,
  Row,
  SearchBar,
  Swiper,
  SwiperItem,
  Switch,
  SlipDrawer,
  SlipDrawerGroup,
  Toast,
  Tooltips,
  Tab,
  TabPanel,
  Tabbar,
  TabbarItem,
  Tag,
  Theme,
};
