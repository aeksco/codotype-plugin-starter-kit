import { GeneratorProps } from "@codotype/core";
import { BasicConfigurationGroup } from "../meta";

const Generator: GeneratorProps = {
    name: "<%= project.identifiers.title %> - Base",
    async write({ runtime, project }) {
        // Copies contents of "./templates" directory into the root of the generated code's destination
        await runtime.copyDir({ src: "", dest: "" });

        // Compiles LICENSE + README.md templates
        await runtime.renderTemplate({
            src: "LICENSE",
            dest: "LICENSE",
        });
        await runtime.renderTemplate({
            src: "README.md",
            dest: "README.md",
        });

        // Pulls 'basic' configuration from project.configuration
        const basic = project.configuration[BasicConfigurationGroup.identifier];

        // Compiles example template using properties from the `basic` ConfigurationGroup defined in `meta.ts`
        await runtime.renderTemplate({
            src: "basic.txt",
            dest: "basic.txt",
            data: { basic: basic },
        });
    },
};

export = Generator;
