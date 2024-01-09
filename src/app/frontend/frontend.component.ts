import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrontendInterface } from '../models/frontend.model';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.css',
})
export class FrontendComponent {
  myfrontendInterface: FrontendInterface[] = [
    {
      photo: `${'https://images.pexels.com/photos/19572404/pexels-photo-19572404/free-photo-of-bird-summer-beak-feathers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`,
      name: 'sara',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
    },
    {
      photo: `${'https://images.pexels.com/photos/19770768/pexels-photo-19770768/free-photo-of-two-hot-air-balloons-flying-over-the-rocky-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`,
      name: 'sara',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu dolores et ea rebum. Stet clita kasd gubergren',
    },
    {
      photo: `${'https://images.pexels.com/photos/16453280/pexels-photo-16453280/free-photo-of-wild-eagle-sitting-on-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`,
      name: 'sara',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu dolores et ea rebum. Stet clita kasd gubergren',
    },
    {
      photo: `${'https://images.pexels.com/photos/18078541/pexels-photo-18078541/free-photo-of-close-up-of-flying-seagulls-with-kiz-kulesi-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`,
      name: 'sara',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu dolores et ea rebum. Stet clita kasd gubergren',
    },
    {
      photo: `${'https://images.pexels.com/photos/7351036/pexels-photo-7351036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`,
      name: 'sara',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu dolores et ea rebum. Stet clita kasd gubergren',
    },
    {
      photo: `${'https://images.pexels.com/photos/17669483/pexels-photo-17669483/free-photo-of-pears-growing-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`,
      name: 'sara',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu dolores et ea rebum. Stet clita kasd gubergren',
    },
  ];
}
