import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "./App.css";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);
import Sidebar from '../src/component/Sidebar'

class App extends Component {
  // state = {
  //   events: [
  //     {
  //       id:0,
  //       start: moment().toDate(),
  //       end: moment().add(1, "days").toDate(),
  //       title: "event one",
  //     },
  //     {
  //       id:1,
  //       start: moment().add(2, "days").toDate(),
  //       end: moment().add(1, "days").toDate(),
  //       title: "event one",
  //       travelTime : moment().add(642, 'seconds').format('13:30 A')
  //     },
  //   ],
  // };

  // onEventResize = (data) => {
  //   const { start, end } = data;
  //   this.setState((state) => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     return { events: [...state.events] };
  //   });
  // };

  // onEventDrop = ({ start, end },data) => {
  //   console.log(data);
  //   const { events } = this.state;
  //   const idx = events.indexOf(events);
  //   const updatedEvent = { ...events, start, end };
  //   const nextEvents = [...events];
  //   nextEvents.splice(idx, 1, updatedEvent);
  //   this.setState({
  //     events: nextEvents
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Sidebar/>
        {/* <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="week"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        /> */}
      </div>
    );
  }
}

export default App;
