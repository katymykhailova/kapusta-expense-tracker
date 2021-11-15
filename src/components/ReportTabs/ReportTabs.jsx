import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './ReportTabs.module.css';
import { useMediaQuery } from 'react-responsive';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import ReportTable from 'components/ReportTable/ReportTable';
import Modal from 'components/Modal/Modal';
import Summary from 'components/Summary/Summary';
import FormDescription from 'components/FormDescription/FormDescription';
import { getCategoriesList } from '../../redux/categories';

import {
  getTransactionsByMonts,
  getTransactionsList,
  removeTransaction,
} from '../../redux/transactions';
import { getCategoriesList } from '../../redux/categories/';
import { AiOutlinePlus } from 'react-icons/ai';
import FormDescriptionModal from 'components/FormDescriptionModal/FormDescriptionModal';

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

export default function ReportTabs({ onClick }) {
  const [showModal, setShowModal] = useState(false);
  const [remove, setRemove] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch();

  // получаем все транзакции за месяц (доход и расход)
  const transactions = useSelector(getTransactionsList);

  useEffect(() => {
    const curretnDate = new Date();
    const month = curretnDate.getUTCMonth() + 1;
    const year = curretnDate.getFullYear();
    const date = `${year}${month}`;
    dispatch(getCategoriesList());
    dispatch(getTransactionsByMonts(date));
  }, [dispatch]);


  const income = transactions.filter(trans => trans.type);
  const outcome = transactions.filter(trans => !trans.type);

  const handleDelete = id => {
    setShowModal(true);
    setCurrentTransaction(id);
  };

  useEffect(() => {
    if (!remove) {
      return;
    }
    dispatch(removeTransaction(currentTransaction));
    setShowModal(false);
    setRemove(false);
  }, [currentTransaction, dispatch, remove]);

  const toggleModal = () => {
    return isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <>
      <Tabs className={s.tabsContainer} selectedTabClassName={s.isSelected}>
        <TabList className={s.tabsList}>
          <CustomTab className={`${s.commonTab}`}>Расход</CustomTab>
          <CustomTab className={`${s.commonTab}`}>Доход</CustomTab>
        </TabList>
        <div className={s.tabsWrap}>
          <TabPanel>

            {isMobile && (
              <button type="button" onClick={toggleModal} className={s.addBtn}>
                <AiOutlinePlus size="18" color="#ffffff" />
              </button>
            )}
            {isVisible && isMobile && (
              <FormDescriptionModal
                toggleModal={toggleModal}
                typeForm={false}
              />
            )}
            {!isMobile && <FormDescription typeForm={false} />}
            <div className={s.wrapper}>
              <ReportTable
                type={false}
                transactions={outcome}
                handleDelete={handleDelete}
              ></ReportTable>
              {isDesctop && <Summary reportType="o" />}
            </div>
            {isTablet && <Summary reportType="o" />}
          </TabPanel>
          <TabPanel>
            {isMobile && (
              <button type="button" onClick={toggleModal} className={s.addBtn}>
                <AiOutlinePlus size="18" color="#ffffff" />
              </button>
            )}
            {isVisible && isMobile && (
              <FormDescriptionModal toggleModal={toggleModal} typeForm={true} />
            )}
            {!isMobile && <FormDescription typeForm={true} />}
            <div className={s.wrapper}>
              <ReportTable
                type={true}
                transactions={income}
                handleDelete={handleDelete}
              ></ReportTable>

              {isDesctop && <Summary reportType="i" />}
            </div>
            {isTablet && <Summary reportType="i" />}
          </TabPanel>
        </div>
      </Tabs>

      {showModal && (
        <Modal text="Вы уверены?" onClose={() => setShowModal(false)}>
          <ButtonBlock
            firstButtonText="Да"
            secondButtonText="Нет"
            firstButtonHandler={() => {
              setRemove(true);
            }}
            secondButtonHandler={() => {
              setRemove(false);
              setShowModal(false);
            }}
            firstButtonType="button"
            secondButtonType="button"
          ></ButtonBlock>
        </Modal>
      )}
    </>
  );
}
