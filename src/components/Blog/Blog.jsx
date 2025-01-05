import React, {useEffect, useState} from 'react';
import blog from './Blog.module.css';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import AuthorTop from '../AuthorTop/AuthorTop';
import author from '../../assets/images/author.png';
import CenterHeading from '../CenterHeading/CenterHeading';
import WhiteHeading from '../WhiteHeading/WhiteHeading';
import hero from '../../assets/images/image.png';
import AuthorBottom from '../AuthorBottom/AuthorBottom';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from '../slider/Slider';
import Scroll from '../Scroll/Scroll';
import { useLocation } from 'react-router-dom';
import axios from 'axios';







export default function Blog() {
  const location = useLocation();
  console.log(location)
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  console.log(id)


const [blogData, setBlogData] = useState({
  title: '',
  content: "",
  image: "",
  author_name: "",
  author_image: "",
  date: "",
  about_author: ""
})//TODO


const showBlog = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_AXIOS_LINK}/show-blog`, {
      params: { id },
    });
    const fetchedDate = new Date(res.data.date);
    const isValidDate = !isNaN(fetchedDate.getTime());
    setBlogData({
      title: res.data.title,
      content: res.data.content,
      image: res.data.images[0].filename,
      author_image: res.data.author_image.filename,
      author_name: res.data.author_name,
      date: isValidDate ? fetchedDate.toDateString() : new Date().toDateString(),
      about_author: res.data.about_author,
    });
    console.log(res.data);
  } catch (err) {
    console.error('Error fetching blog data:', err);
  }
};
useEffect(()=>{
showBlog();
}, [])




  const textContent = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus perferendis optio in, quia quisquam delectus aperiam repellat temporibus nisi, totam quibusdam repellendus animi obcaecati sapiente tempora eligendi libero sint.
    Nisi quis at consequatur consequuntur autem eius assumenda, praesentium sequi, quaerat hic non reiciendis asperiores excepturi, voluptates nobis eaque deserunt quam? Et velit mollitia quaerat consequuntur! Dolorem vel cupiditate blanditiis.

    Ipsam, et dicta repudiandae totam cupiditate sit id. Quos, ut. Architecto natus reiciendis expedita quidem corporis illum labore dicta cumque libero maiores adipisci mollitia distinctio, tenetur ullam, beatae, ipsam quo!
    Sint, labore quod laudantium officia eaque, quae, quas perferendis autem fugit quos quisquam obcaecati facilis adipisci cumque voluptatem! Aliquam, aspernatur itaque doloribus commodi rerum possimus quaerat ipsum provident suscipit cupiditate?

    Voluptatum voluptas error odio neque, fugiat blanditiis omnis, sint consequatur animi excepturi nulla ullam rem alias exercitationem suscipit et. Quis porro quidem placeat accusantium labore. Provident eum sapiente dolorum in.
    Pariatur est mollitia laudantium debitis, non nihil delectus cupiditate exercitationem ex quam illo qui enim architecto beatae ullam quibusdam magni id ratione hic atque vel adipisci, voluptatem quidem. Labore, est.

     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus perferendis optio in, quia quisquam delectus aperiam repellat temporibus nisi, totam quibusdam repellendus animi obcaecati sapiente tempora eligendi libero sint.
    Nisi quis at consequatur consequuntur autem eius assumenda, praesentium sequi, quaerat hic non reiciendis asperiores excepturi, voluptates nobis eaque deserunt quam? Et velit mollitia quaerat consequuntur! Dolorem vel cupiditate blanditiis.

    Ipsam, et dicta repudiandae totam cupiditate sit id. Quos, ut. Architecto natus reiciendis expedita quidem corporis illum labore dicta cumque libero maiores adipisci mollitia distinctio, tenetur ullam, beatae, ipsam quo!
    Sint, labore quod laudantium officia eaque, quae, quas perferendis autem fugit quos quisquam obcaecati facilis adipisci cumque voluptatem! Aliquam, aspernatur itaque doloribus commodi rerum possimus quaerat ipsum provident suscipit cupiditate?

    Voluptatum voluptas error odio neque, fugiat blanditiis omnis, sint consequatur animi excepturi nulla ullam rem alias exercitationem suscipit et. Quis porro quidem placeat accusantium labore. Provident eum sapiente dolorum in.
    Pariatur est mollitia laudantium debitis, non nihil delectus cupiditate exercitationem ex quam illo qui enim architecto beatae ullam quibusdam magni id ratione hic atque vel adipisci, voluptatem quidem. Labore, est.
  `;

  return (
    <>
    
      <Navbar parameter="/menuopen" menuText="Menu" />
      <AuthorTop image={`/images/${blogData.author_image}`} name={blogData.author_name} date={`${blogData.date}`} />
      <WhiteHeading heading={blogData.title} />
      <div className={blog.box112}>
        <div className={blog.articlepicture}>
          <img src={`images/${blogData.image}`} alt="Hero" />
        </div>
        <div className={blog.para1}>
          <p>{blogData.content}</p>
        </div>


        <AuthorBottom image={`/images/${blogData.author_image}`} name={blogData.author_name} date={blogData.date} about_author={blogData.about_author}/>



<CenterHeading heading="RECENT"/>
<Scroll/>

      </div>


<Footer />
  </> 

  );
}
