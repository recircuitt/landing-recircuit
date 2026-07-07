import { Component } from '@angular/core';
import { Benefit } from './models/Benefit';
import { CommonModule } from '@angular/common';
import { BenefitCardComponent } from './components/benefit-card/benefit-card.component';

@Component({
  selector: 'benefits',
  standalone: true,
  imports: [CommonModule,BenefitCardComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: '🌱',
      title: 'Impacto Ambiental Real',
      description: 'Mitigamos activamente la huella de carbono organizacional. Evitamos que plásticos complejos y metales pesados contaminen ecosistemas, canalizándolos hacia un ciclo productivo cerrado.'
    },
    {
      icon: '⚙️',
      title: 'Personalización Absoluta',
      description: 'Desarrollamos hardware de ingeniería inversa adaptado a requerimientos técnicos específicos. No implementamos soluciones genéricas; diseñamos arquitectura de hardware a medida.'
    },
    {
      icon: '📈',
      title: 'Optimización de Recursos',
      description: 'Maximizamos el ciclo de vida de los activos tecnológicos de su organización. El upcycling estratégico reduce drásticamente los costos de adquisición de infraestructura nueva.'
    }
  ];
}
