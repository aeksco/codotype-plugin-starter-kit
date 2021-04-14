import { GeneratorProps } from "@codotype/core";

const Generator: GeneratorProps = {
    name: "Codotype Plugin Starter - Base",
    async write({ runtime }) {
        // Ensures /src directory is present
        await runtime.ensureDir("src");
        await runtime.ensureDir("src/base");
        await runtime.ensureDir("src/base/templates");

        // Copies directory
        await runtime.copyDir({
            src: "",
            dest: "",
        });

        // Copies directory
        await runtime.copyDir({
            src: "src/base/templates",
            dest: "src/base/templates",
        });

        // Writes src/index.ts
        await runtime.renderTemplate({
            src: "src/index.ts",
            dest: "src/index.ts",
        });

        // Writes src/base/index.ts
        await runtime.renderTemplate({
            src: "src/base/index.ts",
            dest: "src/base/index.ts",
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

        // Writes docker-compose.yml
        await runtime.renderTemplate({
            src: "docker-compose.yml",
            dest: "docker-compose.yml",
        });
    },
};

export = Generator;
