export let message: string = "Hello world!";

export function returnMessage(message: string): string {
  return message;
}

console.log(returnMessage(message));
