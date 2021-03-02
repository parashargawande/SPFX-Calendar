import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { SPComponentLoader } from '@microsoft/sp-loader';
// import * as jq from 'jquery';
require('./assets/bootstrap.min.css');
require('./assets/bootstrap-datepicker.standalone.min.css');
require('./Calendar.css');
require('jquery')
require('./assets/bootstrap-datepicker.min.js')

import * as strings from 'EventsCalendarWebPartStrings';

export interface IEventsCalendarWebPartProps {
  description: string;
  listName: string;
}
declare const window: any;

export default class EventsCalendarWebPart extends BaseClientSideWebPart<IEventsCalendarWebPartProps> {

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

  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: "Configuration",
              groupFields: [
                PropertyPaneTextField('listName', {
                  label: "List Name"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
