import Alert from "../components/alert/alert";
import DiscriptionBooks from "../components/discriptionBooks/discriptionBooks";
import SomeBookHeading from "../components/someBookHeading/someBookHeading";

function List(props) {
  return (
    <div className="page__list">
      <SomeBookHeading section_title="List of books"/>
      { props.location?.state?.alert_message && (<div className="container--no-flex"><Alert msg={props.location.state.alert_message} /></div>) } 
      <DiscriptionBooks />
    </div>
  )
}

export default List;