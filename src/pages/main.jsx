import requests from '../api/request';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Row from '../components/Row';
import MainTemplates from '../components/Templates/MainTemplates';

function MainPage() {
  return (
    <MainTemplates>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </MainTemplates>
  );
}

export default MainPage;
