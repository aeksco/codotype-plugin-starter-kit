import { ConstructorOptions } from "@codotype/generator";

const Generator: ConstructorOptions = {
  name: "Codotype Generator Starter - Base",
  async write({ project }) {
    // Copies server base code
    await this.copyDir({ src: "", dest: "" });

    // Isolates UserSchema + build inlineDeconstruction
    // const userSchema = project.schemas.find(
    //   s => s.identifiers.singular.snake === "user"
    // );
    // const inlineDeconstruction = userSchema.attributes
    //   .map(r => r.identifiers.snake)
    //   .join(", ");

    // Renders auth controller
    // await this.renderComponent({
    //   src: "src/api/auth/auth.controller.js",
    //   dest: "src/api/auth/auth.controller.js",
    //   data: { inlineDeconstruction }
    // });

    // Writes LICENSE + package.json
    await this.renderComponent({ src: "LICENSE", dest: "LICENSE" });
    await this.renderComponent({ src: "README.md", dest: "README.md" });
    await this.renderComponent({ src: "package.json", dest: "package.json" });
    await this.renderComponent({ src: "src/meta.ts", dest: "src/meta.ts" });
  }
};

export = Generator;
