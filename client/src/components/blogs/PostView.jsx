import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import {
  PencilSquareIcon,
  TrashIcon,
  BackwardIcon,
} from "@heroicons/react/24/solid";
import formatISO9075 from "date-fns/formatISO9075";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import PostModal from "./PostModal";

export default function PostView() {
  const api_url = import.meta.env.VITE_API_URL;
  const [postInfo, setPostInfo] = useState(null);
  const [editModalView, setEditModalView] = useState(false);
  const { userInfo } = useContext(UserContext);
  const username = userInfo?.username;
  const { id } = useParams();
  const navigate = useNavigate();
  function editModalHandler() {
    setEditModalView(!editModalView);
  }
  function deletePostHandler() {
    fetch(`${api_url}/remove/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((deleteInfo) => {
        const { deletedCount } = deleteInfo;
        if (deletedCount == 1) {
          alert("Post Deleted");
        } else {
          alert("Deletion Unsuccessful");
        }
      });
    });
    navigate("/blogs");
  }
  useEffect(() => {
    fetch(`${api_url}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [editModalView]);
  if (postInfo === "error") {
    throw Error;
  }
  if (!postInfo) {
    return <p className="text-center">"Post Information not loaded"</p>;
  }
  return (
    <main className="">
      <div className="container` mx-auto px-10 pt-2 ">
        <h1 className="text-center text-3xl font-bold mt-6">
          {postInfo.title}{" "}
        </h1>
        <p className="text-sm font-bold my-4 text-center">
          <time className="mb-2 opacity-70">
            {formatISO9075(new Date(postInfo.createdAt))}
          </time>
          <br />
          by @Om
        </p>
        <div className="flex justify-center pb-8 text-center">
          {username && (
            <>
              <button
                onClick={editModalHandler}
                className="bg-teal rounded-lg sm:max-h-10  max-h-14 sm:p-2 p-1.5 md:mr-6 mr-4 sm:text-base text-sm"
              >
                <PencilSquareIcon className="sm:h-6 sm:w-6 h-5 w-5 inline sm:pb-1.5 pb-1" />
                Edit Post
              </button>
              <button
                onClick={deletePostHandler}
                className="bg-grey rounded-lg sm:max-h-10  max-h-14 sm:p-2 p-1.5 md:mr-6 mr-4 sm:text-base text-sm active:bg-black"
              >
                <TrashIcon className="sm:h-6 sm:w-6 h-5 w-5 inline sm:pb-1.5 pb-1" />
                Delete Post
              </button>
            </>
          )}
          <Link
            to="/blogs"
            className="bg-grey rounded-lg sm:max-h-10  max-h-14 sm:p-2 p-1.5 sm:text-base text-sm "
          >
            <BackwardIcon className="sm:h-6 sm:w-6 h-5 w-5 inline sm:pb-1.5 pb-1" />
            Go Back
          </Link>
        </div>
        <img
          className="mx-auto items-center w-full aspect-video"
          src={`${api_url}/${postInfo.cover}`}
          alt=""
        />
        {postInfo.content == "" ? (
          <p className="my-4 font-thin italic text-center">
            No content has been written by the author.
          </p>
        ) : null}
        <div
          className="mt-4 leading-6"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        ></div>
        {editModalView && (
          <PostModal onClose={editModalHandler}>
            <Edit onEdit={editModalHandler} info={postInfo} />
          </PostModal>
        )}
      </div>
    </main>
  );
}
