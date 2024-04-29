/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/component-class-suffix */

// rxjs subject
import { BehaviorSubject } from 'rxjs';

import {
  ChangeDetectorRef,
  Component,
  inject,
  signal,
  ViewChild,
} from '@angular/core';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

export const streamer$ = new BehaviorSubject<number>(420);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ExploreContainerComponent,
  ],
})
export class Tab1Page {
  cdr = inject(ChangeDetectorRef);

  @ViewChild('content') content!: IonContent;

  value = signal(0);

  // a rxjs stream
  stream$ = streamer$.subscribe({
    next: (value) => {
      this.value.set(value);
      this.content.scrollToBottom();
    },
  });

  /**
   * if you remove the initialization of stream$ above and uncomment the following
   * it will fix the issue in the browser but test will still fail
   */
  ngAfterViewInit() {
    // this.stream$ = streamer$.subscribe({
    //   next: (value) => {
    //     this.value.set(value);
    //     this.content.scrollToBottom();
    //   },
    // });
  }

  increment() {
    streamer$.next(this.value() + 1);
  }
}
