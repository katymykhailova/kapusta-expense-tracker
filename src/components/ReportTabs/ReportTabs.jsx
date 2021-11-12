import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './ReportTabs.module.css';
import { useMediaQuery } from 'react-responsive';
import ReportTable from 'components/ReportTable/ReportTable';
import Summary from 'components/Summary/Summary';
import FormDescription from 'components/FormDescription/FormDescription';
import {
  getTransactionsByMonts,
  getTransactionsList,
} from '../../redux/transactions';

import { getCategoriesList, getCategories } from '../../redux/categories';

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

  const dispatch = useDispatch();
  // получаем все транзакции за месяц (доход и расход)
  const transactions = useSelector(getTransactionsList);

  // получаем все транзакции за месяц (доход и расход)
  const categories = useSelector(getCategories);

  useEffect(() => {
    const curretnDate = new Date();
    const month = curretnDate.getUTCMonth() + 1;
    const year = curretnDate.getFullYear();
    const date = `${year}${month}`;
    dispatch(getCategoriesList());
    dispatch(getTransactionsByMonts(date));
  }, [dispatch]);

  const income = transactions.filter(trans => trans.type === true);
  const outcome = transactions.filter(trans => trans.type === false);
  console.log(transactions);
  // const handleDelete = (id) => {};

  return (
    <>
      <Tabs className={s.tabsContainer} selectedTabClassName={s.isSelected}>
        <TabList className={s.tabsList}>
          <CustomTab className={`${s.commonTab}`}>Расход</CustomTab>
          <CustomTab className={`${s.commonTab}`}>Доход</CustomTab>
        </TabList>
        <div className={s.tabsWrap}>
          <TabPanel>
            {!isMobile && <FormDescription />}
            <ReportTable></ReportTable>
          </TabPanel>
          <TabPanel>
            {!isMobile && <FormDescription />}
            <ReportTable></ReportTable>
          </TabPanel>
          {isDesctop && <Summary />}
        </div>
      </Tabs>
      {isTablet && <Summary />}
    </>
  );
}
