import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Observable } from 'rxjs';
import { GalleryInterface } from '../models/gallery.model';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.css',
})
export class FrontendComponent implements OnInit {
  photos?: Observable<GalleryInterface[]>;
  constructor(private service: GalleryService) {}
  ngOnInit(): void {
    this.photos = this.service.getPhotos();
  }
}
