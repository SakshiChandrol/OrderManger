import { TestBed } from '@angular/core/testing';

import { NotificationServiceService } from './notification.service.service';
import { ToastrModule } from 'ngx-toastr';

describe('NotificationServiceService', () => {
  let service: NotificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    });
    service = TestBed.inject(NotificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
