import axios from "axios"

class ApiHandler {
  static Url = 'https://integration-layer-pb5xmvfa7a-uc.a.run.app'

  static async submitCode(code, comment) {
    console.log('submitting code');
    console.log(ApiHandler.Url + '/code-fixer');
    const response = await axios
      .post(ApiHandler.Url + '/code-fixer', {
        code: code,
        comment: comment
      });
    console.log(response);
    return response.data;

  }

  static async submitMessage(message) {
    // random number for now
    const session_id = Math.floor(Math.random() * 10000);
    const response = await axios
      .post(ApiHandler.Url + '/chatbot', {
        message: message,
        session_id: session_id
      });
    console.log(response);
    return response.data;
  }

  static async login(email, password, setEmailError, setPasswordError) {
    try {
      const res = await fetch(`${ApiHandler.Url}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      console.log(data);

      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
      }

      if (data.user) {
        console.log(data.user);
        localStorage.setItem('token', data.user);
        window.location.assign('/Chatbot');
      }
    } catch (err) {
      console.log(err);
    }
  }


  
  static async signup(email, password, name, phoneNumber, setEmailError, setPasswordError, setNameError, setPhoneNumberError) {
    try {
      const res = await fetch(`${ApiHandler.Url}/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, password, name, phoneNumber }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();

      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
        setNameError(data.errors.name);
        setPhoneNumberError(data.errors.phoneNumber);
      }

      if (data.user) {
        console.log(data.user);
        localStorage.setItem('token', data.user);
        window.location.assign('/Chatbot');
      }

    } catch (err) {
      console.log(err);
    }
  }

}
export default ApiHandler;