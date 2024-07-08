import { formateDate } from "../assets/utils/DateUtil";
const Task = ({ task: { Title, Description, createdDate } }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{Title}</div>
        <div className="meta">{formateDate(createdDate)}</div>
        <div className="description">{Description}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic blue button">Edit</div>
          <div className="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
  );
};
export default Task;
