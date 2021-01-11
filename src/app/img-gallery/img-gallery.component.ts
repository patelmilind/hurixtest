import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ImggalleryService } from '../service/imggallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss']
})

export class ImgGalleryComponent implements OnInit {

  @ViewChild('closebutton') closebutton;

  imgUploadform: FormGroup;

  constructor(public fb: FormBuilder,private gallerydata: ImggalleryService,private router: Router) {}

  ngOnInit(){
    
    this.imgUploadform = this.fb.group({
      title: ['',[Validators.required]],
      file: [null, [Validators.required]],
      fileSource:['', [Validators.required]]
      });

      this.gallerydata.convertdefaultimg();
  }

  galleryImgTitle = this.gallerydata.getgalleryData();

  imageSrc: string;

  get form_controls(){
    return this.imgUploadform.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.imgUploadform.patchValue({
          fileSource: reader.result
        });
   
      };
    }
  }

  uploadNewimage()
  {
    this.gallerydata.uploadImg(this.imgUploadform.value);
    this.imgUploadform.reset();
    this.imageSrc = null;
    this.closebutton.nativeElement.click();
  }

  delete_img(indexEle :number)
  {
    var r = confirm("Are you sure!!");
    if (r == true) {
      this.gallerydata.deleteImg(indexEle);
    }
  }

}
