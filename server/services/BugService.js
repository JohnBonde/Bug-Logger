import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    if (this.getById(id).closed == false) {
      let data = await _repository.findOneAndUpdate({ _id: id }, update);
      if (!data) {
        throw new ApiError("Invalid Update ID", 400);
      }
      return data;
    } else {
      this.getById(id);
    }
  }
  async delete(id) {
    let data = await _repository.findOneAndUpdate(
      { _id: id },
      { closed: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const bugService = new BugService();
export default bugService;
