import Header from './../components/Header';
import Button from './../components/Button';
import DiaryList from '../components/DiaryList';
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const getMonthlyDate = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setpiovDate] = useState(new Date());
  usePageTitle('감정 일기장');

  const monthlyData = getMonthlyDate(pivotDate, data);

  const onIncreaseMonth = () => {
    setpiovDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setpiovDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
