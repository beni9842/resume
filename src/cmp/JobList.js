import "../css/joblist.css";

function JobList() {

    return (
        <ul className="job-list">
            <li className="job-item">
                <div className="job card">
                    <div className="card-body">
                        <div className="top">
                            <h5 className="font-weight-bold">Greenskeeper</h5>
                            <h5 className="font-italic">Essex Fells Country Club, Essex Fells, NJ</h5>
                            <p className="font-weight-light">Jun, 2021 Aug, 2021</p>
                        </div>
                        <div className="duty card">
                            <ul className="duties">
                                <li>Daily shifts starting at 6:00am</li>
                                <li>Used landscaping equipment to mow greens, fairways, and fix sand traps</li>
                                <li>Maintained irragation systems</li>
                                <li>Tended to plants and gardens</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li className="job-item">
                <div className="job card">
                    <div className="card-body">
                        <div className="top">
                            <h5 className="font-weight-bold">Maintenance</h5>
                            <h5 className="font-italic">Bradford Bath & Tennis Club, Montclair, NJ</h5>
                            <p className="font-weight-light">Apr, 2018 Feb, 2020</p>
                        </div>
                        <div className="duty card">
                            <ul className="duties">
                                <li>Opened the club up for members in the morning</li>
                                <li>Maintained gravel tennis courts and court-irrigation systems</li>
                                <li>Watered flowers and did other small landscaping projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li className="job-item">
                <div className="job card">
                    <div className="card-body">
                        <div className="top">
                            <h5 className="font-weight-bold">Bus-boy</h5>
                            <h5 className="font-italic">Esposito's, Cedar Grove, NJ</h5>
                            <p className="font-weight-light">Oct, 2018 <br /> Mar, 2019</p>
                        </div>
                        <div className="duty card">
                            <ul className="duties">
                                <li>Prepared food</li>
                                <li>Assisted chefs in the kitchen</li>
                                <li>Bussed customers' tables</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default JobList;