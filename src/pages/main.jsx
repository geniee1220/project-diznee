import Banner from '../components/Banner';
import Category from '../components/Category';
import MainTemplates from '../components/Templates/MainTemplates';

function MainPage() {
  return (
    <MainTemplates>
      <Banner />
      <Category />
    </MainTemplates>
  );
}

export default MainPage;
