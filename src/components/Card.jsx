const Card = ({information}) => {

    const {imgURL,name,job,about,more} = information;

    return (
    <div className="col-md-12 col-lg-6 person-card">
        <div className="row inside-card">
            <div className="col-md-4 col-lg-4 img-div">
                <img src={imgURL} alt=""/>
            </div>
            <div className="col-md-8 col-lg-8 content">
                <h2 className="name">{name}</h2>
                <h3 className="job">{job}</h3>
                <p className="about">{about}</p>
                <a href={more} className="more">Ətraflı &#62;</a>
            </div>
        </div>
    </div>
    
    );
}

export default Card