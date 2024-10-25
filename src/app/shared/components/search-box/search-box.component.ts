import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debounceSubscription: Subscription = new Subscription()

  @Input()
  public placeholder: string = ''
  @Input()
  public initialValue: string = ''

  @Output()
  public onValue = new EventEmitter<string>()
  @Output()
  public onDebounce = new EventEmitter<string>()


  ngOnInit(): void {
    this.debounceSubscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe((value) => {
        this.onDebounce.emit(value)

      })

  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }
}
