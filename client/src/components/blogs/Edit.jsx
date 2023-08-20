import ReactQuill from "react-quill";
import "./quill.snow.css";
import "./Create.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function Edit({ onEdit, info }) {
  const api_url = import.meta.env.VITE_API_URL;
  const [title, setTitle] = useState(info.title);
  const [summary, setSummary] = useState(info.summary);
  const [content, setContent] = useState(info.content);
  const [files, setFiles] = useState(info.cover);
  const { id } = useParams();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  async function updateHandler(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    const response = await fetch(`${api_url}/post/${id}`, {
      method: "PUT",
      body: data,
    });
    if (response.ok) {
      onEdit();
    }
  }
  return (
    <form onSubmit={updateHandler} className="p-8">
      <p className="text-2xl font-bold mb-6">Modify this Post:</p>
      <input
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        type="title"
        placeholder="Title"
        className="block mb-2 w-full p-1 border-0 rounded-lg bg-grey"
      />
      <input
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        type="summary"
        placeholder="Summary"
        className="block mb-2 w-full p-1 border-0 rounded-lg bg-grey"
      />
      <input
        onChange={(ev) => {
          setFiles(ev.target.files);
        }}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        className="block mb-2 w-full p-1 border-0 rounded-lg bg-grey"
        id="file_input"
      />
      <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => {
          setContent(newValue);
        }}
      />
      <button className="mx-auto items-center block mt-8 w-1/2 p-1 border-0 rounded-lg bg-teal hover:bg-teall font-medium">
        Update
      </button>
    </form>
  );
}
