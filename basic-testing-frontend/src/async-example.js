import jwt from "jsonwebtoken";

export function generateTokenWithCallback(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, "secret123", doneFn);
}

export function generateTokenNoCallback(userEmail) {
  return jwt.sign({ email: userEmail }, "secret123");
}

export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    if (!userEmail) reject("Please provide a valid email");
    jwt.sign({ email: userEmail }, "secret123", (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));
