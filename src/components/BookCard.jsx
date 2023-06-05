/* eslint-disable react/prop-types */
function BookCard({ book }) {
  return (
    <>
      <div className="card w-44 bg-red-300 cursor-pointer">
        <div className="card__image w-full shadow-md">
          {book.volumeInfo.imageLinks ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-[176px] h-[264px] rounded">
              <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
                <i className="fas fa-book text-9xl text-center text-gray-500"></i>
              </div>
            </div>
          )}
        </div>
        <div className="card__content text-center">
          <h2 className="card__title text-xl mt-1">{book.volumeInfo.title}</h2>
          <p className="card__author text-sm">
            {book.volumeInfo.authors.join(", ")}
          </p>
          <hr className="w-32 mx-auto my-1 border-0 bg-indigo-800 h-1 rounded" />
          <p className="card__description text-sm truncate">
            {book.volumeInfo.description}
          </p>
        </div>
      </div>
    </>
  );
}
export default BookCard;
