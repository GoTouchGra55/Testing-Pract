export function capitalize(string){
  let capitalizedString = "";
  for (let i = 0; i < string.length; i++){
    capitalizedString += string.charAt(i).toUpperCase();
  }
  return capitalizedString;
}