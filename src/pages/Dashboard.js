import React from "react";
import './Dashboard.css'
import NavigateButton from '../components/Button'

const Dashboard = () => {
    return <div>
    
    <div className="greeting">
        <h4 className="greeting-text"> Hello, <span className="color">name</span> </h4>
    </div>

    <container className="stats">
        <h4 className="subtitle"> Your Stats </h4>

        <div className="stats-groups">
            <p1 className="stats-group">Exams Completed</p1>
            <p1 className="stats-group">Questions Answered</p1>
            <p1 className="stats-group">Hours Spent</p1>
            <p1 className="stats-group">Days Until Exam</p1>
            <button>Edit Date</button>
        </div>
    </container>

    <container className="practice">
        <h4 className="subtitle"> Jump To </h4>

        <div className="practice-buttons">
            <NavigateButton to="/login" text="Full Exam Practice" className="btn-primary"/>
            <NavigateButton to="/login" text="Topic Practice" className="btn-primary"/>
            <NavigateButton to="/login" text="Section Practice" className="btn-primary"/>
        </div>
    </container>


    </div>
};

export default Dashboard;