
export const Cambio = (i:number, on:boolean[])=>{
  const newOn = on.map((_, index) => index === i);
  on = newOn
}