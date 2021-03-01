import * as $ from 'jquery';
import EventsCalendarWebPart from '../EventsCalendarWebPart';
import * as moment from 'moment';

var today = new Date();
var today_formatted = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ('0' + today.getDate()).slice(-2);
var split_days = ['2021-2-03', '2021-2-13', '2021-2-15'];
var dots_days = [];

function bindCalendar() {
    console.log(window.CalendarProperties);
    moment.updateLocale('en', {
        weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"]
    });

    $('#calendar').datepicker({
        format: "mm/dd/yyyy",
        weekStart: 0,
        beforeShowDay: function (date) {
            var calender_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + ('0' + date.getDate()).slice(-2);
            var classes = "";
            var dotsHtml = "";

            var todayEvent = dots_days.filter(e => {
                var event = new Date(e.EventDate.split("T")[0]);
                var event_formatted = event.getFullYear() + '-' + (event.getMonth() + 1) + '-' + ('0' + event.getDate()).slice(-2);

                if (event_formatted === calender_date) {
                    return true;
                }
            });

            if (todayEvent.length > 0) {
                var firstColour = todayEvent.filter(e => e.EventType.Title === "PO Cut-Offs");
                var secondColour = todayEvent.filter(e => e.EventType.Title === "GM Approval");
                if (firstColour.length > 0 && secondColour.length === 0) {
                    classes = 'style="background-color:' + firstColour[0].EventType.kiar + '"';
                } else if (firstColour.length == 0 && secondColour.length > 0) {
                    classes = 'style="background-color:' + secondColour[0].EventType.kiar + '"';
                } else if (firstColour.length > 0 && secondColour.length > 0) {
                    classes = 'style="background-image: -webkit-linear-gradient(-45deg, ' + secondColour[0].EventType.kiar + ' 50%, ' + firstColour[0].EventType.kiar + ' 50%);"'
                }

                dotsHtml = todayEvent.reduce((final, curr) => {
                    if (curr.EventType.Title === "PO Cut-Offs" || curr.EventType.Title === "GM Approval") {
                        return final;
                    } else {
                        return final + '<p class="text-center p-dot"><span style="background-color: ' + curr.EventType.kiar + ';" class="single-dot"></span></p>';
                    }
                }, "");
            }

            return {
                content: '<div ' + classes + '  class="event-container">' +
                    '<div class="meta-events">' +
                    '<div class="top-single-dots-container">' +
                    dotsHtml +
                    '</div>' +
                    '</div>' +
                    '<div class="day calendar-date">' +
                    date.getDate() +
                    '</div>' +
                    '</div>'
            }
        }
    });
}

function getJsonDataAsync(url) {
    var deferred = $.Deferred();
    var requestHeaders = { Accept: "application/json; odata=verbose" };
    $.ajax({
        url: url, // The file path.
        method: "GET",
        headers: requestHeaders,
        success: function (data) {
            deferred.resolve(data);
        },
        error: function (error) {
            deferred.reject(error);
        }
    });
    return deferred;
}

$(function () {


    if (window.CalendarProperties.listName) {
        getJsonDataAsync("https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('" + window.CalendarProperties.listName + "')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id")
            .then(data => {
                console.log(data);
                dots_days = data.d.results;
                bindCalendar();
            }).fail(e => {
                console.log(e);
            });
    }
})