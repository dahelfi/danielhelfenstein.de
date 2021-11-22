import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['laptop-g7677161ed_1920.jpg', 'technology-ga2bc0d0da_1920.jpg', 'oxford-gbff85860c_1920.jpg'];
  headlines = ['Bring engeneering to the next level', 'Born to code', 'Graduated at Havard'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage(){
    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() =>{
        this.showImage = true;
      },20)
    }, 5000);
  }

}
