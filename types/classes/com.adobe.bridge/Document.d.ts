/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The user can create multiple browser windows by selecting 
		 * the New Window command in the File menu. For each browser 
		 * window, there is one Document instance. Access the object 
		 * for the active browser window using  app.document Access an 
		 * array of objects for all open browser windows in 
		 * app.documents
		 */
		class Document extends Adobe.Csawlib.CSHostObject {
			/**
			 * Identifies up to four lines of additional metadata to 
			 * display for thumbnails in the Content pane.
			 * @type {any[]}
			 */
			public additionalMetadata: any[];
			/**
			 * Whether to allow drag-and-drop of thumbnails in this browser 
			 * window.
			 * @type {boolean}
			 */
			public allowDrags: boolean;
			/**
			 * DEPRECATED. Use navbars.filesystem.bottom.
			 * @type {Adobe.Bridge.Navbar}
			 */
			public bottomNavbar: Adobe.Bridge.Navbar;
			/**
			 * The browser window mode, corresponding to the UI button on 
			 * the upper right, "Switch to compact mode".
			 * @type {string}
			 */
			public browserMode: string;
			/**
			 * DEPRECATED. Do not use.
			 * @type {string}
			 */
			public contentPaneMode: string;
			/**
			 * The Thumbnail object a user has right-clicked to invoke a 
			 * context menu; otherwise undefined.
			 * @type {Adobe.Bridge.Thumbnail}
			 * @readonly
			 */
			public readonly context: Adobe.Bridge.Thumbnail;
			/**
			 * Whether to display Inspector panels.
			 * @type {boolean}
			 */
			public displayInspectorView: boolean;
			/**
			 * Current selected thumbnails in the Content pane.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly groupedSelections: any[];
			/**
			 * The height of the browser window in pixels.
			 * @type {number}
			 */
			public height: number;
			/**
			 * In Windows only, a platform-specific handle to the window 
			 * for this browser.
			 * @type {number}
			 * @readonly
			 */
			public readonly hwnd: number;
			/**
			 * A unique identifier for the browser window, valid for the 
			 * life of the window.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * DEPRECATED. Do not use.
			 * @type {any}
			 */
			public jsFuncs: any;
			/**
			 * When true, this browser window is in the zoomed or maximized 
			 * state.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly maximized: boolean;
			/**
			 * When true, this browser window is in the collapsed or 
			 * minimized state.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly minimized: boolean;
			/**
			 * Contains the predefined NavBar objects for the configurable 
			 * navigation bars.
			 * @type {any}
			 * @readonly
			 */
			public readonly navbars: any;
			/**
			 * Text to be displayed in the Content pane when the selected 
			 * thumbnail is for an empty folder.
			 * @type {string}
			 */
			public noItems: string;
			/**
			 * The Adobe Bridge-enabled application that created or first 
			 * activated this browser window, if it was not Adobe Bridge.
			 * @type {string}
			 */
			public owner: string;
			/**
			 * A collection of TabbedPalette objects for all default and 
			 * script-defined display palettes available to this browser, 
			 * regardless of their visibility status.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly palettes: any[];
			/**
			 * The position of this browser window on the screen.
			 * @type {any}
			 */
			public position: any;
			/**
			 * The presentation mode of the Content pane.
			 * @type {string}
			 * @readonly
			 */
			public readonly presentationMode: string;
			/**
			 * The path to the content displayed in the Content pane.
			 * @type {string}
			 */
			public presentationPath: string;
			/**
			 * @type {boolean}
			 * @readonly
			 */
			public readonly previewLooping: boolean;
			/**
			 * The number of currently selected thumbnails in the Content 
			 * pane.
			 * @type {number}
			 * @readonly
			 */
			public readonly selectionLength: number;
			/**
			 * The Thumbnail objects for all currently selected files in 
			 * the Content pane of this document.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly selections: any[];
			/**
			 * The number of currently selected thumbnails in the Content 
			 * pane.
			 * @type {number}
			 * @readonly
			 */
			public readonly selectionsLength: number;
			/**
			 * When true, thumbnail names are displayed in the Content 
			 * pane.
			 * @type {boolean}
			 */
			public showThumbnailName: boolean;
			/**
			 * How the thumbnails in the Content pane are sorted.
			 * @type {any[]}
			 */
			public sorts: any[];
			/**
			 * A list of all current thumbnail stacks in this browser.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly stacks: any[];
			/**
			 * The text displayed in the document's status line at the 
			 * bottom of the Content pane.
			 * @type {string}
			 */
			public status: string;
			/**
			 * The Thumbnail object for the node currently selected in the 
			 * Folders or Favorites pane.
			 * @type {Adobe.Bridge.Thumbnail}
			 */
			public thumbnail: Adobe.Bridge.Thumbnail;
			/**
			 * The view mode of the Content pane, as selected by the View 
			 * menu.
			 * @type {string}
			 */
			public thumbnailViewMode: string;
			/**
			 * DEPRECATED. Use navbars.filesystem.top.
			 * @type {Adobe.Bridge.Navbar}
			 */
			public topNavbar: Adobe.Bridge.Navbar;
			/**
			 * When true, the browser window is expanded, as opposed to 
			 * being minimized or collapsed.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * An array of Thumbnail objects that are currently shown in 
			 * the Content pane.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly visibleThumbnails: any[];
			/**
			 * The number of thumbnails in the visibleThumbnails array.
			 * @type {number}
			 * @readonly
			 */
			public readonly visibleThumbnailsLength: number;
			/**
			 * DEPRECATED. Do not use.
			 * @type {Function}
			 */
			public visitUrl: Function;
			/**
			 * The width of the browser window in pixels.
			 * @type {number}
			 */
			public width: number;
			/**
			 * Retrieves the most recently set workspace.
			 * @type {any}
			 * @readonly
			 */
			public readonly workspace: any;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Makes this browser window the topmost active window in the 
			 * windowing system.
			 * @returns {void}
			 */
			public bringToFront(): void;
			/**
			 * Centers this browser window on the screen.
			 * @returns {void}
			 */
			public center(): void;
			/**
			 * Executes an Adobe Bridge-defined or script-defined menu 
			 * command programatically.
			 * @returns {void}
			 */
			public chooseMenuItem(): void;
			/**
			 * Closes this browser window.
			 * @returns {void}
			 */
			public close(): void;
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Deselects a node in the Content pane.
			 * @param {Thumbnail} thumb 
			 * @returns {void}
			 */
			public deselect(thumb: Thumbnail): void;
			/**
			 * Deselects all selected nodes in the Content pane.
			 * @returns {void}
			 */
			public deselectAll(): void;
			/**
			 * DEPRECATED. Do not use.
			 * @returns {void}
			 */
			public execJS(): void;
			/**
			 * Stores stack properties into the cache file.
			 * @returns {void}
			 */
			public flushStackProperties(): void;
			/**
			 * Collects selected thumbnails for files of a given type, if 
			 * any are selected.
			 * @returns {string}
			 */
			public getSelection(): string;
			/**
			 * Maximizes or zooms this browser window.
			 * @returns {void}
			 */
			public maximize(): void;
			/**
			 * Minimizes or docks this browser window.
			 * @returns {void}
			 */
			public minimize(): void;
			/**
			 * Centers this browser window on the screen, and sets the 
			 * height and width to 80% of the screen height and width.
			 * @returns {void}
			 */
			public normalize(): void;
			/**
			 * DEPRECATED. Do not use.
			 * @returns {boolean}
			 */
			public print(): boolean;
			/**
			 * Refreshes the display of this browser window.
			 * @returns {void}
			 */
			public refresh(): void;
			/**
			 * Restores the default configuration of the tabbed palettes in 
			 * this browser window.
			 * @returns {void}
			 */
			public resetToDefaultWorkspace(): void;
			/**
			 * Restores this browser window after it has been minimized.
			 * @returns {void}
			 */
			public restore(): void;
			/**
			 * Causes the Content pane (not the Folders or Favorites pane) 
			 * to show the specified thumbnail.
			 * @returns {void}
			 */
			public reveal(): void;
			/**
			 * Selects a thumbnail in the Content pane.
			 * @param {Thumbnail} thumb 
			 * @returns {void}
			 */
			public select(thumb: Thumbnail): void;
			/**
			 * Selects all children of the currenly selected thumbnail in 
			 * the Content pane.
			 * @returns {void}
			 */
			public selectAll(): void;
			/**
			 * Sets the presentation mode of the Content pane, and 
			 * optionally the path to the current content to display.
			 * @param {string} mode 
			 * @param {string} path 
			 * @returns {void}
			 */
			public setPresentationMode(mode: string, path: string): void;
			/**
			 * Sets the browser configuration to a predefined, user-defined 
			 * or script-defined workspace.
			 * @returns {boolean}
			 */
			public setWorkspace(): boolean;
		}
	}
}