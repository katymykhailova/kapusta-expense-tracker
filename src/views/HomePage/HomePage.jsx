import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReportTabs from 'components/ReportTabs/ReportTabs';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import FormDescriptionModal from 'components/FormDescriptionModal/FormDescriptionModal';
import s from './HomePage.module.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleModal = () => {
    return isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <div className={s.pageWrap}>
      <HeaderSection typePage="home" onClick={toggleModal} />
      <ReportTabs></ReportTabs>
      {isVisible && isMobile && (
        <FormDescriptionModal toggleModal={toggleModal} />
      )}
    </div>
  );
}
