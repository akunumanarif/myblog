import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://scontent.fsub1-2.fna.fbcdn.net/v/t1.6435-9/39522014_1952459971478422_6207991724443172864_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeENsGULdra9YzLnMXh-na45PehF1PzBOr896EXU_ME6vzPPf6cVq_rUpYCnqeaADAFsKFxMhBoviKWK2kYDSI2i&_nc_ohc=icgh9q1PUTEAX94HTNF&_nc_ht=scontent.fsub1-2.fna&oh=00_AfDsPj1xVnWIDtfmhhC0EJex0yK6Lx10liWsMoiL0mey1A&oe=6398929F" alt="" />
                <div className="user">
                    <img src="https://scontent.fsub1-1.fna.fbcdn.net/v/t1.6435-1/52368327_2191906547533762_6917859791662481408_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFKVEXhVClMbuXJVGfSAsVrPMgulNIstxM8yC6U0iy3E21dBKxY-mtvodjs-K2Xv51OQKWsuOwTbQSC6biz7S9O&_nc_ohc=8RmGf14t7msAX87l0FW&_nc_ht=scontent.fsub1-1.fna&oh=00_AfBrUogrOfEi2Y7IqP4V_lc2stjrisF9NZzEnuyvSzvgKQ&oe=6398942F" alt="" />
                    <div className="info">
                        <span>Nu'man Arif</span>
                        <p>2 Days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                        
                        <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci provident magnam iure excepturi natus. Pariatur provident praesentium, recusandae, reprehenderit illo tempore impedit minima architecto temporibus autem officiis iste soluta enim! <br/><br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fuga qui, fugit perspiciatis itaque voluptatem? Cumque amet, minus illum nihil, assumenda cum maiores aliquid asperiores, soluta voluptatibus eos quasi pariatur!</p>
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
            <div className="menu">m</div>
            {/* <Menu cat={post.cat}/> */}
        </div>
    )
}

export default Single
