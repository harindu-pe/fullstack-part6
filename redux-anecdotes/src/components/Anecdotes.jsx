import { useDispatch, useSelector } from "react-redux";
import { updateVote } from "../reducers/anecdoteReducer";

const sortAnecdotes = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes);
};

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const sortedAnecdotes = sortAnecdotes(anecdotes);

  const vote = (id) => {
    console.log("vote", id);
    dispatch(updateVote(id));
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Anecdotes;
