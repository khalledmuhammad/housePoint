import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Recaptcha from "react-google-recaptcha";
import { Form, Select, Input, Button } from "antd";

const ContactWithAgent = () => {

  const [formData, setFormData] = useState({
    name: "",
    selectedValue: "",
    mobile: "",
    email: "",
    message: "",
    Url :  process.browser && window.location.href,

    captcha: null,
  });
  const [countryCodes, setCountryCodes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const router = useRouter();
  const [form] = Form.useForm();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/get-country`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.error("Error: No data received from API");
          return;
        }
        setCountryCodes(data);
        console.log(countryCodes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      selectedValue: selectedValue,
    });
  };

  const handleCaptcha = (value) => {
    setFormData({ ...formData, captcha: value });
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    setErrors({});
    try {
      form.validateFields();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/send-email`,
        formData
      );

      console.log(formData);
      setLoading(false);
      toast.success(
        "Thank you for your message, We will get back to you soon.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      router.push("/");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ global: "Something went wrong" });
      }
    }
    setIsSubmitting(false);
  };

  if (!countryCodes || Object.values(countryCodes).length === 0) {
    return <p>No country codes available</p>;
  }

  return (
    <>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        name="contact"
        className="form"
        onChange={handleChange}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
          hasFeedback
        >
          <Input name="name" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="selectedValue"
          label="Country Code"
          rules={[
            { required: true, message: "Please select your country code!" },
          ]}
        >
          <Select
            placeholder="Select a country code"
            name="selectedValue"
            value={selectedValue}
            onChange={(value) => {
              setSelectedValue(value);
              console.log(value);
            }}
          >
            {Object.values(countryCodes).map((item) => (
              <Select.Option
                key={item.iso}
                value={item.nicename + item.phonecode}
              >
                {`${item.phonecode} ${item.nicename}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[
            {
              required: true,
              message: "Please input your mobile number!",
            },
          ]}
          hasFeedback
        >
          <Input name="mobile" placeholder="Mobile" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input name="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "Please input your message!",
            },
          ]}
          hasFeedback
        >
          <Input.TextArea name="message" placeholder="Message" />
        </Form.Item>
        <Form.Item name="captcha" rules={[{ required: true }]}>
          <Recaptcha
            sitekey="6LcUcu8jAAAAACeg2hOdUDuEA1f_FO6fr-nKlMec"
            onChange={handleCaptcha}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            className="submit-button"
            disabled={isSubmitting}
          >
            Request
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactWithAgent;
