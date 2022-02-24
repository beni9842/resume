import "../css/joblist.css";

function JobList() {

    return (
        <ul className="job-list">
            <li className="job-item">
                <div className="job card">
                    <div className="card-body">
                        <div className="top">
                            <h5 className="font-weight-bold">Greenskeeper</h5>
                            <h5 className="font-italic">Essex Fells CC</h5>
                            <p className="font-weight-light">Jun, 2021 - Aug, 2021</p>
                        </div>
                        <div className="duty card">
                            <ul className="duties">
                                <li>duty</li>
                                <li>duty</li>
                                <li>duty</li>
                                <li>duty</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default JobList;