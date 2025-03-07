const Posting = (props) => {
  return (
    <div className="posting">
      <h1>{props.posting.title}</h1>
      <p>{props.posting.description}</p>
      <img src={props.posting.imageURL} />
    </div>
  );
};

export default Posting;
