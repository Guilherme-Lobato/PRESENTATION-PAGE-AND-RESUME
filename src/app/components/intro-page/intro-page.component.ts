import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent {

openpdf(): void{
  let curriculoPdf = 'assets/Currículo - Guilherme Lobato.pdf';

  window.open(curriculoPdf, '_blank');
}


}
