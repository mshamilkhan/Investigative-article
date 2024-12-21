import React from 'react';
import blog from './Blog.module.css';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import AuthorTop from '../AuthorTop/AuthorTop';
import author from '../../assets/images/author.png';
import CenterHeading from '../CenterHeading/CenterHeading';
import WhiteHeading from '../WhiteHeading/WhiteHeading';
import hero from '../../assets/images/image.png';
import AuthorBottom from '../AuthorBottom/AuthorBottom';

import { motion } from 'framer-motion';
import Slider from '../slider/Slider';
import Scroll from '../Scroll/Scroll';


export default function Blog() {
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
      <AuthorTop image={author} name="Mohammad Shamil Khan" date="December 12, 2024" />
      <WhiteHeading heading="Article 1 Heading Here" />
      <div className={blog.box112}>
        <div className={blog.articlepicture}>
          <img src={hero} alt="Hero" />
        </div>
        <div className={blog.para1}>
          <p>{textContent}</p>
        </div>


        <AuthorBottom image={author} name="Mohammad Shamil Khan" date="December 12, 2024"/>



<CenterHeading heading="RECENT"/>
<Scroll/>

      </div>


<Footer />
  </> 

  );
}
