import { Calendar } from "components/Calendar/Calendar"


const CalendarPage = ({date, setDate}) => {
  return(
    <section>
<Calendar date={date} setDate={setDate}/>
    </section>
  )
}

export default CalendarPage