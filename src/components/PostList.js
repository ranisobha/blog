import React, { useState } from "react";
import "./PostList.css";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const PostList = () => {
    const [show, setShow] = useState(false);
    const [read,setRead] = useState(false)
    let navigate = useNavigate();
    const handleClick = () => {
      setShow(!show);
      setRead(!read)
    };
  return (
      <>
    <div className="container">
      <div className="flex-row">
        <div className="col-md-12 col-sm-12">
          <div className="header flex-row">
            <h2 className="headertext flex-small ">Blogs</h2>
            <button onClick={()=>navigate("/post")} className="btn1 btn btn-primary ">
              ADD
            </button>
          </div>
        
          </div>
          <div>
          {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h3>{item.title}</h3>
                    <br />
                    <p>{item.decription}</p>
                    <br />
                   
                    {show ? (
                      <>
                        <div>
                          <p>Author:{item.author}</p>

                          <p>Date:({item.date})</p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <a href="#" onClick={handleClick}>
                    {read ? "Less" : "More"  }
                    </a>
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
    </>
  );
};
 
export default PostList;
