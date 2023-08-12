import Banner from '../components/Banner';
import MainTemplates from '../components/Templates/MainTemplates';

function MainPage() {
  return (
    <MainTemplates>
      <div>메인 페이지</div>
      <Banner />
    </MainTemplates>
  );
}

export default MainPage;
