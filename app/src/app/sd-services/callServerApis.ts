/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class callServerApis {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_callServerApis

  async dynamicRequest(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          receivedData: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_aZSTK5BcBNC5jJm9(bh);
      //appendnew_next_dynamicRequest
      return (
        // formatting output variables
        {
          input: {},
          local: {
            receivedData: bh.local.receivedData,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_alQ4JDGbxbp70Zlt');
    }
  }

  //appendnew_flow_callServerApis_start

  async sd_aZSTK5BcBNC5jJm9(bh) {
    try {
      bh.input.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_uFfzVvBAauUEjRTo(bh);
      //appendnew_next_sd_aZSTK5BcBNC5jJm9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aZSTK5BcBNC5jJm9');
    }
  }

  async sd_uFfzVvBAauUEjRTo(bh) {
    try {
      bh.apiUrl = bh.input.ssdUrl + 'getAllTravelRequests';
      bh = await this.sd_hUBaFoLrD4z6GgAt(bh);
      //appendnew_next_sd_uFfzVvBAauUEjRTo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uFfzVvBAauUEjRTo');
    }
  }

  async sd_hUBaFoLrD4z6GgAt(bh) {
    try {
      let requestOptions = {
        url: bh.apiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.receivedData = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_hUBaFoLrD4z6GgAt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hUBaFoLrD4z6GgAt');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_callServerApis_Catch
}
