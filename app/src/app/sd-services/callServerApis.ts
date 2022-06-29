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

  async sd_ezWc0Bhlxk62pEbe(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          receivedData: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_zVyjgbIlMUPvyz0S(bh);
      //appendnew_next_sd_ezWc0Bhlxk62pEbe
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
      return await this.errorHandler(bh, e, 'sd_ezWc0Bhlxk62pEbe');
    }
  }

  //appendnew_flow_callServerApis_start

  async sd_zVyjgbIlMUPvyz0S(bh) {
    try {
      bh.input.ssUrl = bh.system.environment.properties.ssdURL;
      bh = await this.sd_LcSripn2WquTdA4m(bh);
      //appendnew_next_sd_zVyjgbIlMUPvyz0S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zVyjgbIlMUPvyz0S');
    }
  }

  async sd_LcSripn2WquTdA4m(bh) {
    try {
      bh.apiUrl = bh.input.ssdUrl + 'getAllTravelRequests';
      bh = await this.sd_l6f9HD6g2tAPWhAF(bh);
      //appendnew_next_sd_LcSripn2WquTdA4m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LcSripn2WquTdA4m');
    }
  }

  async sd_l6f9HD6g2tAPWhAF(bh) {
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
      //appendnew_next_sd_l6f9HD6g2tAPWhAF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l6f9HD6g2tAPWhAF');
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
