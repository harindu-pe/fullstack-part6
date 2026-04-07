import { useDispatch, useSelector } from "react-redux";
import { updateVote } from "../reducers/anecdoteReducer";

const sortAnecdotes = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes);
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    if (state.filter === "") {
      return state.anecdotes;
    }

    return state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase()),
    );
  });

  const sortedAnecdotes = sortAnecdotes(anecdotes);

  const vote = (id) => {
    console.log("vote", id);
    dispatch(updateVote(id));
  };

  return (
    <>
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

export default AnecdoteList;
