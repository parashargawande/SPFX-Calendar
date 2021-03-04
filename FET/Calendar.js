var today = new Date();
var today_formatted = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ('0' + today.getDate()).slice(-2);
var split_days = [];
var dots_days = [];
var colors = [];

function bindCalendar() {
  $('#calendar').datepicker({
    format: "mm/dd/yyyy",
    weekStart: 1,

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
        var firstColour = todayEvent.filter(e => e.EventType.Title === colors[0].Title);
        var secondColour = todayEvent.filter(e => e.EventType.Title === colors[1].Title);
        if (firstColour.length > 0 && secondColour.length === 0) {
          classes = 'style="background-color:' + firstColour[0].EventType.kiar + '"';
        } else if (firstColour.length == 0 && secondColour.length > 0) {
          classes = 'style="background-color:' + secondColour[0].EventType.kiar + '"';
        } else if (firstColour.length > 0 && secondColour.length > 0) {
          classes = 'style="background-image: -webkit-linear-gradient(-45deg, ' + secondColour[0].EventType.kiar + ' 50%, ' + firstColour[0].EventType.kiar + ' 50%);"'
        }

        dotsHtml = todayEvent.reduce((final, curr) => {
          if (curr.EventType.Title === colors[0].Title || curr.EventType.Title === colors[1].Title) {
            return final;
          } else {
            return final + '<p class="text-center p-dot"><span style="background-color: ' + curr.EventType.kiar + ';" class="single-dot"></span></p>';
          }
        }, "");
      }

      return {
        classes: "custom-day",
        content: '<div ' + classes + ' class="event-container">' +
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

function init() {
  getJsonDataAsync("https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsColorCode')/Items?$select=Title")
  .then(clrs=>{
    console.log(clrs);
    colors=clrs.d.results;
    getJsonDataAsync("https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsData')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id")
    .then(data => {
      console.log(data);
      dots_days = data.d.results;
      bindCalendar();
    }).fail(e => {
      console.log(e);
    });
  });
}
init();
