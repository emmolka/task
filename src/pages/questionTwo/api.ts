import axios from "axios";

export interface Dog {
  imgSrc: string;
  title: string;
  body: string;
  id: number;
}

const getCardDetails = async (): Promise<Dog | undefined> => {
  const newPromise = await axios.get<Dog>("http://localhost:3001/example");
  return newPromise.data;
};

export { getCardDetails };
