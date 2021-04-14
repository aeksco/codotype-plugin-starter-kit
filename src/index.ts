import { GeneratorProps } from "@codotype/core";

// Defines typed generator constant
const generator: GeneratorProps = {
    name: "Codotype Plugin Starter",
    async write({ runtime }) {
        await runtime.composeWith("./base");
        await runtime.composeWith("./plugin_meta");
    },
};

// exports generator constructor options
export = generator;
