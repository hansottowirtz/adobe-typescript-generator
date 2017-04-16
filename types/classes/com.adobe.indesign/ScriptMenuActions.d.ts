/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScriptMenuActions extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new action.
			 * @param {string} titleParam The name of the ScriptMenuAction 
			 * for display in the user interface. The title includes any 
			 * ampersand characters (&), which are used to tell the Windows 
			 * OS to underline the following character in the name for use 
			 * with the Alt key to navigate to a menu item. Double 
			 * ampersands are used to display an actual ampersand character 
			 * in the name. The Mac OS ignores and removes the extra 
			 * ampersand characters. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ScriptMenuAction (Optional)
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public add(titleParam: string, withPropertiesParam: any): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns any ScriptMenuAction in the collection.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public anyItem(): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Displays the number of elements in the ScriptMenuAction.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ScriptMenuAction in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ScriptMenuAction in the collection.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public firstItem(): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public item(indexParam: any): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuActions within the specified range.
			 * @param {any} fromParam The ScriptMenuAction, index, or name 
			 * at the beginning of the range. Can accept: ScriptMenuAction, 
			 * Long Integer or String.
			 * @param {any} toParam The ScriptMenuAction, index, or name at 
			 * the end of the range. Can accept: ScriptMenuAction, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ScriptMenuAction in the collection.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public lastItem(): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns the middle ScriptMenuAction in the collection.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public middleItem(): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction whose index follows the 
			 * specified ScriptMenuAction in the collection.
			 * @param {ScriptMenuAction} objParam The ScriptMenuAction 
			 * whose index comes before the desired ScriptMenuAction. 
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public nextItem(objParam: ScriptMenuAction): Adobe.Indesign.ScriptMenuAction;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the ScriptMenuAction with the index previous to the 
			 * specified index.
			 * @param {ScriptMenuAction} objParam The index of the 
			 * ScriptMenuAction that follows the desired ScriptMenuAction.
			 * @returns {Adobe.Indesign.ScriptMenuAction}
			 */
			public previousItem(objParam: ScriptMenuAction): Adobe.Indesign.ScriptMenuAction;
		}
	}
}