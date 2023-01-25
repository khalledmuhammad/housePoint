import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });

  const router = useRouter();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/contactUs`, formData)
      .then((res) => {
        console.log(res);
        toast.success(
          "Thank you for your message, We will get back to you soon.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="contact_form" action="#" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_name"
              name="name"
              className="form-control"
              required="required"
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_email"
              name="email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_phone"
              name="phone"
              className="form-control required phone"
              required="required"
              type="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_subject"
              name="subject"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Subject"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="message"
              className="form-control required"
              rows="8"
              required="required"
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              Send Message
            </button>
          </div>
          {/* End button submit */}
        </div>
      </div>
    </form>
  );
};

export default Form;
