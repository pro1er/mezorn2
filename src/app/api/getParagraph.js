
export default async function handler(req, res) {
    try {
      const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1'); // Replace with the actual URL of the external service
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  