export const categoryMapping = (category)=>{
    let modifiedCategory;

    switch (category) {
      case "Grocery":
        modifiedCategory = "Grocery";
        break;
      case "Mobiles":
        modifiedCategory = "Mobiles";
        break;
      case "Fashion":
        modifiedCategory = "Fashion";
        break;
      case "Electronics":
        modifiedCategory = "Electronics";
        break;
      case "Home & Furniture":
        modifiedCategory = "Homefurniture";
        break;
      case "Appliances":
        modifiedCategory = "Appliance";
        break;
      case "Beauty, Toys & More":
        modifiedCategory = "Beautyandtoys";
        break;
      case "Two Wheelers":
        modifiedCategory = "Twowheelers";
        break;
      default:
        modifiedCategory = "Unknown";
        break;
    }
    return modifiedCategory;
}