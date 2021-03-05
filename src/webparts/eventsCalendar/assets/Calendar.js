import * as $ from 'jquery';
import EventsCalendarWebPart from '../EventsCalendarWebPart';
import * as moment from 'moment-timezone';

function Calendar() {

    this.SpIdToTimeZone = {
        "2": "Europe/London",
        "3": "Europe/Paris",
        "4": "Europe/Berlin",
        "5": "Europe/Bucharest",
        "6": "Europe/Budapest",
        "7": "Europe/Kaliningrad",
        "8": "America/Sao_Paulo",
        "9": "America/Halifax",
        "10": "America/New_York",
        "11": "America/Chicago",
        "12": "America/Denver",
        "13": "America/Los_Angeles",
        "14": "America/Anchorage",
        "15": "Pacific/Honolulu",
        "16": "Pacific/Apia",
        "17": "Pacific/Auckland",
        "18": "Australia/Brisbane",
        "19": "Australia/Adelaide",
        "20": "Asia/Tokyo",
        "21": "Asia/Singapore",
        "22": "Asia/Bangkok",
        "23": "Asia/Kolkata",
        "24": "Asia/Dubai",
        "25": "Asia/Tehran",
        "26": "Asia/Baghdad",
        "27": "Asia/Jerusalem",
        "28": "America/St_Johns",
        "29": "Atlantic/Azores",
        "30": "Etc/GMT+2",
        "31": "Atlantic/Reykjavik",
        "32": "America/Cayenne",
        "33": "America/La_Paz",
        "34": "America/Indianapolis",
        "35": "America/Bogota",
        "36": "America/Regina",
        "37": "America/Mexico_City",
        "38": "America/Phoenix",
        "39": "Etc/GMT+12",
        "40": "Pacific/Fiji",
        "41": "Asia/Magadan",
        "42": "Australia/Hobart",
        "43": "Pacific/Port_Moresby",
        "44": "Australia/Darwin",
        "45": "Asia/Shanghai",
        "46": "Asia/Novosibirsk",
        "47": "Asia/Tashkent",
        "48": "Asia/Kabul",
        "49": "Africa/Cairo",
        "50": "Africa/Johannesburg",
        "51": "Europe/Moscow",
        "53": "Atlantic/Cape_Verde",
        "54": "Asia/Baku",
        "55": "America/Guatemala",
        "56": "Africa/Nairobi",
        "57": "Europe/Warsaw",
        "58": "Asia/Yekaterinburg",
        "59": "Europe/Kiev",
        "60": "America/Godthab",
        "61": "Asia/Rangoon",
        "62": "Asia/Katmandu",
        "63": "Asia/Irkutsk",
        "64": "Asia/Krasnoyarsk",
        "65": "America/Santiago",
        "66": "Asia/Colombo",
        "67": "Pacific/Tongatapu",
        "68": "Asia/Vladivostok",
        "69": "Africa/Lagos",
        "70": "Asia/Yakutsk",
        "71": "Asia/Almaty",
        "72": "Asia/Seoul",
        "73": "Australia/Perth",
        "74": "Asia/Riyadh",
        "75": "Asia/Taipei",
        "76": "Australia/Sydney",
        "77": "America/Chihuahua",
        "78": "America/Santa_Isabel",
        "79": "Asia/Amman",
        "80": "Asia/Beirut",
        "81": "America/Manaus",
        "82": "Asia/Tbilisi",
        "83": "Africa/Windhoek",
        "84": "Asia/Yerevan",
        "85": "America/Buenos_Aires",
        "86": "Africa/Casablanca",
        "87": "Asia/Karachi",
        "88": "America/Caracas",
        "89": "Indian/Mauritius",
        "90": "America/Montevideo",
        "91": "America/Asuncion",
        "92": "Asia/Kamchatka",
        "93": "UTC",
        "94": "Asia/Ulaanbaatar",
        "95": "Etc/GMT+11",
        "96": "Etc/GMT+2",
        "97": "Etc/GMT-12",
        "98": "Asia/Damascus",
        "99": "Asia/Magadan",
        "100": "Europe/Kaliningrad",
        "101": "Europe/Istanbul",
        "102": "Asia/Dhaka",
        "103": "America/Bahia"
    };

    this.getJsonDataAsync = function (url) {
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

    this.dots_days = [];

    this.colors = [];

    this.config = {
        site: window.PageProperties.site.absoluteUrl,
        timeZoneApi: "/_api/web/RegionalSettings/TimeZone",
    }

    this.groupBy = function (list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    this.bindCalendar = function () {
        var dots_days = this.dots_days;
        var groupedData = this.groupBy(dots_days, dots_days => dots_days.EventType.Title);
        console.log(groupedData);

        var row1Identifier = "";
        var row2Identifier = "";
        var count = 3;
        Array.from(groupedData.keys()).forEach(key => {
            console.log(groupedData.get(key)[0].EventType.Title, groupedData.get(key)[0].EventType.kiar)
            var dynamicHtml = `<div class="col col1">
                <div style="background-color: `+ groupedData.get(key)[0].EventType.kiar + `;" class="dot"></div><span class="indextitle">` + groupedData.get(key)[0].EventType.Title + `</span>
                </div>`;
            if (count > 0) {
                row1Identifier += dynamicHtml;
            } else {
                row2Identifier += dynamicHtml;
            }
        });
        $('#row1').html(row1Identifier);
        $('#row2').html(row2Identifier);
        if (!row2Identifier.length) {
            $('#row2').remove();
        }

        $('#calendar').datepicker({
            format: "mm/dd/yyyy",
            weekStart: 0,
            beforeShowDay: function (date) {
                var calender_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + ('0' + date.getDate()).slice(-2);
                var classes = "";
                var dotsHtml = "";
                var todayEvent = calendarObj.dots_days.filter(e => {
                    var event = moment(e.EventDate.split("T")[0]);
                    // var event_formatted = event.getFullYear() + '-' + (event.getMonth() + 1) + '-' + ('0' + event.getDate()).slice(-2);
                    if (event.format("YYYY-M-DD") === calender_date) {
                        return true;
                    }
                });

                if (todayEvent.length > 0) {
                    var firstColour = todayEvent.filter(e => e.EventType.Title === calendarObj.colors[0].Title);
                    var secondColour = todayEvent.filter(e => e.EventType.Title === calendarObj.colors[1].Title);
                    if (firstColour.length > 0 && secondColour.length === 0) {
                        classes = 'style="background-color:' + firstColour[0].EventType.kiar + '"';
                    } else if (firstColour.length == 0 && secondColour.length > 0) {
                        classes = 'style="background-color:' + secondColour[0].EventType.kiar + '"';
                    } else if (firstColour.length > 0 && secondColour.length > 0) {
                        classes = 'style="background-image: -webkit-linear-gradient(-45deg, ' + secondColour[0].EventType.kiar + ' 50%, ' + firstColour[0].EventType.kiar + ' 50%);"'
                    }

                    dotsHtml = todayEvent.reduce((final, curr) => {
                        if (curr.EventType.Title === calendarObj.colors[0].Title || curr.EventType.Title === calendarObj.colors[1].Title) {
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
                        '<div class="calendar-date">' +
                        date.getDate() +
                        '</div>' +
                        '</div>'
                }
            }
        }).on('changeMonth', function (e) {
            console.log(e);
        });
    }

    this.setup = function () {
        return this.getJsonDataAsync(this.config.site + this.config.timeZoneApi).then(data => {
            console.log(this.SpIdToTimeZone[data.d.Id]);
            const timeZone = this.SpIdToTimeZone[data.d.Id];
            moment.tz.setDefault(timeZone);
            moment.updateLocale('en', {
                weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"]
            });

            return timeZone;
        });
    }
    this.init = function () {
        this.getJsonDataAsync(this.config.site + "/_api/web/lists/getbytitle('" + window.CalendarProperties.eventTypesList + "')/Items?$select=Title")
            .then(clrs => {
                console.log(clrs);
                this.colors = clrs.d.results;
                return clrs.d.results;
            }).then(_ => {
                return this.getJsonDataAsync(this.config.site + "/_api/web/lists/getbytitle('" + window.CalendarProperties.eventsList + "')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id&$top=5000")
            }).then(data => {
                console.log(data);
                this.dots_days = data.d.results;
                $(() => {
                    this.timeInfo.then(_ => {
                        calendarObj.bindCalendar();
                    });
                })
            }).fail(e => {
                console.log(e);
            })
    }
}

var calendarObj = new Calendar();
calendarObj.init();
Calendar.prototype.timeInfo = calendarObj.setup();
