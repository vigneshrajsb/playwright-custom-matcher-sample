export {};

declare global {
  namespace PlaywrightTest {
     interface Matchers<R> {
       toBeWithinRange(a: number, b: number): R;
     }
   }
 }