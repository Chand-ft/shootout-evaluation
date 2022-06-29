/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
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
  selector: 'bh-dialog',
  templateUrl: './dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialogComponent {
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
      this.sd_CI0XeAizu3rLR6r3(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CI0XeAizu3rLR6r3(bh) {
    try {
      bh = this.sd_ZlcERqwPB9cVfttJ(bh);
      //appendnew_next_sd_CI0XeAizu3rLR6r3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CI0XeAizu3rLR6r3');
    }
  }

  addDependency(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mAyvV4xyX49rSRvW(bh);
      //appendnew_next_addDependency
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vKNYkhZqv5cxmD9c');
    }
  }

  addTravelDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TvvVEKTTJMLEYRjR(bh);
      //appendnew_next_addTravelDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mwelngNrBV6sYSGf');
    }
  }

  addAccommodationDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HO9X20PatdWiMF2f(bh);
      //appendnew_next_addAccommodationDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IkqoUvGeIBpoM8yu');
    }
  }

  addVehicleDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_jDebX8Fsgq1cg5ME(bh);
      //appendnew_next_addVehicleDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iODUuAvjxNDzqH2W');
    }
  }

  //appendnew_flow_dialogComponent_start

  sd_ZlcERqwPB9cVfttJ(bh) {
    try {
      this.page.FormArray = FormArray;
      this.page.FormBuilder = this.__page_injector__.get(FormBuilder);
      this.page.FormControl = FormControl;
      this.page.FormGroup = FormGroup;
      this.page.Validators = Validators;
      bh = this.sd_SxkWzpM7TZk3kDbW(bh);
      //appendnew_next_sd_ZlcERqwPB9cVfttJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZlcERqwPB9cVfttJ');
    }
  }

  sd_SxkWzpM7TZk3kDbW(bh) {
    try {
      this.page.dependancy = {};
      this.page.travelDetail = {};
      bh = this.sd_qJzVyIrl6BN79EAc(bh);
      //appendnew_next_sd_SxkWzpM7TZk3kDbW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SxkWzpM7TZk3kDbW');
    }
  }

  sd_qJzVyIrl6BN79EAc(bh) {
    try {
      const page = this.page; // Dependancy fields
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
      this.sd_Ra5TBuc5Y17rHXKl(bh);
      //appendnew_next_sd_qJzVyIrl6BN79EAc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qJzVyIrl6BN79EAc');
    }
  }

  sd_Ra5TBuc5Y17rHXKl(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.requestTravelForm);
      //appendnew_next_sd_Ra5TBuc5Y17rHXKl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ra5TBuc5Y17rHXKl');
    }
  }

  sd_mAyvV4xyX49rSRvW(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['basicDetails'].controls['dependencies']
      );
      let newGroup = page.FormBuilder.group(page.dependancy);
      arrayControl.push(newGroup);
      //appendnew_next_sd_mAyvV4xyX49rSRvW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mAyvV4xyX49rSRvW');
    }
  }

  sd_TvvVEKTTJMLEYRjR(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['travelDetails']
      );
      let newGroup = page.FormBuilder.group(page.travelDetail);
      arrayControl.push(newGroup);
      //appendnew_next_sd_TvvVEKTTJMLEYRjR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TvvVEKTTJMLEYRjR');
    }
  }

  sd_HO9X20PatdWiMF2f(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['accommodationDetails']
      );
      let newGroup = page.FormBuilder.group(page.accommodationDetail);
      arrayControl.push(newGroup);
      //appendnew_next_sd_HO9X20PatdWiMF2f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HO9X20PatdWiMF2f');
    }
  }

  sd_jDebX8Fsgq1cg5ME(bh) {
    try {
      const page = this.page;
      const arrayControl = <FormArray>(
        page.requestTravelForm.controls['vehicleDetails']
      );
      let newGroup = page.FormBuilder.group(page.vehicleDetail);
      arrayControl.push(newGroup);
      //appendnew_next_sd_jDebX8Fsgq1cg5ME
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jDebX8Fsgq1cg5ME');
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
  //appendnew_flow_dialogComponent_Catch
}
