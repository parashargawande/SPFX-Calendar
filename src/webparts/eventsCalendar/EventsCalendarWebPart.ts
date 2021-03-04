import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  IPropertyPaneDropdownOption
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { SPComponentLoader } from '@microsoft/sp-loader';
// import * as jq from 'jquery';
require('./assets/bootstrap.min.css');
require('./assets/bootstrap-datepicker.standalone.min.css');
require('./Calendar.css');
require('jquery')
require('./assets/bootstrap-datepicker.min.js')
import * as $ from 'jquery';


import * as strings from 'EventsCalendarWebPartStrings';

export interface IEventsCalendarWebPartProps {
  description: string;
  eventsList: string;
  eventTypesList: string;
}
declare const window: any;

export default class EventsCalendarWebPart extends BaseClientSideWebPart<IEventsCalendarWebPartProps> {

  private lists: IPropertyPaneDropdownOption[];
  private listsDropdownDisabled: boolean = true;


  public constructor() {
    super();
    // window.CalendarProperties = this.properties;
  }

  public getProperties(): IEventsCalendarWebPartProps {
    return this.properties;
  }

  public render(): void {
    this.domElement.innerHTML = `
    <div class="container ">
    <div class="row py-3 background">
        <div class="calendar-main" id="calendar">
        </div>
    </div>
    <div id='row1' class="row row1">
        <div class="col col1">
            <div class="dot"></div><span class="indextitle">GM-Approval</span>
        </div>

        <div class="col col1">
            <span class="dot"></span><span class="indextitle">PO-Cutoffs</span>
        </div>
        <div class="col col1">
            <span class="dot"></span><span class="indextitle">US-Holidays</span>
        </div>
    </div>
    <div id='row2' class="row row1">
        <div class="col col1 mr-2">
            <span class="dot"></span><span class="indextitle">Test-label</span>
        </div>
        <div class="col col1">
            <span class="dot"></span><span class="indextitle">Test-label</span>
        </div>
        <div class="col col1">
            <span class="dot"></span><span class="indextitle">Test-label</span>
        </div>
    </div>
    </div>`;
    window.CalendarProperties = this.properties;
    require('./assets/Calendar.js')
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private loadLists(): Promise<IPropertyPaneDropdownOption[]> {
    return new Promise<IPropertyPaneDropdownOption[]>((resolve: (options: IPropertyPaneDropdownOption[]) => void, reject: (error: any) => void) => {
      var url = "https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists?$select=Title";
      var requestHeaders = { Accept: "application/json; odata=verbose" };
      $.ajax({
        url: url, // The file path.
        method: "GET",
        headers: requestHeaders,
        success: function (data) {
          var listArray = [];
          if (data.d.results.length > 0) {
            data.d.results.forEach(list => {
              listArray.push({
                key: list.Title,
                text: list.Title
              });
            });
          }
          resolve(listArray);
        },
        error: function (error) {
          reject(error);
        }
      });
    });
  }

  protected onPropertyPaneConfigurationStart(): void {
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'lists');
    this.loadLists()
      .then((listOptions: any): void => {
        this.lists = listOptions;
        this.listsDropdownDisabled = false;
        this.context.propertyPane.refresh();
        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        this.render();
      });
  }

  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: "Configuration",
              groupFields: [
                PropertyPaneDropdown('eventsList', {
                  label: "Select event list",
                  options: this.lists,
                  disabled: this.listsDropdownDisabled
                }),
                PropertyPaneDropdown('eventTypesList', {
                  label: "Select event type list",
                  options: this.lists,
                  disabled: this.listsDropdownDisabled
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
