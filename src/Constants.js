import { MoreHorizontal, Plus } from "react-feather";
export default class Constants {
  static BASE_URL = "https://api.quicksell.co/";

  static INIT_DATA_URL = `${this.BASE_URL}v1/internal/frontend-assignment`;
  static groupingOptions = ["User", "Progress", "Priority"];
  static orderingOptions = ["Priority", "Title"];
  static priorityOptions = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };
  static icons = {
    0: "MoreHorizontal",
    1: "Plus",
  }
  static progressOptions = ["Todo", "In Progress", "Done", "Canceled"];
  static selectedOrderKey = "selected-order";
  static selectedGroupingKey = "selected-grouping";
}
