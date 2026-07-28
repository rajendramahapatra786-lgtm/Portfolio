import "./Contact.css";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFileDownload,
    FaPaperPlane,
} from "react-icons/fa";

function Contact() {

    const form = useRef();

    const [sending, setSending] = useState(false);

    useEffect(() => {
        emailjs.init("knXZM5b18Noa5e-b5");
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        setSending(true);

        emailjs
            .sendForm(
                "service_pfe3kxo",
                "template_8q6zcef",
                form.current
            )
            .then(() => {
                alert("[ TRANSMISSION SUCCESSFUL ]\nMESSAGE DELIVERED TO SERVER");
                form.current.reset();
                setSending(false);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send message ❌");
                setSending(false);
            });
    };


    return (
        <section
            className="contact-section"
            id="contact"
            data-aos="fade-up">

            <div className="container">

                {/* Heading */}

                <div className="contact-header">

                    <h2>
                        Get In <span>Touch</span>
                    </h2>

                    <div className="contact-line"></div>

                </div>

                {/* Main Row */}

                <div className="row g-4 align-items-stretch">

                    {/* Left */}

                    <div
                        className="col-lg-5"
                        data-aos="fade-right">

                        <div className="contact-info-card">

                            <h3>Let's Connect</h3>

                            <p>
                                Have a project in mind?
                                Let's create something extraordinary together.
                            </p>

                            <div className="contact-item">
                                <FaEnvelope />
                                <span>rajendramahapatra786@gmail.com</span>
                            </div>

                            <div className="contact-item">
                                <FaGithub />
                                <span>github.com/your-github</span>
                            </div>

                            <div className="contact-item">
                                <FaLinkedin />
                                <span>linkedin.com/in/your-linkedin</span>
                            </div>

                            <div className="contact-item">
                                <FaInstagram />
                                <span>instagram.com/your-instagram</span>
                            </div>

                            <a
                                href="/files/Rajendra_Mahapatra_Resume.pdf"
                                download
                                className="resume-btn"
                            >
                                Download Resume
                                <FaFileDownload />
                            </a>

                        </div>

                    </div>

                    {/* Right */}

                    <div
                        className="col-lg-7"
                        data-aos="fade-left">

                        <div className="contact-form-card">

                            <form
                                ref={form}
                                onSubmit={sendEmail}>

                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Your Name"
                                    required/>

                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="Your Email"
                                    required/>

                                <textarea
                                    rows="6"
                                    name="message"
                                    placeholder="Your Message"
                                    required />

                                <button
                                    type="submit"
                                    className="send-btn"
                                    disabled={sending}
                                >
                                    {sending ? "Sending..." : "Send Message"}

                                    {!sending && <FaPaperPlane />}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;