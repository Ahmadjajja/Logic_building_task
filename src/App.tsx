import * as React from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Calendar from "react-calendar";

interface isDisabledTypes {
  isDisabled7: boolean ,isDisabled715: boolean ,isDisabled730: boolean , isDisabled745: boolean ,
  isDisabled8: boolean ,isDisabled815: boolean ,isDisabled830: boolean , isDisabled845: boolean ,
  isDisabled9: boolean ,isDisabled915: boolean ,isDisabled930: boolean , isDisabled945: boolean ,
  isDisabled10: boolean ,isDisabled1015: boolean ,isDisabled1030: boolean , isDisabled1045: boolean 
}

const initialIsDisabledState = {
   isDisabled7: true ,isDisabled715: true ,isDisabled730: true , isDisabled745: true ,
   isDisabled8: true ,isDisabled815: true ,isDisabled830: true , isDisabled845: true ,
   isDisabled9: true ,isDisabled915: true ,isDisabled930: true , isDisabled945: true ,
   isDisabled10: true ,isDisabled1015: true ,isDisabled1030: true , isDisabled1045: true ,
  }

function App() {

  const [value, onChange] = React.useState<any>(new Date());
  const [date, setDate] = React.useState<string>("");
  const [isDisabled, setIsDisabled] = React.useState<isDisabledTypes>(initialIsDisabledState);
  const [listTimeValue, setListTimeValue] = React.useState<string[]>([])
  const [listAllSchedules , setListAllSchedules] = React.useState<(string[])[]>([])

  const dataHandler = () => {

    let month: string;
    switch (value.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;

      default:
        break;
    }
    setDate(`${value.getDate()} ${month} ${value.getFullYear()}`);
    // console.log(`${value.getDate()} ${month} ${value.getFullYear()}`);
    // onChange()


    setListTimeValue([])   //initially list is empty
    setIsDisabled({    // will enabled all time slots on selecting a new date
      isDisabled7: false ,isDisabled715: false ,isDisabled730: false , isDisabled745: false ,
      isDisabled8: false ,isDisabled815: false ,isDisabled830: false , isDisabled845: false ,
      isDisabled9: false ,isDisabled915: false ,isDisabled930: false , isDisabled945: false ,
      isDisabled10: false ,isDisabled1015: false ,isDisabled1030: false , isDisabled1045: false ,
     })



  };

  const timeSlotsHandler = (event:any) => {
    console.log("listTimeValue", listTimeValue);
    
    // console.log();


    //this will store values of all time slots
    setListTimeValue(listTimeValue => [...listTimeValue,event.target.innerHTML] );

    switch (event.target.innerHTML) {
      case '07:00am':
        setIsDisabled({ ...isDisabled, isDisabled7: true })
        break;
      case '07:15am':
        setIsDisabled({ ...isDisabled, isDisabled715: true })
        break;
      case '07:30am':
        setIsDisabled({ ...isDisabled, isDisabled730: true })
        break;
      case '07:45am':
        setIsDisabled({ ...isDisabled, isDisabled745: true })
        break;
      case '08:00am':
        setIsDisabled({ ...isDisabled, isDisabled8: true })
        break;
      case '08:15am':
        setIsDisabled({ ...isDisabled, isDisabled815: true })
        break;
      case '08:30am':
        setIsDisabled({ ...isDisabled, isDisabled830: true })
        break;
      case '08:45am':
        setIsDisabled({ ...isDisabled, isDisabled845: true })
        break;
      case '09:00am':
        setIsDisabled({ ...isDisabled, isDisabled9: true })
        break;
      case '09:15am':
        setIsDisabled({ ...isDisabled, isDisabled915: true })
        break;
      case '09:30am':
        setIsDisabled({ ...isDisabled, isDisabled930: true })
        break;
      case '09:45am':
        setIsDisabled({ ...isDisabled, isDisabled945: true })
        break;
      case '10:00am':
        setIsDisabled({ ...isDisabled, isDisabled10: true })
        break;
      case '10:15am':
        setIsDisabled({ ...isDisabled, isDisabled1015: true })
        break;
      case '10:30am':
        setIsDisabled({ ...isDisabled, isDisabled1030: true })
        break;
      case '10:45am':
        setIsDisabled({ ...isDisabled, isDisabled1045: true })
        break;
    
      default:
        break;
    }  

  }


React.useEffect(() => {
  console.log(listAllSchedules)
})

  const addSchedularHandler = () => {
    setListAllSchedules(listAllSchedules => [...listAllSchedules,listTimeValue] );
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Calendar
              onChange={onChange}
              value={value}
              onClickDay={dataHandler}
            />
          </div>
          <div className="col">
            <div className="row my-2">
              <div className="col text-center">{date}</div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled7  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  07:00am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled715  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  07:15am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled730  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  07:30am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled745  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  07:45am
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled8  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  08:00am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled815  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  08:15am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled830  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  08:30am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled845  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  08:45am
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled9  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  09:00am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled915  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  09:15am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled930  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  09:30am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled945  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  09:45am
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled10  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  10:00am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled1015  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  10:15am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled1030  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  10:30am
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={ isDisabled.isDisabled1045  ? "btn btn-outline-secondary disabled" : "btn btn-outline-secondary" }
                  onClick={(event)=> {timeSlotsHandler(event)}}
                >
                  10:45am
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button type="button" className="btn btn-outline-secondary">
                  Custom
                </button>
              </div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button type="button" className="btn btn-primary w-100" onClick={addSchedularHandler}>
                  Add Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
