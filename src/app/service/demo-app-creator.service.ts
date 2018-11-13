import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Runtime } from 'projects/ngx-launcher/src/lib/launcher.module.js';
import { Capability } from 'projects/ngx-launcher/src/lib/model/capabilities.model';
import { AppCreatorService } from 'projects/ngx-launcher/src/public_api';

const mockCapabilities = require('../mock/demo-capabilities.json');
const mockRuntime = require('../mock/demo-runtimes.json');

@Injectable()
export class DemoAppCreatorService implements AppCreatorService {

  getCapabilities(): Observable<Capability[]> {
    return of(mockCapabilities).pipe(
      delay(2000)
     );
  }

  getRuntimes(): Observable<Runtime[]> {
    return of(mockRuntime).pipe(delay(2000));
  }

  getFilteredCapabilities(): Observable<Capability[]> {
    return this.getCapabilities().pipe(map(capabilities => this.filter(capabilities)));
  }

  private filter(capabilities: Capability[]): Capability[] {
    for (let capability of capabilities) {
      delete capability.props.runtime;
    }
    return capabilities;
  }

}