import { ConstructorOptions } from "@codotype/generator";

// Defines typed generator constant
const generator: ConstructorOptions = {
  name: "Codotype Generator Starter",
  async write() {
    await this.composeWith("./base");
  }
};

// exports generator constructor options
export = generator;
