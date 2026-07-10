import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  template: `
    <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
      <ng-icon [name]="benefit.icon"
        size="40px" 
        class="text-green-700">
      </ng-icon>
      <h3 class="text-xl font-bold text-gray-900">{{ benefit.title }}</h3>
      <p class="text-gray-600 leading-relaxed text-sm sm:text-base">{{ benefit.description }}</p>
    </div>
  `,
  imports: [NgIcon]
})
export class BenefitCardComponent {
  @Input({ required: true }) benefit!: { icon: string; title: string; description: string };
}
