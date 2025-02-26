import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const hash: string = await bcrypt.hash(password, 10);
  return hash;
};

export const comparePasswod = async (password: string, hash: string) => {
  const isCorrect: boolean = await bcrypt.compare(password, hash);
  return isCorrect;
};
