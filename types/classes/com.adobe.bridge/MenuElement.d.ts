/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Adobe Bridge creates MenuElement instances for each of the 
		 * existing menu elements, and you can create additional 
		 * instances to extend the existing menus. A script can execute 
		 * a menu command using app.document.chooseMenuItem().Existing 
		 * menu elements that can be extended have predefined 
		 * identifiers, listed in the Adobe Bridge JavaScript 
		 * Reference. Not all existing menu elements can be extended. 
		 * You can only add a new menu or command before or after an 
		 * existing menu or command, which you must specify using the 
		 * predefined unique identifier. Use the create() static 
		 * function to create new menu items, rather than the new 
		 * operator. This function behaves correctly if a menu item 
		 * with the same name already exists.
		 */
		class MenuElement extends Adobe.Csawlib.CSHostObject {
			/**
			 * When true, the Alt modifier key was pressed when the item 
			 * was selected.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly altDown: boolean;
			/**
			 * Whether the menu item can be checked.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly canBeChecked: boolean;
			/**
			 * Whether the item is checked.
			 * @type {boolean}
			 */
			public checked: boolean;
			/**
			 * When true, the Command modifier key was pressed when the 
			 * item was selected.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly cmdDown: boolean;
			/**
			 * When true, the Control modifier key was pressed when the 
			 * item was selected.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly ctrlDown: boolean;
			/**
			 * Whether the menu or item is enabled.
			 * @type {boolean}
			 */
			public enabled: boolean;
			/**
			 * A unique identifier for the element.
			 * @type {string}
			 * @readonly
			 */
			public readonly id: string;
			/**
			 * A string describing the location of the new menu element, 
			 * with respect to existing menu elements.
			 * @type {string}
			 * @readonly
			 */
			public readonly location: string;
			/**
			 * When true, the Option modifier key was pressed when the item 
			 * was selected.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly optionDown: boolean;
			/**
			 * Whether there is a separator after this item.
			 * @type {boolean}
			 */
			public separatorAfter: boolean;
			/**
			 * Whether there is a separator before this item.
			 * @type {boolean}
			 */
			public separatorBefore: boolean;
			/**
			 * When true, the Shift modifier key was pressed when the item 
			 * was selected.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly shiftDown: boolean;
			/**
			 * The displayed label text, a localizable string.
			 * @type {string}
			 */
			public text: string;
			/**
			 * The type of menu element, a menu or command.
			 * @type {string}
			 * @readonly
			 */
			public readonly type: string;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Adds a new menu to the menu bar, a new submenu to an 
			 * existing menu, or a new command to an existing menu or 
			 * submenu.
			 * @param {string} _type 
			 * @param {string} text 
			 * @param {string} location 
			 * @param {string} id 
			 * @returns {Adobe.Bridge.MenuElement}
			 */
			public create(_type: string, text: string, location: string, id: string): Adobe.Bridge.MenuElement;
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Retrieves a menu element object using its unique identifier.
			 * @param {string} id 
			 * @returns {Adobe.Bridge.MenuElement}
			 */
			public find(id: string): Adobe.Bridge.MenuElement;
			/**
			 * Removes a script-defined menu or menu item.
			 * @param {string} id 
			 * @returns {void}
			 */
			public remove(id: string): void;
		}
	}
}