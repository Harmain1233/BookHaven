import React from 'react';
import { Link } from 'react-router-dom'; 
import { BookCover } from 'book-cover-3d'

// Ensure to import Link from the correct library

const BookCard = ({ data }) => {

  return (
    <Link to={`/view-book-details/${data._id}`}>
     <BookCover
    rotate={20}
    shadowColor='rgba(255, 255, 255, 0.2)'


    >
          <img src={data.url} />

    </BookCover>

    </Link>
   

  );
};

export default BookCard;
