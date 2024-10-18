// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = "http://localhost:3000/";

// export const fetchAll = createAsyncThunk(
//   "contacts/fetchContacts",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContacts = createAsyncThunk(
//   "contacts/addContacts",
//   async (newContacts, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", newContacts);
//       toast.success("Contact added");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContacts = createAsyncThunk(
//   "contacts/deleteContacts",
//   async (contactsId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactsId}`);
//       toast.success("Contact delete");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const editContact = createAsyncThunk(
//   "contacts/editContacts",
//   async ({ contactsId, updateData }, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/contacts/${contactsId}`, updateData);
//       toast.success("Contact Update");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// operations.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://your-api-url.com/"; // Укажите ваш URL API

// Добавление нового объема воды
export const addWaterVolume = createAsyncThunk(
  "water/addVolume",
  async (volumeData, thunkAPI) => {
    try {
      const response = await axios.post("/water", volumeData);
      toast.success("Water volume added successfully.");
      return response.data; // Возвращаем добавленный объем воды
    } catch (error) {
      toast.error("Failed to add water volume.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Получение всех объемов воды
export const fetchWaterVolumes = createAsyncThunk(
  "water/fetchVolumes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/water");
      return response.data; // Возвращаем все объемы воды
    } catch (error) {
      toast.error("Failed to fetch water volumes.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Обновление объема воды
export const updateWaterVolume = createAsyncThunk(
  "water/updateVolume",
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${id}`, updatedData);
      toast.success("Water volume updated successfully.");
      return response.data; // Возвращаем обновленный объем воды
    } catch (error) {
      toast.error("Failed to update water volume.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Удаление объема воды
export const deleteWaterVolume = createAsyncThunk(
  "water/deleteVolume",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/water/${id}`);
      toast.success("Water volume deleted successfully.");
      return id; // Возвращаем ID удаленного объема воды
    } catch (error) {
      toast.error("Failed to delete water volume.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
