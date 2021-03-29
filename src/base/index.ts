import { GeneratorProps } from "@codotype/core";

const Generator: GeneratorProps = {
    name: "Codotype Plugin Starter - Base",
    async write({ runtime }) {
        // Ensures /src directory is present
        await runtime.ensureDir("src");
        await runtime.ensureDir("src/base");

        // Copies directory
        await runtime.copyDir({
            src: "",
            dest: "",
        });

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

        // Writes docker-compose.yml
        await runtime.renderTemplate({
            src: "docker-compose.yml",
            dest: "docker-compose.yml",
        });
    },
};

export = Generator;
