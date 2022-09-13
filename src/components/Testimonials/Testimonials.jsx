// import React from 'react'
// import './testimonials.css'
// // import client images from assests
// import AVT1 from '../../assests/AVT1.jpg';
// import AVT2 from '../../assests/AVT2.jpg';
// // import AVT3 from '../../assests/AVT3.jpg';
// // import AVT4 from '../../assests/AVT4.jpg';

// import {  Pagination } from 'swiper';
// // Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// import 'swiper/css/pagination';
// // Styles must use direct files imports
// // import 'swiper/swiper-bundle.css'; // core Swiper
// // import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// // import 'swiper/modules/pagination/pagination.scss'; // Pagination module



// const data = [
//   {
// avatar: AVT1, //image name
// name: 'Katie Whitehead',
// review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iste in, consequuntur laboriosam animi, illo nostrum, esse aut debitis eius eligendi. Neque a quasi mollitia aspernatur consequatur aperiam iusto repellat nisi corrupti temporibus dolor tenetur fugit beatae qui, repellendus sequi nulla! Doloremque dicta corporis velit dolorem earum officia quo quibusdam. Officia rerum magnam sint voluptate, nulla mollitia ea vitae iusto, nisi atque eaque vel omnis quae dignissimos corrupti iure incidunt asperiores perspiciatis esse? Earum voluptatibus dolorum doloremque ratione! Amet, ducimus consequatur natus incidunt maxime velit neque fugiat adipisci animi, praesentium dolores! Numquam ipsum voluptate possimus odio delectus vero aliquam similique.'
// },
// {
//   avatar:AVT2,
//   name: 'Patrick Martella',
//   review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iste in, consequuntur laboriosam animi, illo nostrum, esse aut debitis eius eligendi. Neque a quasi mollitia aspernatur consequatur aperiam iusto repellat nisi corrupti temporibus dolor tenetur fugit beatae qui, repellendus sequi nulla! Doloremque dicta corporis velit dolorem earum officia quo quibusdam. Officia rerum magnam sint voluptate, nulla mollitia ea vitae iusto, nisi atque eaque vel omnis quae dignissimos corrupti iure incidunt asperiores perspiciatis esse? Earum voluptatibus dolorum doloremque ratione! Amet, ducimus consequatur natus incidunt maxime velit neque fugiat adipisci animi, praesentium dolores! Numquam ipsum voluptate possimus odio delectus vero aliquam similique.'
//   }
// //   {
// //     avatar:Avt3,
// //     name: 'Tina Snow',
// //     review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iste in, consequuntur laboriosam animi, illo nostrum, esse aut debitis eius eligendi. Neque a quasi mollitia aspernatur consequatur aperiam iusto repellat nisi corrupti temporibus dolor tenetur fugit beatae qui, repellendus sequi nulla! Doloremque dicta corporis velit dolorem earum officia quo quibusdam. Officia rerum magnam sint voluptate, nulla mollitia ea vitae iusto, nisi atque eaque vel omnis quae dignissimos corrupti iure incidunt asperiores perspiciatis esse? Earum voluptatibus dolorum doloremque ratione! Amet, ducimus consequatur natus incidunt maxime velit neque fugiat adipisci animi, praesentium dolores! Numquam ipsum voluptate possimus odio delectus vero aliquam similique.'
// //     },

// //     {
// //       avatar:Avt4,
// //       name: 'Tina Snow',
// //       review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iste in, consequuntur laboriosam animi, illo nostrum, esse aut debitis eius eligendi. Neque a quasi mollitia aspernatur consequatur aperiam iusto repellat nisi corrupti temporibus dolor tenetur fugit beatae qui, repellendus sequi nulla! Doloremque dicta corporis velit dolorem earum officia quo quibusdam. Officia rerum magnam sint voluptate, nulla mollitia ea vitae iusto, nisi atque eaque vel omnis quae dignissimos corrupti iure incidunt asperiores perspiciatis esse? Earum voluptatibus dolorum doloremque ratione! Amet, ducimus consequatur natus incidunt maxime velit neque fugiat adipisci animi, praesentium dolores! Numquam ipsum voluptate possimus odio delectus vero aliquam similique.'
// //       }
// ]
// const Testimonials = () => {
//   return (
//    <section id='testimonials'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className="container testimonials__container"
//       modules={[Pagination]}
//       spaceBetween={40}
//       slidesPerView={1}
//       pagination={{clickable:true}}>
//         {
//           data.map(({avatar,name,review}, index) => {
//             return (
//             <SwiperSlide key={index} className="testimonial">
//             <div className="client__avatar">
//               <img src={avatar} />//avatar
//             </div>
//               <h5 className='client__name'>{name}</h5>
//               <small className='client__review'>
//                 {review}
//               </small>
            
//           </SwiperSlide>
//             )
//           })
//         }
       
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonials
