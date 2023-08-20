import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
export default function Post({ id, cover, title, summary, createdAt }) {
  const api_url = import.meta.env.VITE_API_URL;
  return (
    <Link to={`/post/${id}`} className="hover:opacity-70">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] sm:grid-cols-[1fr] gap-5 mb-7">
        <div>
          <img
            className="w-full aspect-video"
            src={`${api_url}/${cover}`}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl ">{title}</h1>

          <p className="text-xs font-bold my-2">
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>

          <p className="my-3 leading-6 md:text-base text-sm">{summary}</p>
        </div>
      </div>
    </Link>
  );
}
