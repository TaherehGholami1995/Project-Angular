import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryInterface } from '../models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  // private api: string = 'https://tahereh.free.beeceptor.com/api/photo';
  // private api: string = 'https://angular-test.free.beeceptor.com/api/gallery/1';
  private api: string = 'https://tahereh2.free.beeceptor.com/api/contact-form';


  constructor(private http: HttpClient) {}

  getPhotos(): Observable<GalleryInterface[]> {
    return this.http.get(this.api) as Observable<GalleryInterface[]>;
  }
}



// api

// [
//   {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/18463824/pexels-photo-18463824/free-photo-of-majestic-peacock-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
// "numberStar":3.5
//   },

//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/16061696/pexels-photo-16061696/free-photo-of-a-grass-field-and-rocky-mountains-covered-in-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":4.5

//   },

//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/10155090/pexels-photo-10155090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":5
//   },
//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/19885419/pexels-photo-19885419/free-photo-of-aerial-view-of-a-white-surfboard-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":2
//   },
//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/19557055/pexels-photo-19557055/free-photo-of-snowy-peak-of-the-pic-du-midi-dossau-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":3.5
//   },

 
//     {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/18463824/pexels-photo-18463824/free-photo-of-majestic-peacock-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":3.5
//   },

 
//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/4969543/pexels-photo-4969543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":4.5
//   },
//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/19699383/pexels-photo-19699383/free-photo-of-back-view-of-a-young-woman-in-a-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":5
//   },

//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/19295599/pexels-photo-19295599/free-photo-of-sailboat-swimming-by-the-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":3.5
//   },

//  {
    
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://images.pexels.com/photos/19749589/pexels-photo-19749589/free-photo-of-frozen-stream-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//  ,
// "numberStar":4
//   }










// ]