import { Component } from '@angular/core';
import { ThemeEnum } from 'src/app/common/enums/theme.enum';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss']
})
export class HomeEventsComponent {
  theme = ThemeEnum.LIGHT;

}
