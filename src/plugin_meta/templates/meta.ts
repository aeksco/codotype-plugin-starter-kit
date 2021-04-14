import {
    PluginMetadata,
    ExperienceRecommendations,
    ConfigurationGroup,
    PropertyTypes,
    ConfigurationProperty,
    Primitives,
    SchemaEditorConfiguration,
    <%_ if (enableDataModelEditor) { _%>
    CreatedByValues,
    RelationTypes,
    Datatypes,
    <%_ } _%>
} from "@codotype/core";

<%_ if (enableDataModelEditor) { _%>
// // // //
// Data Model Editor (full example)

export const schemaEditorConfiguration: SchemaEditorConfiguration = {
    supportedRelationTypes: [RelationTypes.TO_ONE, RelationTypes.TO_MANY],
    supportedDatatypes: [
        Datatypes.STRING,
        Datatypes.INT,
        Datatypes.FLOAT,
        Datatypes.TIMESTAMP,
        // Datatypes.STRING_ARRAY,
        // Datatypes.NUMERIC_ARRAY,
        // Datatypes.OBJECT,
    ],
    configurationGroups: [],
    attributeAddons: [],
    relationAddons: [],
    newSchemaDefaults: {
        relations: [],
        attributes: [
            {
                id: "ObjectID-Attribute",
                identifiers: {
                    title: "_id",
                    snake: "_id",
                    camel: "_id",
                    pascal: "_id",
                    kebab: "_id",
                },
                addons: {
                    // [ATTRIBUTE_ADDON_PRIMARY_KEY.identifier]: true,
                },
                datatype: Datatypes.OBJECT_ID,
                locked: true,
                createdBy: CreatedByValues.plugin,
                internalNote: "The MongoDB ObjectID",
            },
        ],
    },
    defaultRelations: [],
    defaultSchemas: [
        {
            id: "USER_SCHEMA",
            identifiers: {
                singular: {
                    title: "User",
                    snake: "user",
                    camel: "user",
                    pascal: "User",
                    kebab: "user",
                },
                plural: {
                    title: "Users",
                    snake: "users",
                    camel: "users",
                    pascal: "Users",
                    kebab: "users",
                },
            },
            locked: true,
            createdBy: CreatedByValues.plugin,
            internalNote: "",
            attributes: [
                {
                    id: "ObjectID-Attribute",
                    identifiers: {
                        title: "_id",
                        snake: "_id",
                        camel: "_id",
                        pascal: "_id",
                        kebab: "_id",
                    },
                    addons: {},
                    datatype: Datatypes.STRING,
                    locked: true,
                    createdBy: CreatedByValues.plugin,
                    internalNote: "The MongoDB ObjectID of the user",
                },
                {
                    id: "Email-Attribute",
                    identifiers: {
                        title: "Email",
                        snake: "email",
                        camel: "email",
                        pascal: "Email",
                        kebab: "email",
                    },
                    addons: {},
                    datatype: Datatypes.STRING,
                    locked: true,
                    createdBy: CreatedByValues.plugin,
                    internalNote: "The email of the user",
                },
            ],
            configuration: {},
        },
    ],
};
<%_ } else { _%>
// // // //
// Data Model Editor (disabled)

const schemaEditorConfiguration: SchemaEditorConfiguration = {
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
}
<%_ } _%>

// // // //
// Basic Configuration Group

const StringProperty: ConfigurationProperty = new Primitives.ConfigurationProperty({
    identifier: "string",
    content: {
        label: "String",
        description: "Standard string input",
        icon: "",
        documentation: "",
    },
    type: PropertyTypes.STRING,
    defaultValue: "",
})

const NumberProperty: ConfigurationProperty = new Primitives.ConfigurationProperty({
    identifier: "number",
    content: {
        label: "Number",
        description: "Standard Number input",
        documentation: "",
        icon: "",
    },
    type: PropertyTypes.NUMBER,
    defaultValue: "",
})

const BooleanProperty: ConfigurationProperty = new Primitives.ConfigurationProperty({
    identifier: "boolean",
    content: {
        label: "Boolean",
        description: "Standard Boolean input",
        icon: "",
        documentation: "",
    },
    type: PropertyTypes.BOOLEAN,
    defaultValue: false,
})

const DropdownProperty: ConfigurationProperty = new Primitives.ConfigurationProperty({
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
})

export const BasicConfigurationGroup: ConfigurationGroup = new Primitives.ConfigurationGroup({
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
})

// // // //

const plugin: PluginMetadata = new Primitives.Plugin({
    identifier: "<%= project.identifiers.kebab %>",
    content: {
        label: "<%= project.identifiers.title %>",
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
    schemaEditorConfiguration: schemaEditorConfiguration,
    configurationGroups: [BasicConfigurationGroup],
});

// // // //

export default plugin;
