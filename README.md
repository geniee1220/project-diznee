# project-diznee

## 프로젝트 소개 및 목적

Diznee는 패스트캠퍼스 온라인 강의를 기반으로 The Movie DB(TMDB) API를 활용한 디즈니 플러스 리액트 클론 코딩 프로젝트입니다.

외부 API를 사용하고 주어진 API 데이터를 가공하는 법에 대한 연습을 하기 위해 제작되었습니다.

## 프로젝트 설치 및 실행

```bash
$ npm install

$ npm run start
```

## 주요 학습 내용

### Debounce Custom Hook

성능 개선을 위해 검색어를 입력했을 때, 매 이벤트마다 함수를 호출하지 않고 가장 마지막 이벤트에만 함수를 호출하기 위해 Debounce 커스텀 훅을 생성했습니다.

```javascript
// value: 사용자 입력 값
// delay: 지연 시간
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // 만약 지연 시간이 지나기 전에 새로운 입력 값이 useDebounce 훅에 들어오는 경우
    // return 문 안의 clearTimeout를 이용하여 실행되고 있던 타이머를 취소
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
```

### Hook과 URLSearchParams를 활용한 쿼리 스트링 검색

React Hook과 유틸리티 메서드 [MDN URLSearchParams](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams)를 활용하여 쿼리 스트링 검색 기능을 구현했습니다.

```js
// https://project-diznee.web.app/search?q=searchTerm
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const query = useQuery();
const searchTerm = query.get('q');
const debouncedSearchTerm = useDebounce(searchTerm, 500);

const fetchSearchResult = async () => {
  try {
    const response = await instance.get(
      `/search/multi?include_adult=false&query=${searchTerm}`
    );
    setSearchResults(response.data.results);

    console.log(response.data.results);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  if (debouncedSearchTerm) {
    fetchSearchResult(debouncedSearchTerm);
  }
}, [debouncedSearchTerm]);
```
