import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent {

  images = ['abstract-building.jpg', 'woman-macbook.jpg', 'macbook.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Ready to start',
    'Born to code'
  ];

  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      },  10);
    }, 8000);
  }
}
