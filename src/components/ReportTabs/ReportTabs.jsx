import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './ReportTabs.module.css';
import ReportTable from 'components/ReportTable/ReportTable';

const DEFAULT_CLASS = 'react-tabs__tab';
const DEFAULT_SELECTED_CLASS = `${DEFAULT_CLASS}--selected`;

const ClassyTab = ({ className, selectedClassName, ...props }) => (
  <Tab
    className={`${DEFAULT_CLASS}, ${className}`}
    selectedClassName={`${DEFAULT_SELECTED_CLASS}, ${selectedClassName}`}
    {...props}
  />
);

ClassyTab.tabsRole = 'Tab';

const ReportTabs = () => (
  <Tabs className={s.tabsContainer} selectedTabClassName={s.isSelected}>
    <TabList className={s.tabsList}>
      <ClassyTab className={`${s.commonTab}`}>Расход</ClassyTab>
      <ClassyTab className={`${s.commonTab}`}>Доход</ClassyTab>
    </TabList>
    <div className={s.tabsWrap}>
      <TabPanel>
        <ReportTable></ReportTable>
      </TabPanel>
      <TabPanel>
        <ReportTable></ReportTable>
      </TabPanel>
    </div>
  </Tabs>
);

export default ReportTabs;
