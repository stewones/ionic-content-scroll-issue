import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Tab1Page } from '../src/tab1/tab1.page';

describe('Thread Page', () => {
  let fixture: ComponentFixture<Tab1Page>;
  let instance: Tab1Page;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
    });

    fixture = TestBed.createComponent(Tab1Page);
    instance = fixture.componentInstance;
  });

  test('increment and scroll to bottom', () => {
    instance.increment();
    fixture.detectChanges();

    const contentSpy = jest.spyOn(instance.content, 'scrollToBottom');

    expect(instance.value()).toBe(421);
    expect(contentSpy).toHaveBeenCalled();
  });
});
