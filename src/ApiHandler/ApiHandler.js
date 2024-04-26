import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ApiHandler {
  static Url = 'https://integration-layer-pb5xmvfa7a-uc.a.run.app'

  static async submitCode(code, comment) {
    console.log('submitting code');
    console.log(ApiHandler.Url + '/code-fixer');
    const response = await axios
      .post(ApiHandler.Url + '/code-fixer', {
        code: code,
        comment: comment
      },
        {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        }
      );
    console.log(response);
    return response.data;
  }

  static async submitMessage(message) {
    // random number for now
    const session_id = 1234;
    const response = await axios
      .post(ApiHandler.Url + '/chatbot', {
        message: message,
        session_id: session_id
      },
        {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        }
      );
    console.log(localStorage.getItem('token'));
    console.log(response);
    return response.data;
  }

  static async login(email, password, setEmailError, setPasswordError) {
    try {
      const response = await axios.post(`${ApiHandler.Url}/login`, {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = response.data;
      console.log(data);

      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
      }

      if (data.user) {
        console.log(data.user);

        localStorage.setItem('token', data.token);
        window.location.assign('/Homepage');
        console.log('token: ', localStorage.getItem('token'));        
      }
    } catch (err) {
      console.log(err);
    }
  }



  static async signup(email, password, name, phoneNumber, setEmailError, setPasswordError, setNameError, setPhoneNumberError) {
    try {
      const response = await axios.post(`${ApiHandler.Url}/signup`, {
        email,
        password,
        name,
        phoneNumber
      }, {
        headers: {
          'Content-Type': 'application/json'

        }
      });
      const data = response.data;

      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
        setNameError(data.errors.name);
        setPhoneNumberError(data.errors.phoneNumber);
      }

      if (data.user) {
        console.log(data.user);
        localStorage.setItem('token', data.user);
        toast.success('Sign up successful!');
        window.location.assign('/Authentication'); // which page to take the user to after signing up
      }

    } catch (err) {
      console.log(err);
    }
  }

}
export default ApiHandler;