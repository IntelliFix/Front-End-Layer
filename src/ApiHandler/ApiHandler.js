import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ApiHandler {
  static Url = "https://integration-layer-pb5xmvfa7a-uc.a.run.app";

  static async submitCode(code, comment) {
    console.log("submitting code");
    console.log(ApiHandler.Url + "/code-fixer");
    const response = await axios.post(
      ApiHandler.Url + "/code-fixer",
      {
        code: code,
        comment: comment,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(response);
    return response.data;
  }

  static async submitMessage(message) {
    // random number for now
    const token = localStorage.getItem("token");
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const session_id = token.toString() + day.toString();
    const response = await axios.post(
      ApiHandler.Url + "/chatbot",
      {
        message: message,
        session_id: session_id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(localStorage.getItem("token"));
    console.log(response);
    return response.data;
  }

  static async login(email, password, setEmailError, setPasswordError, setLoading) {
    try {
      setLoading(true);
      const response = await axios.post(
        `${ApiHandler.Url}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);

      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
      }

      if (data.user) {
        console.log(data.user);
        toast.success("Login successful!");

        localStorage.setItem("token", data.token);
        console.log("token: ", localStorage.getItem("token"));
        
        localStorage.setItem("name", data.name);
        console.log("name: ", localStorage.getItem("name"));
        
        console.log("Login successful!");
        window.location.assign("/Chatbot");
      }
    } catch (err) {
      console.log(err);
      toast.error("Wrong email or password!");
    } finally {
      setLoading(false);
    } 
  }

  static async signup(
    email,
    password,
    name,
    phoneNumber,
    setEmailError,
    setPasswordError,
    setNameError,
    setPhoneNumberError
  ) {
    try {
      const response = await axios.post(
        `${ApiHandler.Url}/signup`,
        {
          email,
          password,
          name,
          phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;

      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
        setNameError(data.errors.name);
        setPhoneNumberError(data.errors.phoneNumber);
      }

      if (data.user) {
        console.log(data.user);
        localStorage.setItem("token", data.user);
        localStorage.setItem("name", data.name);
        toast.success("Sign up successful!");
        window.location.assign("/Chatbot"); // which page to take the user to after signing up
      }
    } catch (err) {
      console.log(err);
    }
  }

}
export default ApiHandler;
