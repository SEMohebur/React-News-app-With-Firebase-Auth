import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, image_url, author, details, rating, total_view, tags } = news;

  const formattedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="card w-full mb-3 bg-base-100 shadow-md rounded-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-5 pt-3">
        <img
          src={image_url}
          alt="news thumbnail"
          className="w-full rounded-xl object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 py-3 text-gray-600 text-sm leading-relaxed">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...
            <span className="text-orange-500 font-medium cursor-pointer">
              {" "}
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating.number)
                  ? "text-orange-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-700 font-medium">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
