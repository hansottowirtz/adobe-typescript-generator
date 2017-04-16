/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Library object represents the Library panel and is a 
		 * property of the document.It is a property of the document 
		 * object which can be accessed by: The library contains an 
		 * array of items of different types: symbol, bitmap, sound, 
		 * video. At this time we are not implementing any font symbol 
		 * functionality in the APIs.
		 */
		class Library extends Adobe.Csawlib.CSHostObject {
			/**
			 * An array of item objects in the Library
			 * @type {any[]}
			 */
			public items: any[];
			/**
			 * Adds the item to the document at the specified position.
			 * RETURNS: true if successful, false otherwise
			 * @param {any} position The x,y position on stage. Uses the 
			 * registration point of a symbol, or the upper left corner of 
			 * a video or bitmap.
			 * @param {string} namePath if name is not specified, the 
			 * current library selection is used. Name can be a path.
			 * @returns {boolean}
			 */
			public addItemToDocument(position: any, namePath: string): boolean;
			/**
			 * Creates a new item of type in the library and sets it to the 
			 * currently selected item.
			 * RETURNS: True if it created it, false if it did not.
			 * @param {string} _type Acceptable values for type are 
			 * "video", "movie clip", "button", "graphic", "bitmap", 
			 * "folder" and "font". Specifying "folder" is the same as 
			 * using library.newFolder. 
			 * @param {string} namePath Name of item, can specify path.
			 * @returns {boolean}
			 */
			public addNewItem(_type: string, namePath: string): boolean;
			/**
			 * Deletes the specified item from the Library if the name 
			 * argument is specified, otherwise it works on current 
			 * selection (even if it is multiple).
			 * @param {string} namePath The argument is the name of the 
			 * symbol to be deleted from the Library. Name can be a path. 
			 * If no name is specified it deletes the currently selected 
			 * item. To delete all the items in the library, select all 
			 * items before using deleteItem().
			 * @returns {boolean}
			 */
			public deleteItem(namePath: string): boolean;
			/**
			 * Makes a copy of the currently selected item, or item 
			 * speicifed by the name argument, giving the new item the 
			 * default name and setting it as the currently selected item. 
			 * Returns true if the item was duplicated successfully and 
			 * false if not. If more than one is selected it will return 
			 * false.
			 * @param {any} namePath name of object to duplicate, if 
			 * omitted it duplicated current selection.
			 * @returns {boolean}
			 */
			public duplicateItem(namePath: any): boolean;
			/**
			 * true if the item exists and is editable.
			 * @param {string} namePath The library path for the item to 
			 * edit. If this is omitted, the single selected Library item 
			 * is set as the edited item. If there is more or less than one 
			 * item selected in the library, the first scene in the FLA is 
			 * displayed for editing. 
			 * @returns {boolean}
			 */
			public editItem(namePath: string): boolean;
			/**
			 * Expands/Collapses the specified folder. If no folder name is 
			 * specified, expand/collapse selected one.
			 * 
			 * RETURN: true if the item is successfully expanded/collapsed 
			 * (mainly the function will be successful if the item it is 
			 * applied on is a folder).
			 * @param {boolean} bExpand bExpand, if TRUE, the folder will 
			 * be expanded. If FALSE the folder is collapsed.
			 * @param {boolean} bRecurseNestedParents If true all the 
			 * folders within the specified folder will be opened or closed 
			 * based on the expand parameter.
			 * @param {string} namePath name, is the name of folder to 
			 * expand/collapse (if this argument is not specified then the 
			 * function will apply the current selection).
			 * @returns {boolean}
			 */
			public expandFolder(bExpand: boolean, bRecurseNestedParents: boolean, namePath: string): boolean;
			/**
			 * Returns an array containing all the found library items 
			 * index. The library index is flat, so folders are considered 
			 * part of the main index. Names can be specified in terms of 
			 * folder nesting. See the example in the structure section.
			 * @param {string} namePath The library path for the item to 
			 * find. 
			 * @returns {any[]}
			 */
			public findItemIndex(namePath: string): any[];
			/**
			 * Gets the property for the selected item.
			 * 
			 * RETURNS: value of the property
			 * @param {string} property for a list of properties, see the 
			 * library item object and it's subclasses.
			 * @returns {any}
			 */
			public getItemProperty(property: string): any;
			/**
			 * Returns the type of object specified by path.
			 * 
			 * "undefined", "component", "movie clip", "graphic", 
			 * "button", "video", "folder", "font", "sound", "bitmap"
			 * @param {string} namePath string specifies the library path 
			 * for the item. If no path is specified it will work on the 
			 * current selection. It will be ignored if more than one is 
			 * selected.
			 * @returns {string}
			 */
			public getItemType(namePath: string): string;
			/**
			 * Returns the array of all the selected items in the Library.
			 * @returns {any[]}
			 */
			public getSelectedItems(): any[];
			/**
			 * Imports a SWF into the library as a SWF. This is different 
			 * than File > Import > SWF. This is a fully contained SWF 
			 * movie inside of Flash. There is no corresponding UI 
			 * functionality. Must be usedinconjunctin with an external 
			 * library or DLL.
			 * @param {string} linkageName the name of the swf linkage of 
			 * the root movie clip.
			 * @param {any} swfData the array of binary swf data.
			 * @param {string} libName the library name for the created 
			 * item.  If the name is already used an alternate name is 
			 * created.
			 * @returns {void}
			 */
			public importEmbeddedSWF(linkageName: string, swfData: any, libName: string): void;
			/**
			 * Returns true if the specified item exists in the Library. 
			 * False otherwise.
			 * @param {string} namePath Name or path of item
			 * @returns {boolean}
			 */
			public itemExists(namePath: string): boolean;
			/**
			 * Moves the specified item to the specified folder. If 
			 * itemToMove is empty, the selected items are moved. If 
			 * folderPath is empty, the items are moved to the top level. 
			 * Return true if the item is successfully moved.
			 * @param {string} folderPath folderPath, is a string path to 
			 * the folder in the form "FolderName" or 
			 * "FolderName/FolderName". To move an item to the top level, 
			 * specify "" (empty string) for the folderPath.
			 * @param {string} itemToMove itemToMove is the name of the 
			 * item to move. If not set, the selected items will be moved.
			 * @param {boolean} replace If true, will replace the item with 
			 * conflicting name with the item dropped in the folder. If 
			 * false, the name of the item dropped will be changed by a 
			 * unique name. This argument is optional and false by default.
			 * @returns {boolean}
			 */
			public moveToFolder(folderPath: string, itemToMove: string, replace: boolean): boolean;
			/**
			 * Creates a new folder in the current folder with the default 
			 * name (untitled folder #). True if folder created 
			 * successfully, false if not.
			 * @param {string} namePath The name of the folder to be 
			 * created. If specified as a path, and the path doesn't exist, 
			 * the path will be created.
			 * @returns {boolean}
			 */
			public newFolder(namePath: string): boolean;
			/**
			 * Renames the currently selected library item in the library 
			 * panel. If multi-selection, return value is false to match UI 
			 * behavior.
			 * 
			 * RETURN: The return Value is true if the name of the item 
			 * could be changed.
			 * @param {string} namePath The new name of the library item.
			 * @returns {boolean}
			 */
			public renameItem(namePath: string): boolean;
			/**
			 * selectAll(select) //selectAll(true) to select all items in 
			 * the library or unselected selectAll(false). default value 
			 * for select is true.
			 * @param {boolean} selectAll true (default) to select all the 
			 * items in the library. false to deselect.
			 * @returns {void}
			 */
			public selectAll(selectAll: boolean): void;
			/**
			 * Sets the library item specified by path to be selected. Will 
			 * extend or replace the selection as indicated by the 
			 * bReplaceCurrentSelection parameter: default value for 
			 * 'bReplaceCurrentSelection' is true. 
			 * 
			 * RETURN: returns true if the specified item exists.
			 * @param {string} namePath the item to select
			 * @param {boolean} bReplaceCurrentSelection true specifies to 
			 * replace the current selection, false means to extend the 
			 * current selection. Default value for this parameter is true 
			 * (replace the current selection)
			 * @param {boolean} bSelect Allows to switch between selecting 
			 * or deselecting an item. It is optional and the default value 
			 * is true (select).
			 * @returns {boolean}
			 */
			public selectItem(namePath: string, bReplaceCurrentSelection: boolean, bSelect: boolean): boolean;
			/**
			 * Used to de-select all the Library items. Added to match the 
			 * document.selectNone() method.
			 * @returns {void}
			 */
			public selectNone(): void;
			/**
			 * Sets the property for the currently selection items.
			 * @param {string} property for a list of properties, see the 
			 * library item object and it's subclasses.
			 * @param {any} value 
			 * @returns {void}
			 */
			public setItemProperty(property: string, value: any): void;
			/**
			 * Updates the given item.
			 * 
			 * RETURN: true if could update at least one item, false 
			 * otherwise.
			 * @param {string} namePath The name of item to update. If no 
			 * name is passed then it defaults to the current selection.
			 * @returns {boolean}
			 */
			public updateItem(namePath: string): boolean;
		}
	}
}