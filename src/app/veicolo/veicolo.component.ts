import { Component, Input } from '@angular/core';
import { veicolo } from '../app.component';

@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class veicoloComponent {
  @Input() veicolo: veicolo;
}
