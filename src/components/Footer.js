import "./Footer.css";

const Footer = () => {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center py-3">
            <section className="openingHoursSection">
                <div className="title fs-1 text-center">OPENING HOURS</div>
                <div className="d-flex fs-2">
                    <div className="text-center me-5">
                        11<span className="fs-6">AM</span> - 10<span className="fs-6">PM</span><br/>MON-THU
                    </div>
                    <div className="text-center">
                        11<span className="fs-6">AM</span> - 10:30<span className="fs-6">PM</span><br/>FRI-SUN
                    </div>
                </div>
            </section>
            <hr className="border border-2 mt-0" />
            <a
                href="https://goo.gl/maps/yHFx7VMokEH3KC9i8"
                className="text-center text-decoration-none fs-5"
            >
                1233 Dillon Rd, Burlington
                <br />
                ON L7M 1K6
            </a>
        </footer>
    )
}

export default Footer;