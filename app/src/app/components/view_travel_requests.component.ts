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
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_travel_requests',
  templateUrl: './view_travel_requests.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_travel_requestsComponent {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_KOVXOnK6cV7gj979(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KOVXOnK6cV7gj979(bh) {
    try {
      bh = this.initializeTable(bh);
      //appendnew_next_sd_KOVXOnK6cV7gj979
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KOVXOnK6cV7gj979');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent: filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QB6d44LFvxAJuWT');
    }
  }

  getAllRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Nj7JYJQRKun10fTt(bh);
      //appendnew_next_getAllRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FVFM6b18mqiSTaD8');
    }
  }

  rowChecked(rowType = '', rowData: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { rowType: rowType, rowData: rowData };
      bh.local = {};
      bh = this.sd_xTBFQhKigY97fATB(bh);
      //appendnew_next_rowChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zHqPHtCefjo7O1KL');
    }
  }

  goTo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_e2jI7LQDxK8XdWjP(bh);
      //appendnew_next_goTo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T5JMllQjltZ9ihQX');
    }
  }

  openDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zarkFQ0ecxlHbS0s');
    }
  }

  //appendnew_flow_view_travel_requestsComponent_start

  initializeTable(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_initializeTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_euaePgZyuOERpVdN');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.travelRequestsData = [];
      this.page.isHeaderChecked = false;
      this.page.filteredTabledData = [];
      bh = this.sd_at2x8c2BiP90Q9zo(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r1j8FWohTKWPX67C');
    }
  }

  sd_at2x8c2BiP90Q9zo(bh) {
    try {
      let outputVariables = this.getAllRequests();

      //appendnew_next_sd_at2x8c2BiP90Q9zo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_at2x8c2BiP90Q9zo');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3m4hJPLPaowq9zBr');
    }
  }

  async sd_Nj7JYJQRKun10fTt(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.getTravelRequests();
      this.page.travelRequestsData = outputVariables.local.receivedData;

      bh = this.setTableDatasource(bh);
      //appendnew_next_sd_Nj7JYJQRKun10fTt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Nj7JYJQRKun10fTt');
    }
  }

  setTableDatasource(bh) {
    try {
      const page = this.page;
      page.travelRequestsData.forEach((obj, i) => {
        let tempObj = {
          travelTitle: obj.basicDetails.travelRequestTitle,
          requestType: obj.basicDetails.travelReqType,
          fromDate: obj.travelDetails[0].fromDate,
          toDate: obj.travelDetails[0].toDate,
          status: obj.travelDetails[0].status,
          // Add a variable to keep track of checked rows
          checked: false,
          // Add indexx to keep track of each row
          index: i,
        };

        page.filteredTabledData.push(tempObj);
      });

      // Update Table
      page.tableData = new MatTableDataSource(page.filteredTabledData);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_setTableDatasource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uPzoWgHpbxik0uGR');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UHh7ERTnGX4wuAzy');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hhelqou3YkSwpMEn');
    }
  }

  sd_xTBFQhKigY97fATB(bh) {
    try {
      const page = this.page;
      if (bh.input.rowType === 'row') {
        let bool = page.filteredTabledData[bh.input.rowData.index]['checked'];
        page.filteredTabledData[bh.input.rowData.index]['checked'] = bool
          ? true
          : false;
      } else {
        page.isHeaderChecked = !page.isHeaderChecked;
        page.filteredTabledData.forEach(
          (item) => (item.checked = page.isHeaderChecked)
        );
      }
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_sd_xTBFQhKigY97fATB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xTBFQhKigY97fATB');
    }
  }

  async sd_e2jI7LQDxK8XdWjP(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/new-request');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_e2jI7LQDxK8XdWjP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e2jI7LQDxK8XdWjP');
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
  //appendnew_flow_view_travel_requestsComponent_Catch
}
