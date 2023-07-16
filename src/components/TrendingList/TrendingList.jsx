import { Link, Img, Title } from './TrendingList.styled';

function TrendingList({ trendings }) {
  return trendings.map(trend => {
    return (
      <li key={trend.id}>
        <Link to={`/movies/${trend.id}`}>
          <Img
            src={`https://image.tmdb.org/t/p/original/${trend.poster_path}`}
            alt={trend.title}
            width={50}
            height={50}
          />
          <Title>{trend.title}</Title>
        </Link>
      </li>
    );
  });
}
export default TrendingList;