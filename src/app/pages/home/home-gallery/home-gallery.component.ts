import { Component } from '@angular/core';
import { ThemeEnum } from 'src/app/common/enums/theme.enum';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent {
  theme = ThemeEnum.LIGHT

}
