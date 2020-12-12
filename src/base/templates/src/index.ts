import { GeneratorProps } from "@codotype/core";

// Defines typed generator constant
const generator: GeneratorProps = {
    name: "<%= project.identifiers.label %>",
    async write() {
        await this.composeWith("./base");
    },
};

// exports generator constructor options
export = generator;
