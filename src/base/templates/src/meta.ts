import {
  GeneratorMeta,
  ExperienceRecommendation,
  ConfigurationGroup,
  GroupLayoutVariant,
  OptionType,
  ConfigurationGroupProperty,
  PropertyLayoutVariant
} from "@codotype/types";

// // // //

const BASE_CONFIGURATION_GROUP_PROPERTY: ConfigurationGroupProperty = {
  label: "BASE_PROPERTY",
  identifier: "BASE_PROPERTY",
  type: OptionType.STRING,
  description: "",
  documentation: "",
  layoutVariant: PropertyLayoutVariant.HIDDEN,
  defaultValue: false,
  icon: "",
  enabled: true,
  required: false,
  allowDisable: false,
  properties: [],
  dropdownOptions: [],
  filters: [],
  validations: []
};

const BASE_CONFIGURATION_GROUP: ConfigurationGroup = {
  label: "BASE_CONFIGURATION_GROUP",
  identifier: "base_configuration_group",
  description: "BASE_CONFIGURATION_GROUP DESC.",
  documentation: "",
  enabled: true,
  allowDisable: false,
  layoutVariant: GroupLayoutVariant.TABS,
  sections: [],
  properties: []
};

// // // //
// Basic Configuration Group

const StringProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "String",
  identifier: "string",
  description: "Standard string input",
  type: OptionType.STRING,
  defaultValue: ""
};

const NumberProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "Number",
  identifier: "number",
  description: "Standard Number input",
  type: OptionType.NUMBER,
  defaultValue: ""
};

const BooleanProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "Boolean",
  identifier: "boolean",
  description: "Standard Boolean input",
  type: OptionType.BOOLEAN,
  defaultValue: false
};

const DropdownProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "Dropdown",
  identifier: "dropdown",
  description: "Standard Dropdown input",
  type: OptionType.DROPDOWN,
  defaultValue: "one",
  dropdownOptions: [
    { value: "one", label: "Option One" },
    { value: "two", label: "Option Two" },
    { value: "three", label: "Option Three" },
  ]
};

export const BasicConfigurationGroup: ConfigurationGroup = {
  ...BASE_CONFIGURATION_GROUP,
  label: "Basic Configuration Group",
  identifier: "basic",
  description: "Basic Configuration Group",
  documentation: "",
  properties: [
    StringProperty,
    NumberProperty,
    BooleanProperty,
    DropdownProperty
  ]
};

// // // //

const <%= project.identifiers.pascal %>: GeneratorMeta = {
  id: "<%= project.identifiers.kebab %>",
  label: "<%= project.identifiers.label %>",
  homepage: "https://github.com/codotype/codotype",
  codotypeVersion: "0.8.0",
  experience: ExperienceRecommendation.BEGINNER,
  documentation: "",
  createdBy: {
    name: "AUTHOR GOES HERE",
    contact: {
      github: "https://github.com/AUTHOR",
      twitter: "https://twitter.com/AUTHOR"
    }
  },
  icon:
    "https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png",
  description: "DESCRIPTION GOES HERE",
  techTags: [],
  typeTags: [],
  project_path: "<%= project.identifiers.snake %>",
  version: "0.1.0",
  schemaEditorConfiguration: {
    enableAttributeDefaultValue: true,
    documentation: "",
    defaultSchemas: [],
    attributeAddons: [],
    defaultAttributes: [],
    defaultRelations: [],
    configurationGroups: [],
    supportedDatatypes: [],
    supportedRelations: []
  },
  configurationGroups: [BasicConfigurationGroup]
};

// // // //

export default <%= project.identifiers.pascal %>;
