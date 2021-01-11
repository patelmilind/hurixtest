import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const imageGalleryArray = [];

@Injectable({
  providedIn: 'root'
})

export class ImggalleryService {

  constructor(private http: HttpClient) { }

  convertdefaultimg()
  {
    for(let i=1;i<=10;i++)
    {
    this.http.get('/assets/images/'+i+'.jpg', { responseType: 'blob' })
      .subscribe(res => {;
        const reader = new FileReader();
      
        reader.onloadend = () => {
          var base64data = reader.result;                
            //console.log(base64data);
            var defaultData = {path:base64data,title:'Example Title'+i}
            imageGalleryArray.push(defaultData);
        }
        reader.readAsDataURL(res);
      });
    }
  }

  getgalleryData()
  {
    return imageGalleryArray;
  }

  uploadImg(data : any)
  {
    var datatobepushed = {path:data.fileSource,title:data.title};
    imageGalleryArray.push(datatobepushed);
  }

  deleteImg(index : number)
  {
    imageGalleryArray.splice(index,1)
  }

}
