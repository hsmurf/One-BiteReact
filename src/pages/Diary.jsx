import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import getStringedDate from '../util/get-Stringed-date';

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={'수정하기'} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
