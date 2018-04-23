import React, { Component } from 'react';
import img1 from './git.jpeg';
import img2 from './images.jpeg';
import img3 from './image.jpeg';


export class ImagesComponent extends Component{
   constructor(props){
       super(props);
           this.imgArr = [img1,img2,img3];
           this.state = {
               index : 0,
               image : this.imgArr[0]
           }
   }
   next= () => {
       let currentIndex = this.state.index;
       let newIndex = currentIndex + 1;
       if(newIndex === this.imgArr.length){
           newIndex = 0;
       }
       this.setState({
               index : newIndex,
               image : this.imgArr[newIndex]
       });
        }

      prev=()=>{
       let currentIndex = this.state.index;
       let newIndex = currentIndex - 1;
       if(newIndex < 0){
           newIndex = this.imgArr.length - 1;
       }        this.setState({
               index : newIndex,
               image : this.imgArr[newIndex]
       });
      }

   render(){
       return(<div>
           <img src = {this.state.image} alt="img" width ="500" height ="500"/>
           <br/>
           <button onClick = {this.prev} type="submit">previous</button>
           <button onClick = {this.next} type="submit">next</button>
       </div>);
   }}
