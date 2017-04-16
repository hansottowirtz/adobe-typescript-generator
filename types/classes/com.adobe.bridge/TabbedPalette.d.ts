/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Allows a script to define and add a tabbed palette to a 
		 * browser window. A script-defined palette is displayed in 
		 * addition to the default palettes such as Favorites, Folders, 
		 * Preview, Filter, Keywords, and Metadata. A script-defined 
		 * palette can display a user interface defined in ScriptUI, or 
		 * it can display HTML.You can add a palette to an existing 
		 * browser window at any time (as long as the identifier is 
		 * unique), and you can use the create document event to add 
		 * your palette to new browser windows on creation.The name of 
		 * a script-defined palette is automatically added to all 
		 * relevant menus. You can specify where the tab goes, or move 
		 * it programmatically. When it is shown, it can be dragged and 
		 * dropped like the default palettes; scripts cannot query the 
		 * current position..You can show and hide individual palettes 
		 * using this object's properties. A list of all defined 
		 * palettes for a browser, including default palettes, is 
		 * available in app.document.palettes.
		 */
		class TabbedPalette extends Adobe.Csawlib.CSHostObject {
			/**
			 * When type is script, the ScriptUI Window object to display.
			 * @type {any}
			 * @readonly
			 */
			public readonly content: any;
			/**
			 * A non-localized unique identifier for the palette.
			 * @type {string}
			 */
			public id: string;
			/**
			 * @type {boolean}
			 */
			public showMenuItem: boolean;
			/**
			 * The localized string to display as the palette title.
			 * @type {string}
			 */
			public title: string;
			/**
			 * The type of content displayed in the palette; script 
			 * (ScriptUI) or web (HTML).
			 * @type {string}
			 * @readonly
			 */
			public readonly type: string;
			/**
			 * When type is web, the path to the page to display.
			 * @type {string}
			 */
			public url: string;
			/**
			 * When true, this palette is visible, when false it is hidden.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Removes this palette from the list of available palettes and 
			 * destroys it.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Moves this palette to a specific docking location in the 
			 * browser.
			 * @returns {void}
			 */
			public setLocation(): void;
		}
	}
}