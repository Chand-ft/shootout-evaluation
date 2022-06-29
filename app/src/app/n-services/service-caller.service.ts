//append_imports_start

import * as sd_NSEHjZB12zVi0cFC from 'app/sd-services/callServerApis'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_NSEHjZB12zVi0cFC: sd_NSEHjZB12zVi0cFC.callServerApis
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
