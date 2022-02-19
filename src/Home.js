import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import  img1 from './about-sec-img.png'
import Card from './Card';



const Home = () => {


    useEffect(() => {
        
      Aos.init();  
    }, [ ])




    return(
    <section className='py-4 py-lg-5 container'>
        <div className='row'>


               <Card  aos='zoom-in' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-up' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-down' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-zoom-in' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-up' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-up' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-zoom-in' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-up' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-zoom-in' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-up' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-up' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='fade-zoom-in' aos-offset="100" img1={img1} desc='desc' title='title'/>
               <Card  aos='flip-left' aos-offset="100" img1={img1} desc='desc' title='title'/>
      
     </div>
        </section>
    )
}

export default Home
