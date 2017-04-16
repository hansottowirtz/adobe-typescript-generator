/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The ScreenOutline object represents the screens in a slide 
		 * or form document.  The object is accessed by using the 
		 * screenOutline property on the document.  The screenOutline 
		 * property only exists if the document is a slide or form 
		 * document, so before accessing the property, a call to 
		 * dom.allowScreens() should be made to verify a screens 
		 * document exists.
		 */
		class ScreenOutline extends Adobe.Csawlib.CSHostObject {
			/**
			 * A screen object currently selected in Outline Display pane 
			 * and has focus on stage.
			 */
			public currentScreen_: any;
			/**
			 * A screen object which represents the parent of all screens. 
			 * The first screen in the screen outline.
			 */
			public readonly rootScreen: any;
			/** The array of top level Screens contained in the document. */
			public readonly screens: any[];
			/**
			 * Insert all of the screens or a named screen and it's 
			 * children from the URI document.
			 * @param {string} fileURI a filename in URI format: 
			 * "file:///C:/assets.fla"
			 * @param {string} screenName if screenName present, copy that 
			 * screen and it's children. If not present, copy whole 
			 * document.
			 */
			public copyScreenFromFile(fileURI: string, screenName: string): void;
			/**
			 * deletes the given screen. If no screen is specified, deletes 
			 * the screen currently selected.
			 * @param {string} screenName The name of screen to be deleted. 
			 * If empty, the currently selected screen will be removed.
			 */
			public deleteScreen(screenName: string): void;
			/**
			 * Duplicate the given screen, giving it a default name. The 
			 * selected screens will be duplicated if screenName is not 
			 * specified.
			 * @param {string} screenName The string value such as 
			 * 'myScreen' the screen name. After it is duplicated, 
			 * duplicated screen name will be default name as 'Screen n'.
			 */
			public duplicateScreen(screenName: string): boolean;
			/**
			 * Returns an array of screen object which are currently 
			 * selected in Outline Display pane.
			 */
			public getSelectedScreens(): any[];
			/**
			 * Inserts a nested screen of a specific type into a particular 
			 * location.
			 * @param {string} name - String indicating the name of the new 
			 * screen to be inserted. An empty name will insert a screen 
			 * with the default screen name. 'Slide 1' or 'Form 1'
			 * @param {string} referenceScreen String indicating the name 
			 * of the screen into which the new screen will be inserted as 
			 * a child. If empty, the new screen is inserted as a child of 
			 * the currently selected screen.
			 * @param {string} screenTypeName The name of the screen type 
			 * to attach to the new nested screen. The screen type and 
			 * classname will be set for this screen. If empty, the type 
			 * will be inherited from the parent.
			 */
			public insertNestedScreen(name: string, referenceScreen: string, screenTypeName: string): any;
			/**
			 * Inserts a new blank Screen, of a specified type into the 
			 * document at a given location.
			 * @param {string} name String indicating the name of the new 
			 * screen to be inserted. An empty name will insert a screen 
			 * with the default screen name, 'Screen n' (where n is the 
			 * first available unique number)
			 * @param {string} referenceScreen String indicating the name 
			 * of the screen to insert the new screen after. If empty, the 
			 * new screen is inserted after the currently selected screen. 
			 * If referenceScreen is a nested screen, the new screen will 
			 * be a peer of the nested screen, and thus a nested screen 
			 * itself.
			 * @param {string} screenTypeName The name of the screen type 
			 * to attach to the new screen. The screen type and classname 
			 * will be set for this screen
			 */
			public insertScreen(name: string, referenceScreen: string, screenTypeName: string): any;
			/**
			 * Moves the given screen in relation to the referenceScreen, 
			 * either before, after, as the first child, or as the last 
			 * child.
			 * @param {string} screenToMove The screen name to move.
			 * @param {string} referenceScreen The reference screen for the 
			 * move
			 * @param {string} position Where to move the screen. 
			 * Acceptable values are 
			 * 'before','after','firstChild','lastChild'.
			 */
			public moveScreen(screenToMove: string, referenceScreen: string, position: string): boolean;
			/**
			 * Changes the screen with given name to the new given name. If 
			 * renaming is successful, returns true otherwise returns 
			 * false.
			 * @param {string} newScreenName The new name of the screen
			 * @param {string} oldScreenName The name of the screen to 
			 * change. Empty will change the name of the currently selected 
			 * screen.
			 * @param {boolean} bDisplayError If this flag is set, an error 
			 * will be displayed. this argument is false by default.
			 */
			public renameScreen(newScreenName: string, oldScreenName: string, bDisplayError: boolean): boolean;
			/**
			 * Sets which screen to be selected in Outline pane. This 
			 * screen will be focused on stage.
			 * @param {string} name The name of the screen.
			 */
			public setCurrentScreen(name: string): void;
			/**
			 * Set the given property with the given value for the selected 
			 * screens.
			 * @param {string} property The property to set
			 * @param {any} value The new value for the property. The type 
			 * of value depends on the acceptable values for property.
			 */
			public setScreenProperty(property: string, value: any): void;
			/**
			 * Sets the screen(s) to be selected in Outline pane. If 
			 * multiple screens were specified, the screen where last index 
			 * of selections array will be focused on stage.
			 * @param {any} selection An array of screen names to be 
			 * selected in Outline pane.
			 * @param {boolean} bReplaceCurrentSelection 
			 * bReplaceCurrentSelection for erasing current selection. This 
			 * argument value is true by default.
			 */
			public setSelectedScreens(selection: any, bReplaceCurrentSelection: boolean): void;
			/**
			 * Sets the screen(s) to be selected in Outline pane.
			 * @param {string} screenName Screen name to be selected in 
			 * Outline pane.
			 * @param {boolean} bReplaceCurrentSelection 
			 * bReplaceCurrentSelection for erasing current selection. This 
			 * argument value is true by default.
			 */
			public setSelectedScreens2(screenName: string, bReplaceCurrentSelection: boolean): void;
		}
	}
}