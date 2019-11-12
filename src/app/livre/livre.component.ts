import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
val:number=0;
@Input() nom:string;
@Input() couv:string;
@Input() prix:number;
@Input() date:Date;

  constructor() { }

  ngOnInit() {
  }

}
