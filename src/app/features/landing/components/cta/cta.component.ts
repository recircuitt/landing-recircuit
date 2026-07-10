import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'cta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
    sendEmail(event:Event){
    event.preventDefault();

      emailjs.sendForm('service_wy20qxh', 'template_x29py1f', event.target as HTMLFormElement, 'rPz1Udpgo-Vl-BsqT')
      .then(() => {
        console.log("Enviado con exito")
      }, (error) => {
        console.error('Error al enviar:', error);
      });

      this.resetForm();
  }

  resetForm() {
    this.formData = { name: '', email: '', message: '' };
  }
}
