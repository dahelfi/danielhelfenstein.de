import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['laptop-g7677161ed_1920.jpg', 'technology-ga2bc0d0da_1920.jpg', 'oxford-gbff85860c_1920.jpg'];
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
      }, 10);
    }, 5000);
  }
}
