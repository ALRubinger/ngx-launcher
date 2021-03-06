import { Component, Input } from '@angular/core';
import { Broadcaster } from 'ngx-base';
import { Projectile } from '../../model/projectile.model';
import { ReviewComponent } from '../../review.component';

@Component({
  selector: 'f8launcher-gitprovider-review',
  templateUrl: './gitprovider-review.component.html'
})
export class GitproviderReviewComponent extends ReviewComponent {
  constructor(broadcaster: Broadcaster, projectile: Projectile<any>) {
    super(broadcaster, projectile);
  }
}
