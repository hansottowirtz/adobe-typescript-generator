/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * This is the Object which holds methods and properties for 
		 * working with the Tween Preset Panel.
		 */
		class PresetPanel extends Adobe.Csawlib.CSHostObject {
			/**
			 * An array of presetItem objects in the Preset Panel. Each 
			 * object represents either a folder or a preset.
			 */
			public readonly items: any[];
			/**
			 * Adds a preset if there is exactly one object selected on 
			 * stage, and that object is a Motion Tween. The selected item 
			 * array length should be 1. This method will fail if the 
			 * selection array length not 1, or if the selected object does 
			 * not have a tween. Returns a Boolean: true if successful, 
			 * false otherwise.
			 * @param {string} namePath This is the folder inclusive path 
			 * within the Preset Panel. If argument is not supplied, a 
			 * default name will be used [Custom preset n] and the root 
			 * folder for custom presets will be the location. All of the 
			 * folders in the path need to already exist in the tree. If 
			 * namePath specifies a preset that already exists, the new 
			 * preset will NOT be added, and this function will return 
			 * false. If successful, the new preset will be selected in the 
			 * panel.
			 */
			public addNewItem(namePath: string): boolean;
			/**
			 * Applies the currently selected item in the presets panel to 
			 * the selected symbol on the stage, converting the symbol to a 
			 * motion tween.
			 * If the stage selection is not a symbol, but can be converted 
			 * into a symbol, it will be automatically converted to a 
			 * symbol so that the preset can be applied.
			 * If the stage selection is already a motion tween object, 
			 * then the preset will replace the motion.
			 * Returns a Boolean: true if successful, false otherwise.
			 * @param {string} namePath the path within the preset panel of 
			 * the preset to be applied.
			 */
			public applyPreset(namePath: string): boolean;
			/**
			 * Deletes a folder in the location provided by the folderPath. 
			 * If the folderPath is not supplied or is empty, any folders 
			 * currently selected in the Presets panel will be deleted.
			 * @param {string} folderPath This is the folder name inclusive 
			 * of its path within the Preset Panel.
			 */
			public deleteFolder(folderPath: string): boolean;
			/**
			 * Deletes a preset. If no preset is selected in the Preset 
			 * Panel and no namePath is provided, then this method will 
			 * fail. If no namePath is provided, all currently selected 
			 * items in the Preset panel will be deleted. It is not 
			 * possible to delete a folder via deleteItem. 
			 * Returns a Boolean: true if successful, false otherwise.
			 * @param {string} namePath This is the item inclusive of its 
			 * path within the Preset Panel. If argument is not supplied or 
			 * is empty, all currently selected items in the Preset panel 
			 * will be deleted.
			 */
			public deleteItem(namePath: string): boolean;
			/**
			 * Expand or close a folder in the panel.
			 * @param {boolean} bExpand if true, open the folder; if false, 
			 * close the folder. (Default is true.)
			 * @param {boolean} bRecurseNestedParents if true, all folders 
			 * within specified folder will be expanded/closed based on the 
			 * bExpand parameter. (Default is false.)
			 * @param {string} namePath This is the folder name inclusive 
			 * of its path within the Preset Panel. If there is not a 
			 * folder in this location with the supplied name, this method 
			 * will return False, and the Panel will remain unchanged. If 
			 * folderPath is not supplied or is empty, any folders 
			 * currently selected in the Panel will be expanded or closed 
			 * based on the bExpand parameter and bRecurse parameters.
			 */
			public expandFolder(bExpand: boolean, bRecurseNestedParents: boolean, namePath: string): boolean;
			/**
			 * Exports a preset to file.
			 * @param {string} URI This is the URI path to the XML file 
			 * which describes the preset. 
			 * @param {string} namePath This is the item inclusive of its 
			 * path within the Preset Panel. If argument is not supplied, 
			 * the current selection is used. If nothing is selected, or 
			 * multiple items in the panel are selected, or a folder is 
			 * selected, this method will fail.
			 */
			public exportItem(URI: string, namePath: string): boolean;
			/**
			 * Returns the index of a preset. If no preset is selected in 
			 * the Preset Panel and no namePath is provided, then this 
			 * method return -1. If no namePath is provided, and the 
			 * selection length is greater than 1, then this method will 
			 * return -1. Returns an Int.
			 * @param {string} namePath This is the item inclusive of its 
			 * path within the Preset Panel. If argument is not supplied, 
			 * the target becomes based upon current selection.
			 */
			public findItemIndex(namePath: string): number;
			/**
			 * Gets the currently selected item(s). Returns an array of 
			 * items that are selected in the presets panel.
			 */
			public getSelectedItems(): any[];
			/**
			 * Imports a new preset into the Tween Preset Panel.
			 * @param {string} URI This is the URI path to the XML file 
			 * which will be imported. The URI is inclusive of the xml file 
			 * name. 
			 * @param {string} namePath This is the item inclusive of its 
			 * path within the Preset Panel. If argument is not supplied, a 
			 * default name is provided [Preset n] and the preset is added 
			 * to the top level of Custom Presets in the panel.
			 */
			public importItem(URI: string, namePath: string): boolean;
			/**
			 * Moves the specified item to the specified folder. If source 
			 * argument (namePath) is not supplied or is empty, the 
			 * selected items are moved. If no preset is selected in the 
			 * Preset Panel and no namePath is provided, then this method 
			 * will fail. If no namePath is provided, and the selection 
			 * length is greater than 1, then this method will relocate all 
			 * selected items.
			 * @param {string} folderPath Moves the specified item to the 
			 * specified folder. If source argument (namePath) is not 
			 * supplied or is empty, the selected items are moved. If no 
			 * preset is selected in the Preset Panel and no namePath is 
			 * provided, then this method will fail. If no namePath is 
			 * provided, and the selection length is greater than 1, then 
			 * this method will relocate all selected items.
			 * @param {string} namePath This is the item inclusive of its 
			 * path within the Preset Panel. If argument is not supplied, 
			 * the target becomes based upon current selection.
			 */
			public moveToFolder(folderPath: string, namePath: string): boolean;
			/**
			 * Creates a folder in the location provided by the folderPath.
			 * @param {string} folderPath This is the folder name inclusive 
			 * of its path within the Preset Panel. If arg is not provided, 
			 * a default name will be supplied [untitled folder n] and the 
			 * folder will be added at the root of the Custom Presets.
			 */
			public newFolder(folderPath: string): boolean;
			/**
			 * Renames the currently selected item in the Presets panel. If 
			 * multi-selection, return value is false to match UI behavior. 
			 * The item to be renamed must be inside Custom Presets. 
			 * Default Presets, and the Custom Presets folder itself, 
			 * cannot be renamed.
			 * @param {string} name This is the new item name exclusive of 
			 * its path within the Preset Panel.
			 */
			public renameItem(name: string): boolean;
			/**
			 * Selects or de-selects an item in the preset Panel. Will 
			 * extend or replace the selection as indicated by the 
			 * bReplaceCurrentSelection parameter: default value for 
			 * bReplaceCurrentSelection is true.
			 * @param {string} namePath This is the item inclusive of its 
			 * path within the Preset Panel. If argument is not supplied, 
			 * and bSelect is false, the items currently selected in the 
			 * panel will be de-selected.
			 * @param {boolean} bReplaceCurrentSelection true specifies to 
			 * replace the current selection, false means to extend the 
			 * current selection. Default value for this parameter is true 
			 * (replace the current selection)
			 * @param {boolean} bSelect Allows to switch between selecting 
			 * or deselecting an item. It is optional and the default value 
			 * is true (select).
			 */
			public selectItem(namePath: string, bReplaceCurrentSelection: boolean, bSelect: boolean): boolean;
		}
	}
}