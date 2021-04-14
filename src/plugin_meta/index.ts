import { GeneratorProps, PrettifyParsers } from "@codotype/core";
import {
    EnableDataModelEditor,
    GeneratorMetaConfigurationGroup,
} from "../meta";

const Generator: GeneratorProps = {
    name: "Codotype Plugin Starter - meta.ts",
    async write({ runtime, project }) {
        // Pull value for EnableDataModelEditor property
        const enableDataModelEditor: boolean =
            project.configuration[GeneratorMetaConfigurationGroup.identifier][
                EnableDataModelEditor.identifier
            ];

        // Writes src/meta.ts
        await runtime.renderTemplate({
            src: "meta.ts",
            dest: "src/meta.ts",
            data: {
                enableDataModelEditor,
            },
            options: {
                prettify: {
                    parser: PrettifyParsers.typescript,
                },
            },
        });
    },
};

export = Generator;
