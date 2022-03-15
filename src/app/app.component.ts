import { Component } from '@angular/core';
import heic2any from 'heic2any';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heicUpload';
  base64Img: any;
  heicConvert(event: any) {
    let file = event.target.files[0];
    console.log(file);
    heic2any({
      blob: file,
      // it can be "image/jpeg", "image/png" or "image/gif"
      // defaults to "image/png"
      toType: "image/png"
    })
      .then((convertHeicTopng: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(convertHeicTopng);
        reader.onloadend = () => {
          var base64data = reader.result;
          this.base64Img = base64data
          console.log(base64data);
        }
      })
  }
}
