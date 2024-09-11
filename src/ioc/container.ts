import { Container } from "inversify";
import { Symbols } from "./symbols";

const container = new Container({
  defaultScope: "Singleton",
});

container
  .bind<string>(Symbols.ApiBaseUrl)
  .toConstantValue(process.env.API_BASE_URL ?? "");

export default container;
