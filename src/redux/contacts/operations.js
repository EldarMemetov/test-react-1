import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:3000/";

export const fetchAll = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (newContacts, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContacts);
      toast.success("Contact added");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);
      toast.success("Contact delete");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContacts",
  async ({ contactsId, updateData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactsId}`, updateData);
      toast.success("Contact Update");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
