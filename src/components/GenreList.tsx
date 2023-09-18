import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre, error } = useGenre();
  return (
    <ul>
      {genre.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
