import axios from "axios"

class ApiHandler{
   static Url = 'https://integration-layer-pb5xmvfa7a-uc.a.run.app'

   static async submitCode(code, comment){
        console.log('submitting code');
        console.log(ApiHandler.Url + '/code-fixer');
        const response =await axios
        .post(ApiHandler.Url + '/code-fixer', {
          code: code,
          comment: comment
        });
        console.log(response);
        return response.data;
          
    }

   static async submitMessage(message){
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
}
export default ApiHandler;