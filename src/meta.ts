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
// GeneratorMeta Configuration Group

const GeneratorNameProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "Generator Name",
  identifier: "generatorName",
  description: "Name of the Generator",
  documentation: "",
  type: OptionType.STRING,
  defaultValue: ""
};

const GeneratorIdentifierProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "Generator Identifier",
  identifier: "generatorIdentifier",
  description: "Identifier of the Generator",
  documentation: "",
  type: OptionType.STRING,
  defaultValue: ""
};

const GeneratorDescriptionProperty: ConfigurationGroupProperty = {
  ...BASE_CONFIGURATION_GROUP_PROPERTY,
  label: "Generator Description",
  identifier: "generatorDescription",
  description: "Description of the Generator",
  documentation: "",
  type: OptionType.STRING,
  defaultValue: ""
};

const GeneratorMetaConfigurationGroup: ConfigurationGroup = {
  ...BASE_CONFIGURATION_GROUP,
  label: "Generator Meta",
  identifier: "generator_meta",
  description: "Metadata for the Codotype Generator",
  documentation: "",
  properties: [
    GeneratorNameProperty,
    GeneratorIdentifierProperty,
    GeneratorDescriptionProperty
  ]
};

// // // //
// // // //

const CodotypeGeneratorStarterMeta: GeneratorMeta = {
  id: "codotype-generator-starter-generator",
  label: "Codotype Generator Starter",
  homepage: "https://github.com/codotype/codotype-generator-starter",
  codotypeVersion: "0.8.0",
  experience: ExperienceRecommendation.BEGINNER,
  documentation: "",
  createdBy: {
    name: "Alexander Schwartzberg",
    contact: {
      github: "https://github.com/aeksco",
      twitter: "https://twitter.com/aeksco"
    }
  },
  icon:
    "https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png",
  description: "Generate a starter for a new Codotype Generator",
  techTags: ["Codotype", "TypeScript"],
  typeTags: ["Codotype Generator"],
  project_path: "codotype-generator-starter",
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
  configurationGroups: [GeneratorMetaConfigurationGroup]
};

// // // //

export default CodotypeGeneratorStarterMeta;
