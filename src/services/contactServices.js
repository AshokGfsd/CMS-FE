import { protectedInstance, instance } from "./instance";

const contactServices = {
  get: async () => {
    return await protectedInstance.get(`/contacts`);
  },
  post: async ({ firstName, lastName, address, email, phoneNumber }) => {
    return await protectedInstance.post(`/contacts`, {
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
    });
  },
  delete: async (id) => {
    return await protectedInstance.delete(`/contacts/${id}`);
  },
  update: async (data) => {
    return await protectedInstance.put(`/contacts/${data._id}`, data);
  },
};

export default contactServices;
