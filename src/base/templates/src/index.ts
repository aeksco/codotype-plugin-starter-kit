import { ConstructorOptions } from "@codotype/generator";

// Defines typed generator constant
const generator: ConstructorOptions = {
  name: "<%= project.identifiers.label %>",
  async write() {
    await this.composeWith("./base");
  }
};

// exports generator constructor options
export = generator;
