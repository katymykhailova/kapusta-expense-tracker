import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './ReportTabs.module.css';
import { useMediaQuery } from 'react-responsive';
import ReportTable from 'components/ReportTable/ReportTable';
import Summary from 'components/Summary/Summary';
import FormDescription from 'components/FormDescription/FormDescription';

const DEFAULT_CLASS = 'react-tabs__tab';
const DEFAULT_SELECTED_CLASS = `${DEFAULT_CLASS}--selected`;

const CustomTab = ({ className, selectedClassName, ...props }) => (
  <Tab
    className={`${DEFAULT_CLASS}, ${className}`}
    selectedClassName={`${DEFAULT_SELECTED_CLASS}, ${selectedClassName}`}
    {...props}
  />
);

CustomTab.tabsRole = 'Tab';

export default function ReportTabs() {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <Tabs className={s.tabsContainer} selectedTabClassName={s.isSelected}>
        <TabList className={s.tabsList}>
          <CustomTab className={`${s.commonTab}`}>Расход</CustomTab>
          <CustomTab className={`${s.commonTab}`}>Доход</CustomTab>
        </TabList>
        <div className={s.tabsWrap}>
          {!isMobile && <FormDescription />}
          <TabPanel>
            <ReportTable></ReportTable>
          </TabPanel>
          <TabPanel>
            <ReportTable></ReportTable>
          </TabPanel>
          {isDesctop && <Summary />}
        </div>
      </Tabs>
      {isTablet && <Summary />}
    </>
  );
}
