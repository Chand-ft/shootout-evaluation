/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-new_travel_request',
  templateUrl: './new_travel_request.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class new_travel_requestComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_SXnm4ototMyRWa27(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_SXnm4ototMyRWa27(bh) {
    try {
      bh = this.sd_Wk8sdZqsBt1wmfF9(bh);
      //appendnew_next_sd_SXnm4ototMyRWa27
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SXnm4ototMyRWa27');
    }
  }

  addDependency(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_XrFR64MxFw8WRX1n(bh);
      //appendnew_next_addDependency
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pOi8qdxq7ZVPw1xl');
    }
  }

  addTravelDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_S8qK2QjnoRrsECFY(bh);
      //appendnew_next_addTravelDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_babs2yNEnEikhsgG');
    }
  }

  addAccommodationDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6mMB2ZvIMfS5lS4Y(bh);
      //appendnew_next_addAccommodationDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cVcCh0afmv5LRKSh');
    }
  }

  addVehicleDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_EryEjZ1rUB1kltXI(bh);
      //appendnew_next_addVehicleDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IUcGmKCZPv1AQEaS');
    }
  }

  //appendnew_flow_new_travel_requestComponent_start

  sd_Wk8sdZqsBt1wmfF9(bh) {
    try {
      this.page.FormArray = FormArray;
      this.page.FormBuilder = this.__page_injector__.get(FormBuilder);
      this.page.FormControl = FormControl;
      this.page.FormGroup = FormGroup;
      this.page.Validators = Validators;
      bh = this.sd_29SaoqdRQU5PNx7n(bh);
      //appendnew_next_sd_Wk8sdZqsBt1wmfF9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wk8sdZqsBt1wmfF9');
    }
  }

  sd_29SaoqdRQU5PNx7n(bh) {
    try {
      this.page.dependancy = {};
      this.page.travelDetail = {};
      this.page.purposeOFTravel = {};
      this.page.travelMode = {};
      bh = this.sd_qxsXphkrL05AuyGd(bh);
      //appendnew_next_sd_29SaoqdRQU5PNx7n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_29SaoqdRQU5PNx7n');
    }
  }

  sd_qxsXphkrL05AuyGd(bh) {
    try {
      const page = this.page; //purpose of travel
      page.purposeOFTravel = [
        { viewValue: 'Meeting' },
        { viewValue: 'Conference' },
        { viewValue: 'Demo' },
      ];

      //TravelMode
      page.travelMode = [
        { viewValue: 'car' },
        { viewValue: 'flight' },
        { viewValue: 'Bus' },
      ];

      // Dependancy fields
      page.dependancy = {
        firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        dateOfBirth: [null, Validators.compose([Validators.required])],
        gender: ['', Validators.compose([Validators.required])],
      };
      // Travel Details field
      page.travelDetail = {
        fromCity: ['', Validators.compose([Validators.required])],
        toCity: ['', Validators.compose([Validators.required])],
        travelMode: ['', Validators.compose([Validators.required])],
        fromDate: [null, Validators.compose([Validators.required])],
        toDate: [null, Validators.compose([Validators.required])],
        preferredTime: ['', Validators.compose([Validators.required])],
      };
      // Accommodation Details Fields
      page.accommodationDetail = {
        city: ['', Validators.compose([Validators.required])],
        checkInDate: [null, Validators.compose([Validators.required])],
        checkOutDate: [null, Validators.compose([Validators.required])],
        accommodationType: ['', Validators.compose([Validators.required])],
        checkInTime: ['', Validators.compose([Validators.required])],
        checkOutTime: ['', Validators.compose([Validators.required])],
      };
      // Vehicle Details Fields
      page.vehicleDetail = {
        vehicleType: ['', Validators.compose([Validators.required])],
        pickUpLocation: ['', Validators.compose([Validators.required])],
        dropOffLocation: ['', Validators.compose([Validators.required])],
        pickUpDate: [null, Validators.compose([Validators.required])],
        pickUpTime: ['', Validators.compose([Validators.required])],
      };

      page.requestTravelForm = new page.FormGroup({
        basicDetails: page.FormBuilder.group({
          travelRequestTitle: ['', Validators.compose([Validators.required])],
          travelRequestType: ['', Validators.compose([Validators.required])],
          travelType: ['', Validators.compose([Validators.required])],
          purposeOfTravel: ['', Validators.compose([Validators.required])],
          dependencies: page.FormBuilder.array([]),
        }),
        travelDetails: page.FormBuilder.array([
          page.FormBuilder.group(page.travelDetail),
        ]),
        accommodationDetails: page.FormBuilder.array([
          page.FormBuilder.group(page.accommodationDetail),
        ]),
        vehicleDetails: page.FormBuilder.array([
          page.FormBuilder.group(page.vehicleDetail),
        ]),
      });
      this.sd_dQsRmpqppMVVR8kP(bh);
      //appendnew_next_sd_qxsXphkrL05AuyGd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qxsXphkrL05AuyGd');
    }
  }

  sd_dQsRmpqppMVVR8kP(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.requestTravelForm);
      //appendnew_next_sd_dQsRmpqppMVVR8kP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQsRmpqppMVVR8kP');
    }
  }

  sd_XrFR64MxFw8WRX1n(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['basicDetails'].controls['dependencies']
      );
      let newGroup = page.FormBuilder.group(page.dependancy);
      arrayControl.push(newGroup);
      //appendnew_next_sd_XrFR64MxFw8WRX1n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XrFR64MxFw8WRX1n');
    }
  }

  sd_S8qK2QjnoRrsECFY(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['travelDetails']
      );
      let newGroup = page.FormBuilder.group(page.travelDetail);
      arrayControl.push(newGroup);
      //appendnew_next_sd_S8qK2QjnoRrsECFY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S8qK2QjnoRrsECFY');
    }
  }

  sd_6mMB2ZvIMfS5lS4Y(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['accommodationDetails']
      );
      let newGroup = page.FormBuilder.group(page.accommodationDetail);
      arrayControl.push(newGroup);
      //appendnew_next_sd_6mMB2ZvIMfS5lS4Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6mMB2ZvIMfS5lS4Y');
    }
  }

  sd_EryEjZ1rUB1kltXI(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['vehicleDetails']
      );
      let newGroup = page.FormBuilder.group(page.vehicleDetail);
      arrayControl.push(newGroup);
      //appendnew_next_sd_EryEjZ1rUB1kltXI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EryEjZ1rUB1kltXI');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_new_travel_requestComponent_Catch
}
