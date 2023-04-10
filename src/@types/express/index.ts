//Here we are overwriting the Object Request from Express
// by adding a new object called user that has a propertie id

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
