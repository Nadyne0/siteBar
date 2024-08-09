import { Component, Input } from '@angular/core';
import { ThemeEnum } from 'src/app/common/enums/theme.enum';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent {
  @Input() title: string = '';
  @Input() theme: ThemeEnum = ThemeEnum.DARK;
}
