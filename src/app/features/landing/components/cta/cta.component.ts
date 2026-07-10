import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
    sendEmail(event:Event){
    event.preventDefault();

      emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', event.target as HTMLFormElement, 'TU_PUBLIC_KEY')
      .then(() => {
        alert('¡Correo enviado con éxito!');
      }, (error) => {
        console.error('Error al enviar:', error);
      });
  }
}
