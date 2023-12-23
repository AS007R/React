import { useState } from "react";

type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

const Post = () => {
  const [posts, setPosts] = useState<post[]>([
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
    {
      id: 2,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
    {
      id: 3,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
    {
      id: 4,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      userId: 9,
      tags: ["history", "american", "crime"],
      reactions: 2,
    },
  ]);

  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => setPosts(data.posts));
  //  currently getting error in fetching data "too many request error"
  return (
    <>
      {posts.map((item) => (
        <div key={item.id} className="modal-content rounded-4 shadow p-3 w-25">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">{item.title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body py-0">
            <p>{item.body}</p>
          </div>
          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <button type="button" className="btn btn-lg btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-lg btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
{
  /* <div className="modal-content rounded-4 shadow p-3 w-25">
    <div className="modal-header border-bottom-0">
      <h1 className="modal-title fs-5">Modal title</h1>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div className="modal-body py-0">
      <p>
        This is a modal sheet, a variation of the modal that docs itself to
        the bottom of the viewport like the newer share sheets in iOS.
      </p>
    </div>
    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
      <button type="button" className="btn btn-lg btn-primary">
        Save changes
      </button>
      <button
        type="button"
        className="btn btn-lg btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
    </div>
  </div> */
}
