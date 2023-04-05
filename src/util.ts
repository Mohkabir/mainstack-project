import nigeria from "./assets/images/nigeria.png";
import unitedKingdom from "./assets/images/united-kingdom.png";
import finland from "./assets/images/andorra.png";
import ghana from "./assets/images/ghana.png";
import instagram from "./assets/images/Instagram.png";
import facebook from "./assets/images/facebook.png";
import google from "./assets/images/google.png";
import linkedin from "./assets/images/linkedin.png";
import germany from "./assets/images/germany.png";

export const checkImage = (name: string | undefined) => {
  if (name?.toLowerCase() === "nigeria") {
    return nigeria;
  }
  if (name?.toLowerCase() === "instagram") {
    return instagram;
  }
  if (name?.toLowerCase() === "facebook") {
    return facebook;
  }
  if (name?.toLowerCase() === "linkedin") {
    return linkedin;
  }
  if (name?.toLowerCase() === "google") {
    return google;
  }
  if (name?.toLowerCase() === "ghana") {
    return ghana;
  }
  if (name?.toLowerCase() === "finland") {
    return finland;
  }
  if (name?.toLowerCase() === "germany") {
    return germany;
  }
  if (name?.toLowerCase() === "united kingdom") {
    return unitedKingdom;
  }
};
