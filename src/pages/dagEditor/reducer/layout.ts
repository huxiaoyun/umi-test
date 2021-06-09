import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  rightContainer: {
    isCollapse: true,
  },
  bottomContainer: {
    isCollapse: true,
  },
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleCollapseRightContainer: (state) => {
      state.rightContainer.isCollapse = !state.rightContainer.isCollapse;
    },
    toggleCollapseBottomContainer: (state) => {
      state.bottomContainer.isCollapse = !state.bottomContainer.isCollapse;
    },
  },
});

export const { toggleCollapseRightContainer, toggleCollapseBottomContainer } =
  layoutSlice.actions;

export const isRightContainerCollapse = (state: RootState) =>
  state.layout.rightContainer.isCollapse;
export const isBottomContainerCollapse = (state: RootState) =>
  state.layout.bottomContainer.isCollapse;

export default layoutSlice.reducer;
