interface ControlOption {
  IdQuestionControlOption: number;
  ControlItemName: string;
  ControlItemConditionValue: any; // You might want to replace 'any' with the actual type
  IdQuestionDependent: number;
  ControlItemSortOrder: number;
  ControlResultCriteria: any; // Replace 'any' with the actual type if possible
}

export interface Question {
  QuestionsID: number;
  QuestionsIDParent: number;
  QuestionsCode: string | null;
  QuestionsText: string | null;
  QuestionsSortOrder: number;
  QuestionsScore: number;
  QuestionsMandatory: boolean;
  QuestionsHelpText: string | null;
  Answer: string;
  QuestionsAutoFillAnswer: boolean;
  QuestionsDefaultValue: any; // Replace 'any' with the actual type if possible
  QuestionsDownloadLink: string | null;
  QuestionsOptionAlignment: number;
  QuestionsDownloadLinkLabel: string | null;
  QuestionsAllowCondition: any; // Replace 'any' with the actual type if possible
  QuestionsAllowConditionValue: any; // Replace 'any' with the actual type if possible
  QuestionsOptionsColumn: number;
  QuestionsMonitor: boolean;
  QuestionsIsGeographicalRegion: boolean;
  QuestionsIsSkillLots: boolean;
  QuestionsIdMonitorDocumentType: any; // Replace 'any' with the actual type if possible
  QuestionHeaderDescription: string | null;
  QuestionFooterDescription: string | null;
  QuestionLabel: string | null;
  QuestionLabelPosition: number;
  ControlID: number;
  ControlName: string;
  ControlHelpText: string | null;
  QuestionControlOption: ControlOption[] | null;
}

export interface Section {
  SectionID: number;
  SectionIDParent: number;
  SectionCode: string;
  SectionName: string;
  SectionHeaderDescription: string | null;
  SectionFooterDescription: string | null;
  SectionSortOrder: number;
  Questions: Question[];
}

// Now you can use these types in your React component
