/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

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
			/** When type is script, the ScriptUI Window object to display. */
			public readonly content: any;
			/** A non-localized unique identifier for the palette. */
			public id: string;
			public showMenuItem: boolean;
			/** The localized string to display as the palette title. */
			public title: string;
			/**
			 * The type of content displayed in the palette; script 
			 * (ScriptUI) or web (HTML).
			 */
			public readonly type: string;
			/** When type is web, the path to the page to display. */
			public url: string;
			/**
			 * When true, this palette is visible, when false it is hidden.
			 */
			public visible: boolean;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Removes this palette from the list of available palettes and 
			 * destroys it.
			 */
			public remove(): void;
			/**
			 * Moves this palette to a specific docking location in the 
			 * browser.
			 */
			public setLocation(): void;
		}
	}
}