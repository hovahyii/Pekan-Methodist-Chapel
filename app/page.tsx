"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {

  const data = ` 
  const elemCard = document.querySelector("div.card");
  const elemClickIcon = document.querySelector("span.click-icon");
  const elemSocialMedia = document.querySelector("footer.footer");
  const elemAudio = document.getElementById('a1');


  elemCard.addEventListener("click", function () {
    elemCard.classList.toggle("is-opened");
    elemClickIcon.classList.toggle("is-hidden");
    elemSocialMedia.classList.toggle("is-opened");
    elemAudio.play();
    elemAudio.volume = 0.2;
  });


  `;  

  return (
<div>
<audio id="a1" controls autoPlay hidden loop>
  <source src="/silent_night.mp3" type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
  <h1 className="title">2022 北根布道所圣诞庆典</h1>
  <div className="card">


    <div className="card-page cart-page-front">
      <div className="card-page cart-page-outside">
      
  
      </div>
      <div className="card-page cart-page-inside">
        <span className="merry-christmas">
        <Image src="/pekan.jpg" fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt="card"/>
        </span>
      </div>
    </div>
    <div className="card-page-info">
      <p>
        欢迎大家出席于 25/12 日， 6.30 pm 位于 <Link href="https://goo.gl/maps/DuLQCC4L7pASjfv86" target="_blank">北根布道所</Link> 的平安夜聚会。
        <br/><br/> 与 <Link href="http://www.methodist.org.my/%E5%8D%97%E9%92%9F/%E4%BA%BA%E7%89%A9%E4%B8%93%E8%AE%BF/%E4%BB%A5%E6%AD%8C%E5%B8%83%E9%81%93%E2%80%94%E2%80%94%E5%BC%A0%E6%B1%89%E6%9E%97%E7%89%A7%E5%B8%88/" target="_blank">张汉林牧师</Link> 一起共度 美好的圣诞夜。
        <br/><br/>当晚也有聚餐。
        <br/><br/>欲知更多详情，请联络：<br/>
        <Link href="http://wa.me/60149014680" target="_blank">伍伟伦牧师</Link>（014-9014680） <br/>
        <Link href="http://wa.me/60138265093" target="_blank">Denny</Link>（013-8265093） <br/>
        <Link href="http://wa.me/60198253796" target="_blank">Leonard</Link>（019-8253796） <br/>
        <br/>欲出席者，<Link href="https://forms.gle/2W8RnFUoGiQHPmCy6" target="_blank">请点击报名</Link>
    </p>
    </div>
  </div>
  <span className="click-icon">
    <svg viewBox="0 0 40 45" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1165ae" d="M31.6 17.7V26c0 1.9-.7 3.7-2 5.1v.9c0 1.6-1.3 3-3 3h-8.4c-1.6 0-3-1.3-3-3 0-.6.5-1 1-1s1 .4 1 1c0 .5.4 1 1 1h8.4c.5 0 1-.4 1-1v-1.2-.3-.1c0-.1.1-.2.2-.3 1.1-1.1 1.7-2.5 1.7-4v-8.3c0-.3-.1-.5-.3-.7-.1-.1-.5-.4-1-.3-.4.1-.8.6-.8 1.1v2.4c0 .6-.5 1-1 1s-1-.4-1-1v-5.5c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c-.5 0-1 .5-1 1v5.5c0 .6-.5 1-1 1s-1-.4-1-1v-8.5c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3c-.5 0-1 .5-1 1v8.5c0 .6-.5 1-1 1s-1-.4-1-1V7.7c0-.3-.1-.5-.3-.7-.1-.1-.5-.4-1-.3-.4.1-.8.6-.8 1.1V20c0 .4-.2.8-.6.9-.4.2-.8.1-1.1-.2L11 18.1c-.6-.6-1.6-.6-2.2.1-.5.6-.4 1.5.2 2.1l7 7c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-7-7.1c-1.3-1.3-1.5-3.5-.3-4.8C8 16 9 15.5 10 15.5c.9 0 1.8.4 2.5 1l.9.9V7.9c0-1.4.9-2.7 2.3-3 1-.3 2.1 0 2.8.8.6.6.9 1.3.9 2.1V9c.3-.1.7-.2 1-.2.8 0 1.5.3 2.1.9s.9 1.3.9 2.1v.2c.3-.1.7-.2 1-.2.8 0 1.5.3 2.1.9s.9 1.3.9 2.1v.2c.1 0 .2-.1.3-.1 1-.3 2.1 0 2.8.8.8.5 1.1 1.3 1.1 2z" />
      <text x="20" y="43" className="click-text" fill="#1165ae" text-anchor="middle">
        点击阅读
      </text>
    </svg>
  </span>



<footer className="footer flex justify-center space-x-2">

<Link href="https://www.facebook.com/profile.php?id=100085909725418" target="_blank"  role="button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="icon w-7 h-7"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
</Link>

<Link href="https://www.instagram.com/pekan_methodist_chapel/" target="_blank" role="button">
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon w-7 h-7"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
</Link>

  </footer>

  <script type='text/javascript' dangerouslySetInnerHTML={{ __html: data }}
                />

</div>
  )
}
