import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const hash = bcrypt.hash(password, 10);
  return hash;
};
