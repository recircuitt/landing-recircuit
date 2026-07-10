import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'uvp',
  standalone: true,
  imports: [CommonModule, NgClass ],
  templateUrl: './uvp.component.html',
  styleUrl: './uvp.component.css'
})
export class UvpComponent {
statements: string[] = [
    `"Por cada componente electrónico que recuperamos, mitigamos el impacto ambiental y desarrollamos <span class="text-green-700 font-bold">tecnología funcional a medida</span>. No solo protegemos el planeta: transformamos activos obsoletos en soluciones personalizadas de alto valor añadido."`,
    
    `"A través del <span class="text-green-700 font-bold">Upcycling Electrónico</span>, diseñamos y fabricamos productos tecnológicos a pedido adaptados a requerimientos operativos corporativos, reduciendo drásticamente costos y huella de carbono."`,
    
    `"Mediante nuestro <span class="text-green-700 font-bold">Software Eco-Inteligente</span>, desarrollamos plataformas digitales especializadas que permiten a las organizaciones medir, gestionar y optimizar su impacto ecológico real."`
  ];

  currentIndex: number = 0;
  private intervalId: any;
  isVisible: boolean = true;

  ngOnInit(): void {
    // Cambia el texto automáticamente cada 5 segundos
    this.intervalId = setInterval(() => {
      this.rotateText();
    }, 5000);
  }

  rotateText(): void {
    // Desvanece el texto actual (fade out)
    this.isVisible = false;

    setTimeout(() => {
      // Cambia al siguiente texto
      this.currentIndex = (this.currentIndex + 1) % this.statements.length;
      // Vuelve a mostrarlo (fade in)
      this.isVisible = true;
    }, 300); // 300ms coincide con la duración de la transición en el HTML
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
