//append_imports_start

import * as sd_hvc7KIIai1JzznZB from 'app/sd-services/callServerApis'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_hvc7KIIai1JzznZB: sd_hvc7KIIai1JzznZB.callServerApis
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
