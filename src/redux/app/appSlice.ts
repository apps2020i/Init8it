import { createSlice } from "@reduxjs/toolkit";
import authApi from "../../services/authService";
import { storeData } from "../../helpers/localstorage";
import { ASYNC_STORE_VAR } from "../../constants/constants";
import appApi from "../../services/appServices";
import { createTable, insertData } from "../../../Database";
import Database from "../../../JsonResp";

export interface appState {
  businessList?: any[];
}

const initialState: appState = {
  businessList: [],
};

const appSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    setBusinessList: (state, action) => {
      console.log("Redux Business List", action?.payload, state.businessList);

      const data = Database;

      const updatedData = data.map((scheme) => {
        const updatedSections = scheme.Sections.map((section) => {
          const updatedQuestions = section.Questions.map((question) => {
            const foundItem = action?.payload.find(
              (dataItem: { QuestionsID: number }) =>
                dataItem.QuestionsID === question.QuestionsID
            );

            return {
              ...question,
              Answer: foundItem ? foundItem.answer : question.Answer,
            };
          });

          return {
            ...section,
            Questions: updatedQuestions,
          };
        });

        return {
          ...scheme,
          Sections: updatedSections,
        };
      });

      updatedData.map((item) => {
        console.log("Ites are showingg", item.Sections[0]?.Questions);
      });

      state.businessList = updatedData;
    },
  },
  extraReducers: (builder: any) => {
    console.log("random get api calling....");
    builder.addMatcher(
      appApi.endpoints.fetchBusinessList.matchFulfilled,
      (state: any, action: any) => {
        console.log("bbbusiness List api", action.payload);

        const dynamicColumns = Array.from(
          new Set(Database.flatMap((item) => Object.keys(item)))
        );

        // createTable('businessList', dynamicColumns);
        // insertData('businessList', Database);

        state.businessList = Database;
      }
    );
  },
});

export const { setBusinessList } = appSlice.actions;

export default appSlice;
