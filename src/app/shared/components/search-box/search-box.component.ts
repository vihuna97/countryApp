import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{
      
      @Input()
      public placeholder: string = ''
      
      private debouncer = new Subject<string>;

      @Output()
      public onValue = new EventEmitter<string>();

      @Output()
      public onDebounce = new EventEmitter<string>();

      @ViewChild('inputTag')
      public inputTag!: ElementRef<HTMLInputElement>;
      

      ngOnInit(): void {
        this.debouncer.pipe(debounceTime(300)).subscribe(value => {this.onDebounce.emit(value)})
      }

      onKeyPress(word:string){
        this.debouncer.next(word);
      }

      public wordSearched():void{
          const tag = this.inputTag.nativeElement.value;
          this.onValue.emit(tag);
     }
}
