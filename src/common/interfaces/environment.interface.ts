export interface IEnvironment {
  mongo: string; // url string mongo database connection
  secret: string; // word secret for JWT
  port: number;
}
