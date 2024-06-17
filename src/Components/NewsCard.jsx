import { MdArrowDropUp } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const NewsCard = ({ article }) => {

  // converts given date string into hours
    const timeConversion = (time) => {
        const date = new Date(time)
        return date.getHours()
    }
    
  return (
    <article className="flex gap-5 bg-white my-5 p-5">
      {/* Id and Arrow */}
      <div className="flex flex-col items-center">
        <MdArrowDropUp className="text-3xl" />
        <p>{article.score}</p>
      </div>
      {/* Remaining Whole body */}
      <div className="flex flex-col gap-3 text-sm md:text-lg">
        {/* title */}
        <h1 className="text-wrap">{article.title}</h1>
        {/* author, time article, link, and score */}
        <div className="flex gap-5">
          <p>
            by <span className="text-primary">{article.by}</span>
          </p>
          <p> {timeConversion(article.time)} hours ago</p>
        {/* Link to Article */}
          <a href={article.url} target="blank" className="flex gap-2 items-center">Article Link
            <FiExternalLink />
          </a>
        {/* Score */}
          <div className="flex gap-2 items-center">
            <BiCommentDetail />
            <p>{article.score}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
