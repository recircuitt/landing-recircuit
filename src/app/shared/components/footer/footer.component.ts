import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroGlobeAmericas} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app_footer',
  standalone: true,
  imports: [NgIconComponent],
    viewProviders:[provideIcons({
    heroGlobeAmericas
  })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
