export function reverseString(string){
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--){
    reversed += string.charAt(i);
  }
  return reversed;
}