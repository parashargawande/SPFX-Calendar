var today = new Date();
var today_formatted = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ('0' + today.getDate()).slice(-2);
var split_days = ['2021-2-03', '2021-2-13', '2021-2-15'];
var dots_days = [
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "fc4b4f7d-81ad-4332-aa1c-18d8cd4c7104",
      "odata.etag": "\"2\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(1)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(1)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "f4f65565-71f9-4cc7-b063-2fb7004d1c4b",
        "kiar": "#26C1C9",
        "Title": "GM Approval"
      },
      "Title": "GM Approval",
      "EventDate": "2021-02-16T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "b99394c9-0104-4b37-b10e-d71f78a5ab9f",
      "odata.etag": "\"4\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(5)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(5)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "328ced41-895d-4e31-94c5-008ed36e832c",
        "kiar": "#FFC31C",
        "Title": "US Holidays"
      },
      "Title": "Test2",
      "EventDate": "2021-02-19T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "c4a82059-e9b9-4e7a-a08d-e0b904255cb3",
      "odata.etag": "\"2\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(6)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(6)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "10131526-d0c9-429f-9881-b4ce9367d6ac",
        "kiar": "#AB7DF6",
        "Title": "PO Cut-Offs"
      },
      "Title": "test3",
      "EventDate": "2021-02-20T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "52d77e26-b28c-4def-a848-867ff1bbb4b7",
      "odata.etag": "\"1\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(8)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(8)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "9bc158f5-5bca-4cea-86b1-281ab518a86a",
        "kiar": "#AB7DF6",
        "Title": "PO Cut-Offs"
      },
      "Title": "Event 01",
      "EventDate": "2021-04-14T07:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "a0cd76f0-dcaf-4f93-a5dc-776be79f1758",
      "odata.etag": "\"1\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(9)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(9)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "2f74cf9a-944a-46ea-88e3-7b565f4eae16",
        "kiar": "#26C1C9",
        "Title": "GM Approval"
      },
      "Title": "Event 02",
      "EventDate": "2021-04-22T07:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "0d9adb49-5a94-407a-a1d3-457aaebf9085",
      "odata.etag": "\"3\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(10)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(10)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "1a88617c-3653-4288-b15b-82fe38b3f10d",
        "kiar": "#26C1C9",
        "Title": "GM Approval"
      },
      "Title": "Event 03",
      "EventDate": "2021-02-11T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "6ead9fcc-7d44-4d2d-a920-d8f5b9b05cb1",
      "odata.etag": "\"4\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(11)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(11)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "f1457f4d-4ee0-4a3f-8084-d23cc1246af5",
        "kiar": "#AB7DF6",
        "Title": "PO Cut-Offs"
      },
      "Title": "Event 04",
      "EventDate": "2021-02-11T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "2c1d1bbd-273b-42e6-8b7b-b61134bda74f",
      "odata.etag": "\"2\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(12)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(12)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "9b100d85-9989-4af4-aeb8-7b194078b757",
        "kiar": "#26C1C9",
        "Title": "GM Approval"
      },
      "Title": "Event 04",
      "EventDate": "2021-03-17T07:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "c16082f7-e2ec-41ad-a533-1ddd95d4827a",
      "odata.etag": "\"2\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(13)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(13)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "9b168b12-1dad-4aa9-9252-098f37f7dd6d",
        "kiar": "#AB7DF6",
        "Title": "PO Cut-Offs"
      },
      "Title": "Event 05",
      "EventDate": "2021-03-17T07:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "283339db-5c4d-431f-89b4-c872e2929a4a",
      "odata.etag": "\"1\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(15)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(15)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "06049b88-5405-48a7-bb76-b10d39cc1837",
        "kiar": "#d169a0",
        "Title": "Test 01"
      },
      "Title": "Event 07",
      "EventDate": "2021-02-17T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "5a75d91c-2b9a-4a26-b309-307844168966",
      "odata.etag": "\"1\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(16)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(16)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "635083a9-d2a8-4645-abf5-b9fb6d9dcb62",
        "kiar": "#9fd169",
        "Title": "Test 02"
      },
      "Title": "Event 08",
      "EventDate": "2021-02-17T08:00:00Z"
    },
    {
      "odata.type": "SP.Data.CalenderEventsDataListItem",
      "odata.id": "bec21100-3d30-4479-90da-d0459098ec53",
      "odata.etag": "\"2\"",
      "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(17)",
      "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(17)/EventType",
      "EventType": {
        "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
        "odata.id": "89502e49-39db-4d07-a777-e7ae7587b09f",
        "kiar": "#4a45b0",
        "Title": "Test 03"
      },
      "Title": "Event 09",
      "EventDate": "2021-02-17T08:00:00Z"
    }
  ];


function bindCalendar() {
    $('#calendar').datepicker({
        format: "mm/dd/yyyy",
        weekStart: 1,

        beforeShowDay: function (date) {
            var calender_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + ('0' + date.getDate()).slice(-2);
            var search_index = $.inArray(calender_date, split_days);
            var classes = "";
            var dotsHtml = "";
            var topDotHtml = "";
            if (search_index > -1) {
                classes = classes + 'split-cell';
            }

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
                    classes = 'style="background-color:' +firstColour[0].EventType.kiar+'"';
                } else if (firstColour.length == 0 && secondColour.length > 0) {
                    classes = 'style="background-color:' +secondColour[0].EventType.kiar+'"';
                } else if (firstColour.length > 0 && secondColour.length > 0) {
                    classes = 'style="background-image: -webkit-linear-gradient(-45deg, '+secondColour[0].EventType.kiar+' 50%, '+firstColour[0].EventType.kiar+' 50%);"'
                }

                // var topEvent = todayEvent.filter(e => e.EventType.Title === "US Holidays");
                // if (topEvent.length > 0) {
                //     topDotHtml = '<p class="m-0 text-center p-dot"><span style="background-color: ' + topEvent[0].EventType.kiar + ';" class="single-dot"></span></p>';
                // }
                dotsHtml = todayEvent.reduce((final, curr) => {
                    if (curr.EventType.Title === "PO Cut-Offs" || curr.EventType.Title === "GM Approval") {
                        return final;
                    } else {
                        return final + '<p class="text-center p-dot"><span style="background-color: ' + curr.EventType.kiar + ';" class="single-dot"></span></p>';
                    }
                }, "");
            }

            return {
                classes:  "custom-day",
                content:'<div '+classes+' class="event-container">' +
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


// https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsData')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id

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


// getJsonDataAsync("https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsData')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id")
//     .then(data => {
//         console.log(data);
//         dots_days = data.d.results;
//     }).fail(e => {
//         console.log(e);
//     });

bindCalendar();