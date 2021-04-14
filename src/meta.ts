import {
    ExperienceRecommendations,
    ConfigurationGroup,
    PropertyTypes,
    Primatives,
} from "@codotype/core";

// // // //
// GeneratorMeta Configuration Group

// const GeneratorNameProperty: ConfigurationProperty = {
//     ...BASE_CONFIGURATION_GROUP_PROPERTY,
//     identifier: "generatorName",
//     content: {
//         ...BASE_CONFIGURATION_GROUP.content,
//         label: "Generator Name",
//         description: "Name of the Generator",
//         documentation: "",
//     },
//     type: PropertyTypes.STRING,
//     defaultValue: "",
// };

// const GeneratorIdentifierProperty: ConfigurationProperty = {
//     ...BASE_CONFIGURATION_GROUP_PROPERTY,
//     identifier: "generatorIdentifier",
//     content: {
//         ...BASE_CONFIGURATION_GROUP_PROPERTY.content,
//         label: "Generator Identifier",
//         description: "Identifier of the Generator",
//         documentation: "",
//     },
//     type: PropertyTypes.STRING,
//     defaultValue: "",
// };

// const GeneratorDescriptionProperty: ConfigurationProperty = {
//     ...BASE_CONFIGURATION_GROUP_PROPERTY,
//     identifier: "generatorDescription",
//     content: {
//         ...BASE_CONFIGURATION_GROUP_PROPERTY.content,
//         label: "Generator Description",
//         description: "Description of the Generator",
//         documentation: "",
//     },
//     type: PropertyTypes.STRING,
//     defaultValue: "",
// };

export const EnableDataModelEditor = new Primatives.ConfigurationProperty({
    identifier: "enableDataModelEditor",
    content: {
        label: "Data Model Editor",
        description: "Enable the Data Model Editor in your Codotype Plugin",
        icon: "https://ogp.me/logo.png",
        documentation: "",
    },
    type: PropertyTypes.BOOLEAN,
});

export const GeneratorMetaConfigurationGroup: ConfigurationGroup = new Primatives.ConfigurationGroup(
    {
        identifier: "pluginMeta",
        content: {
            label: "Plugin Meta",
            description:
                "Get started quickly by customizing the type of Codotype Plugin you would like to make",
            documentation: "",
            icon: "",
        },
        properties: [EnableDataModelEditor],
    },
);

// // // //

const CodotypeGeneratorStarterMeta = new Primatives.Plugin({
    // identifier: "codotype-plugin-starter",
    id: "codotype-plugin-starter", // TODO - rename this to identifier
    content: {
        label: "Codotype Plugin Starter",
        documentation: "",
        icon:
            "https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png",
        description: "Generate a starter for a new Codotype Plugin",
    },
    homepage: "https://github.com/codotype/codotype-plugin-starter",
    codotypeVersion: "0.8.0",
    experience: ExperienceRecommendations.beginner,
    createdBy: {
        name: "Alexander Schwartzberg",
        contact: {
            github: "https://github.com/aeksco",
            twitter: "https://twitter.com/aeksco",
        },
    },
    exampleProjects: [],
    techTags: ["Codotype", "TypeScript"],
    typeTags: ["Codotype Plugin"],
    project_path: "codotype-plugin-starter",
    version: "0.1.0",
    schemaEditorConfiguration: {
        defaultSchemas: [],
        attributeAddons: [],
        defaultRelations: [],
        configurationGroups: [],
        supportedDatatypes: [],
        supportedRelationTypes: [],
        newSchemaDefaults: {
            attributes: [],
            relations: [],
        },
        relationAddons: [],
    },
    configurationGroups: [GeneratorMetaConfigurationGroup],
});

// // // //

export default CodotypeGeneratorStarterMeta;
