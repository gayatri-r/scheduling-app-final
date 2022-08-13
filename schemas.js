//CHANGED 6:21 pm
import { ObjectId } from "bson";

class ShiftLog {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    email,
    date,
    timeIn,
    timeOut,
    lateStatus,
    absenceStatus,
    partition,
    id = new ObjectId(),
  }) {
    //this.name = name;
    this.email = email;
    this.date = date;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
    this.lateStatus = lateStatus;
    this.absenceStatus = absenceStatus;
    this._partition = partition;
    this._id = id;
  }

  static schema = {
    name: "Shift",
    properties: {
      _id: "objectId",
      email: "string",
      date: "string",
      timeIn: "string",
      timeOut: "string",
      lateStatus: "string",
      absenceStatus: "string",
    },
    primaryKey: "_id",
  };
}

export { ShiftLog };
