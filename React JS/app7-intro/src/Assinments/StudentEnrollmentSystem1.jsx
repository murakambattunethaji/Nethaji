const { Component } = require("react");

class StudentEnrollmentSystem extends Component {
  state = {
    studentID: 123,
    studnetname: "Ram",
    addnewstudents:function (){}, 
    removestudents:function () {},  
    updatecourseenrollment:function(){},
  };
  render() {
    return <div>
      <h1>Student Enrollment System</h1>
        <p>{this.state.studentID}</p>
        <p>{this.state.studnetname}</p>
    </div>
  }
}
export default StudentEnrollmentSystem;