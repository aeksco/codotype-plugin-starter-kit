import { ConstructorOptions } from "@codotype/generator";
import { BasicConfigurationGroup } from "../meta";

const Generator: ConstructorOptions = {
  name: "<%= project.identifiers.label %> - Base",
  async write({ project }) {
    // Copies contents of "./templates" directory into the root of the generated code's destination
    await this.copyDir({ src: "", dest: "" });

    // Compiles LICENSE + README.md templates
    await this.renderComponent({
      src: "LICENSE",
      dest: "LICENSE"
    });
    await this.renderComponent({
      src: "README.md",
      dest: "README.md"
    });

    // Pulls 'basic' configuration from project.configuration
    const basic = project.configuration[BasicConfigurationGroup.identifier];

    // Compiles example template using properties from the `basic` ConfigurationGroup defined in `meta.ts`
    await this.renderComponent({
      src: "basic.txt",
      dest: "basic.txt",
      data: { basic: basic }
    });
  }
};

export = Generator;
