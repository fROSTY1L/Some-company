import { message } from "antd";

const useContactFormFeatures = () => {
    const sendMessage = async (values: unknown) => {
        try {
          const response = await fetch('/netlify/functions/handle-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
    
          const data = await response.json();
          message.success(data.message);
        } catch {
          message.error('Submission failed');
        }
      };

    return { sendMessage}
}

export default useContactFormFeatures
