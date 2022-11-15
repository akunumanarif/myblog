// import axios from "axios";
// import React, { useEffect, useState } from "react";

import axios from "axios";
import { useEffect, useState } from "react";

// const posts = [
//   {
//     id: 1,
//     title: "ONE Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img:
//       "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?size=626&ext=jpg",
//   },
//   {
//     id: 2,
//     title: "TWO Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img:
//       "https://i.pinimg.com/originals/9f/cb/15/9fcb152bd04320e612ef1d0430aedef4.jpg",
//   },
//   {
//     id: 3,
//     title: "THREE Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img:
//       "https://i.pinimg.com/originals/c7/08/2d/c7082ded52fcc69aa208da06108b822b.jpg",
//   },
//   {
//     id: 4,
//     title: "FOUR Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img:
//       "https://i.pinimg.com/originals/9f/cb/15/9fcb152bd04320e612ef1d0430aedef4.jpg",
//   },
// ];

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
