import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  imageSrc = 'assets/img/foto1.png';

  onMouseEnter() {
    this.imageSrc = 'assets/img/foto2.png';
  }

  onMouseLeave() {
    this.imageSrc = 'assets/img/foto1.png';
  }
}
