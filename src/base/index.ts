import { GeneratorProps } from "@codotype/core";

const Generator: GeneratorProps = {
    name: "Codotype Plugin Starter - Base",
    async write({ runtime }) {
        // Ensures /src directory is present
        runtime.ensureDir("src");
        runtime.ensureDir("src/base");

        // Writes LICENSE
        await runtime.renderTemplate({
            src: "LICENSE",
            dest: "LICENSE",
        });

        // Writes README.md
        await runtime.renderTemplate({
            src: "README.md",
            dest: "README.md",
        });

        // Writes package.json
        await runtime.renderTemplate({
            src: "package.json",
            dest: "package.json",
        });

        // Writes src/meta.ts
        await runtime.renderTemplate({
            src: "src/meta.ts",
            dest: "src/meta.ts",
        });
    },
};

export = Generator;
