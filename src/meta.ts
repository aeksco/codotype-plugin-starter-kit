import {
    PluginMetadata,
    ExperienceRecommendations,
    ConfigurationGroup,
    PropertyTypes,
    ConfigurationProperty,
    PropertyLayoutVariants,
    Primatives,
    GroupLayoutVariants,
} from "@codotype/core";

// // // //

const BASE_CONFIGURATION_GROUP_PROPERTY: ConfigurationProperty = new Primatives.ConfigurationProperty(
    {
        identifier: "BASE_PROPERTY",
        content: {
            icon: "",
            label: "BASE_PROPERTY",
            description: "",
            documentation: "",
        },
        type: PropertyTypes.STRING,
        layoutVariant: PropertyLayoutVariants.CARD_COL_12,
        defaultValue: false,
        required: false,
        allowDisable: false,
        properties: [],
        dropdownOptions: [],
        validations: [],
    },
);

const BASE_CONFIGURATION_GROUP: ConfigurationGroup = new Primatives.ConfigurationGroup(
    {
        identifier: "base_configuration_group",
        content: {
            label: "BASE_CONFIGURATION_GROUP",
            description: "BASE_CONFIGURATION_GROUP DESC.",
            documentation: "",
        },
        enabled: true,
        allowDisable: false,
        layoutVariant: GroupLayoutVariants.TABS,
        sections: [],
        properties: [],
    },
);

// // // //
// GeneratorMeta Configuration Group

const GeneratorNameProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "generatorName",
    content: {
        ...BASE_CONFIGURATION_GROUP.content,
        label: "Generator Name",
        description: "Name of the Generator",
        documentation: "",
    },
    type: PropertyTypes.STRING,
    defaultValue: "",
};

const GeneratorIdentifierProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "generatorIdentifier",
    content: {
        ...BASE_CONFIGURATION_GROUP_PROPERTY.content,
        label: "Generator Identifier",
        description: "Identifier of the Generator",
        documentation: "",
    },
    type: PropertyTypes.STRING,
    defaultValue: "",
};

const GeneratorDescriptionProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "generatorDescription",
    content: {
        ...BASE_CONFIGURATION_GROUP_PROPERTY.content,
        label: "Generator Description",
        description: "Description of the Generator",
        documentation: "",
    },
    type: PropertyTypes.STRING,
    defaultValue: "",
};

const GeneratorMetaConfigurationGroup: ConfigurationGroup = {
    ...BASE_CONFIGURATION_GROUP,
    identifier: "generator_meta",
    content: {
        label: "Generator Meta",
        description: "Metadata for the Codotype Generator",
        documentation: "",
        icon: "",
    },
    properties: [
        GeneratorNameProperty,
        GeneratorIdentifierProperty,
        GeneratorDescriptionProperty,
    ],
};

// // // //
// // // //

const CodotypeGeneratorStarterMeta: PluginMetadata = {
    identifier: "codotype-plugin-starter",
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
};

// // // //

export default CodotypeGeneratorStarterMeta;
