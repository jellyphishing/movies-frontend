const MovieInfo = ({ movieObj }) => {
  console.log(movieObj);
  return (
    <div>
      <h4>{movieObj.title}</h4>
      <div>
        <div>
          <span>Running Time</span>
          <span></span>
        </div>
        <div>
          <span>Genre</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
