import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactNo:number = 919878987890

  imgPath:string = "assets/Bird.jpg"

  changeBg()
  {
  
  }

  handleSubmit()
  {
    this.imgPath = "assets/img.png"
  }

  againChangeImage()
  {
    this.imgPath = "assets/Bird.jpg"
  }
}


