import {LayoutType} from './constants';
import {isComponentOfType} from './helpers';

/**
 * Selector returning active screen's component id
 * @param state redux store state
 * @returns {string} Id of active screen's component
 */
export const getActiveScreenId = (state) => {
  const activeScreenArray = state.navigation.activeScreenArray;
  return activeScreenArray[0];
}

const getActiveIdForType = (state, type) => {
  const activeScreenArray = state.navigation.activeScreenArray;
  return activeScreenArray.find(component => isComponentOfType(state.navigation.root, component, type)) || activeScreenArray.find(component => isComponentOfType(state.navigation.modals, component, type));
}

/**
 * Selector returning active stack component id
 * @param state redux store state
 * @returns {string} Active stack id
 */
export const getActiveStackId = state => {
  return getActiveIdForType(state, LayoutType.Stack);
}

/**
 * Selector returning active bottom tabs index
 * @param state redux store state
 * @returns {string} Active bottom tabs id
 */
export const getActiveBottomTabsId = state => {
  return getActiveIdForType(state, LayoutType.BottomTabs);

}

/**
 * Selector returning active top tabs index
 * @param state redux store state
 * @returns {string} Active top tabs id
 */
export const getActiveTopTabsId = state => {
  return getActiveIdForType(state, LayoutType.TopTabs);
}

/**
 * Selector returning active side menu center index
 * @param state redux store state
 * @returns {string} Active side menu center id
 */
export const getActiveSideMenuCenterId = state => {
  return getActiveIdForType(state, LayoutType.SideMenuCenter);
}

/**
 * Selector returning active side menu left index
 * @param state redux store state
 * @returns {string} Active side menu left id
 */
export const getActiveSideMenuLeftId = state => {
  return getActiveIdForType(state, LayoutType.SideMenuLeft);
}

/**
 * Selector returning active side menu right index
 * @param state redux store state
 * @returns {string} Active side menu right id
 */
export const getActiveSideMenuRightId = state => {
  return getActiveIdForType(state, LayoutType.SideMenuRight);
}

/**
 * Selector returning active side menu root index
 * @param state redux store state
 * @returns {string} Active side menu root id
 */
export const getActiveSideMenuRootId = state => {
  return getActiveIdForType(state, LayoutType.SideMenuRoot);
}