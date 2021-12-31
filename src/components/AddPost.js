import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPost.css";

//getting values of local storage

const getData = () => {
  const data = localStorage.getItem("posts");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const AddPost = () => {
  const [id, setid] = useState("");
  const [posts, setPosts] = useState(getData());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEdit, setisEsit] = useState(null);

  const [eid, seteid] = useState("");
  const [eposts, setePosts] = useState();
  const [etitle, seteTitle] = useState("");
  const [edescription, seteDescription] = useState("");
  const [edate, seteDate] = useState("");
  const [eauthor, seteAuthor] = useState("");
  let navigate = useNavigate();

  //delete post from ls

  const deleteposts = (id) => {
    console.log(id);
    alert("Are you sure dElete the user");
    const deletepost = posts.filter((e, index) => {
      return e.id !== id;
    });
    setPosts(deletepost);
  };
  //edit posts ls
  
  const editposts = (id) => {
    const editpost = posts.find((item) => {
      return item.id === id;
    });
    console.log(editpost);
    setIsEditing(!isEditing);

    setisEsit(id);
    seteid(id);
    seteTitle(editpost.title);
    seteDate(editpost.date);
    seteDescription(editpost.description);
    seteAuthor(editpost.author);
    setePosts(editpost.eid)
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      id,
      title,
      description,
      date,
      author,
    };
    setPosts([...posts, post]);
    setid("");
    setTitle("");
    setDescription("");
    setDate("");
    setAuthor("");
  };

  const handleeditSubmit = (e) => {
    e.preventDefault();
    let post = {
      eid,
      etitle,
      edescription,
      edate,
      eauthor,
    };
    setePosts([...eposts, post]);
    seteid("");
    seteTitle("");
    seteDescription("");
    seteDate("");
    seteAuthor("");
    
  };

  //save data to localstorage

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="header">
            <h2 className="headertext ">Create Blog</h2>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="form-group mb-3"
        autoComplete="off"
      >
        <input
          type="number"
          class="form-control mt-3 mb-3"
          placeholder="Enter id..."
          name="id"
          required
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <input
          type="text"
          class="form-control mt-3 mb-3"
          placeholder="Enter Title..."
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          class="form-control mb-3"
          id="exampleFormControlTextarea1"
          placeholder="Enter Description..."
          rows="3"
        ></textarea>
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Enter Date..."
          name="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Enter Author..."
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="btn btn-primary btn5 mx-2 mt-3">Save Post</button>)
        <button
          className="btn btn-primary btn5 mt-3 mb-5"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </form>
      <br />
      <div className="blogdetails">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="header">
                <h2 className="headertext "> Blog Details</h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <div className="mt-5">
                {posts.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="title mt-5">
                              <div>
                                {" "}
                                <h3>{item.title} </h3> &nbsp;
                                <h3>{item.id}</h3>
                                <p className="mx-5">
                                  Author:{item.author} ({item.date})
                                </p>
                                <br />
                              </div>

                              <br />

                              
                                <p > {item.description}</p>
                                <div className="btnfuntionalities flex-row">
                                <button
                                  onClick={() => editposts(item.id)}
                                  className="btn2 btn-primary mx-3"
                                >
                                  {isEditing ? " Update" : "Edit"}
                                </button>{" "}
                                &nbsp;&nbsp;
                                <button
                                  onClick={() => deleteposts(item.id)}
                                  className="btn3 btn-danger mb-5"
                                >
                                  Delete
                                </button>
                                {isEditing ? (
                                  <>
                                    <form
                                      onSubmit={handleeditSubmit}
                                      className="form-group mb-3"
                                      autoComplete="off"
                                    >
                                      <input
                                        type="number"
                                        class="form-control mt-3 mb-3"
                                        placeholder="Enter id..."
                                        name="eid"
                                        required
                                        value={eid}
                                        onChange={(e) => seteid(e.target.value)}
                                      />
                                      <input
                                        type="text"
                                        class="form-control mt-3 mb-3"
                                        placeholder="Enter Title..."
                                        name="title"
                                        required
                                        value={etitle}
                                        onChange={(e) =>
                                          seteTitle(e.target.value)
                                        }
                                      />
                                      <textarea
                                        name="description"
                                        required
                                        value={edescription}
                                        onChange={(e) =>
                                          seteDescription(e.target.value)
                                        }
                                        class="form-control mb-3"
                                        id="exampleFormControlTextarea1"
                                        placeholder="Enter Description..."
                                        rows="3"
                                      ></textarea>
                                      <input
                                        type="text"
                                        class="form-control mb-3"
                                        placeholder="Enter Date..."
                                        name="date"
                                        required
                                        value={edate}
                                        onChange={(e) =>
                                          seteDate(e.target.value)
                                        }
                                      />
                                      <input
                                        type="text"
                                        class="form-control mb-3"
                                        placeholder="Enter Author..."
                                        name="author"
                                        required
                                        value={eauthor}
                                        onChange={(e) =>
                                          seteAuthor(e.target.value)
                                        }
                                      />
                                    </form>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
