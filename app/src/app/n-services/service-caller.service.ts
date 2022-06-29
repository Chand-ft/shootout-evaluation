//append_imports_start

import * as sd_zZFy7Nux3ny9c2RV from 'app/sd-services/callServerApis'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_zZFy7Nux3ny9c2RV: sd_zZFy7Nux3ny9c2RV.callServerApis
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
