import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();

  const curDiaryItem = data.find((item) => String(item.id) === String(id));

  if (!curDiaryItem) {
    window.alert('존재하지 않는 일기입니다');
    nav('/', { replace: true });
  }

  return curDiaryItem;
};

export default useDiary;
