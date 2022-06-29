//append_imports_start

import * as sd_S0tMzq9En1SP0UfM from 'app/sd-services/apiServeiceCall'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_S0tMzq9En1SP0UfM: sd_S0tMzq9En1SP0UfM.apiServeiceCall
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
