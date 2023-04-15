import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const UnitBook = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();

  const deleteBook = () => dispatch(removeBook(id));

  return (
    <article className="bookContainer">
      <small>Fictional</small>
      <h2>{title}</h2>
      <p>{author}</p>
      <div className="callContainer">
        <button type="submit">Comments</button>
        <button type="submit" onClick={deleteBook}>Remove</button>
        <button type="submit">Edit</button>
      </div>
    </article>
  );
};

export default UnitBook;

UnitBook.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

UnitBook.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
