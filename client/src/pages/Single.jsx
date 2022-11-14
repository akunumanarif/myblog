import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext.js";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postID = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${postID}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postID]);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img
            src="https://scontent.fsub1-1.fna.fbcdn.net/v/t1.6435-1/52368327_2191906547533762_6917859791662481408_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFKVEXhVClMbuXJVGfSAsVrPMgulNIstxM8yC6U0iy3E21dBKxY-mtvodjs-K2Xv51OQKWsuOwTbQSC6biz7S9O&_nc_ohc=8RmGf14t7msAX87l0FW&_nc_ht=scontent.fsub1-1.fna&oh=00_AfBrUogrOfEi2Y7IqP4V_lc2stjrisF9NZzEnuyvSzvgKQ&oe=6398942F"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        {/* <img src={`../upload/${post?.img}`} alt="" />
                <div className="user">
                {post.userImg && <img
                    src={post.userImg}
                    alt=""
                />}
                <div className="info">
                    <span>{post.username}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>
                {currentUser.username === post.username && (
                    <div className="edit">
                    <Link to={`/write?edit=2`} state={post}>
                        <img src={Edit} alt="" />
                    </Link>
                    <img onClick={handleDelete} src={Delete} alt="" />
                    </div>
                )}
                </div>
                <h1>{post.title}</h1>
                <p
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.desc),
                }}
                ></p>       */}
      </div>
      <Menu></Menu>
      {/* <Menu cat={post.cat}/> */}
    </div>
  );
};

export default Single;
