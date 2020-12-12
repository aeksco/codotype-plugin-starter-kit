import {
    PluginMetadata,
    ExperienceRecommendations,
    ConfigurationGroup,
    GroupLayoutVariants,
    PropertyTypes,
    ConfigurationProperty,
    PropertyLayoutVariants,
    Primatives,
} from "@codotype/core";

// // // //

const BASE_CONFIGURATION_GROUP_PROPERTY: ConfigurationProperty = new Primatives.ConfigurationProperty(
    {
        identifier: "BASE_PROPERTY",
        content: {
            label: "BASE_PROPERTY",
            description: "",
            documentation: "",
            icon: "",
        },
        type: PropertyTypes.STRING,
        layoutVariant: PropertyLayoutVariants.COL_12,
        defaultValue: false,
        enabledByDefault: true,
        required: false,
        allowDisable: false,
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
// Basic Configuration Group

const StringProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "string",
    content: {
        label: "String",
        description: "Standard string input",
        icon: "",
        documentation: "",
    },
    type: PropertyTypes.STRING,
    defaultValue: "",
};

const NumberProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "number",
    content: {
        label: "Number",
        description: "Standard Number input",
        documentation: "",
        icon: "",
    },
    type: PropertyTypes.NUMBER,
    defaultValue: "",
};

const BooleanProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "boolean",
    content: {
        label: "Boolean",
        description: "Standard Boolean input",
        icon: "",
        documentation: "",
    },
    type: PropertyTypes.BOOLEAN,
    defaultValue: false,
};

const DropdownProperty: ConfigurationProperty = {
    ...BASE_CONFIGURATION_GROUP_PROPERTY,
    identifier: "dropdown",
    content: {
        label: "Dropdown",
        description: "Standard Dropdown input",
        icon: "",
        documentation: "",
    },
    type: PropertyTypes.DROPDOWN,
    defaultValue: "one",
    dropdownOptions: [
        { value: "one", label: "Option One" },
        { value: "two", label: "Option Two" },
        { value: "three", label: "Option Three" },
    ],
};

export const BasicConfigurationGroup: ConfigurationGroup = {
    ...BASE_CONFIGURATION_GROUP,
    identifier: "basic",
    content: {
        label: "Basic Configuration Group",
        description: "Basic Configuration Group",
        documentation: "",
        icon: "",
    },
    properties: [
        StringProperty,
        NumberProperty,
        BooleanProperty,
        DropdownProperty,
    ],
};

// // // //

const plugin: PluginMetadata = new Primatives.Plugin({
    id: "<%= project.identifiers.kebab %>", // TODO - rename this property to "identifier"
    content: {
        label: "<%= project.identifiers.label %>",
        description: "DESCRIPTION GOES HERE",
        documentation: "",
        icon:
            "https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png",
    },
    homepage: "https://github.com/codotype/codotype",
    codotypeVersion: "0.8.0",
    experience: ExperienceRecommendations.beginner,
    createdBy: {
        name: "AUTHOR GOES HERE",
        contact: {
            github: "https://github.com/AUTHOR",
            twitter: "https://twitter.com/AUTHOR",
        },
    },
    techTags: [],
    typeTags: [],
    project_path: "<%= project.identifiers.snake %>",
    version: "0.1.0",
    schemaEditorConfiguration: {
        defaultSchemas: [],
        attributeAddons: [],
        relationAddons: [],
        defaultRelations: [],
        configurationGroups: [],
        newSchemaDefaults: {
            relations: [],
            attributes: [],
        },
        supportedDatatypes: [],
        supportedRelationTypes: [],
    },
    configurationGroups: [BasicConfigurationGroup],
});

// // // //

export default plugin;
