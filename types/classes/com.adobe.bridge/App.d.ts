/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * A single global instance is created on startup; access it 
		 * using the app global variable. There is only one App object. 
		 * Multiple browser windows are represented by instances of  
		 * Document, and can be accessed with the app.document or 
		 * app.documents properties.
		 */
		class App extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of the default FilterDescription objects used 
			 * to populate the Filter palette.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly defaultFilterCriteria: any[];
			/**
			 * A collection of the default SortCriterion objects used to 
			 * sort the contents of container nodes.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly defaultSortCriteria: any[];
			/**
			 * The policy for the display of modal dialogs.
			 * @type {string}
			 */
			public displayDialogs: string;
			/**
			 * The active (top-most)   Document   object, representing the 
			 * active browser window.
			 * @type {Adobe.Bridge.Document}
			 */
			public document: Adobe.Bridge.Document;
			/**
			 * A collection of   Document   objects representing the set of 
			 * all open browser windows.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly documents: any[];
			/**
			 * A collection of ExtensionHandler objects representing 
			 * registered node-handling extensions.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly extensions: any[];
			/**
			 * The top-level Favoritesobject for the navigation hierarchy 
			 * displayed in the Favorites palette.
			 * @type {Adobe.Bridge.Favorites}
			 * @readonly
			 */
			public readonly favorites: Adobe.Bridge.Favorites;
			/**
			 * The list of Bridge URI strings for the root nodes of the 
			 * Folders palette.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly folderRoots: any[];
			/**
			 * The collection of script-defined InspectorPanel objects that 
			 * make up the Inspector view for new browser windows.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly inspectorPanels: any[];
			/**
			 * The display name of the language for the current locale, as 
			 * configured by the operating system.
			 * @type {string}
			 * @readonly
			 */
			public readonly language: string;
			/**
			 * The application specifier for the application that has most 
			 * recently sent an interapplication message to Adobe Bridge.
			 * @type {string}
			 */
			public lastSender: string;
			/**
			 * The Adobe locale code for the current locale, as configured 
			 * by the operating system.
			 * @type {string}
			 * @readonly
			 */
			public readonly locale: string;
			/**
			 * The application specifier for this application, "bridge".
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The number of background tasks that Adobe Bridge has left to 
			 * process.
			 * @type {number}
			 * @readonly
			 */
			public readonly pendingJobs: number;
			/**
			 * The Preferences object, which provides access to the user 
			 * preferences shown in the Preferences dialog.
			 * @type {Adobe.Bridge.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Bridge.Preferences;
			/**
			 * @type {any[]}
			 * @readonly
			 */
			public readonly standardFavorites: any[];
			/**
			 * When true, Adobe Bridge attempts to ensure that all 
			 * Thumbnail properties are valid before returning their 
			 * values.
			 * @type {boolean}
			 */
			public synchronousMode: boolean;
			/**
			 * @type {any[]}
			 * @readonly
			 */
			public readonly userFavorites: any[];
			/**
			 * The version number of the Adobe Bridge application.
			 * @type {string}
			 * @readonly
			 */
			public readonly version: string;
			/**
			 * The duration in seconds between checks for folder 
			 * consistency (checking whether files have been added or 
			 * removed).
			 * @type {number}
			 */
			public watchDirInterval: number;
			/**
			 * The list of all available workspaces, both default and user- 
			 * or script-defined.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly workspaces: any[];
			/**
			 * For each specified file or folder, if it refers to a 
			 * resource that does not have a local copy (such as the files 
			 * referenced by VersionCue nodes), downloads the resource.
			 * @param {any[]} thumbnails 
			 * @returns {void}
			 */
			public acquirePhysicalFiles(thumbnails: any[]): void;
			/**
			 * Adds a member thumbnail, or set of member thumbnails, to a 
			 * collection.
			 * @param {Thumbnail} member 
			 * @returns {void}
			 */
			public addCollectionMember(member: Thumbnail): void;
			/**
			 * Appends a line of text to the Credits section of the Adobe 
			 * Bridge About box.
			 * @param {string} title 
			 * @param {string} content 
			 * @returns {void}
			 */
			public addCredits(title: string, content: string): void;
			/**
			 * Appends a custom URI to the list of root nodes in 
			 * app.folderRoots, which appear in the Folders palette.
			 * @param {string} uri 
			 * @returns {boolean}
			 */
			public addCustomRoot(uri: string): boolean;
			/**
			 * Appends a line of text to the Legal Notice section of the 
			 * Adobe Bridge About box.
			 * @param {string} title 
			 * @param {string} content 
			 * @returns {void}
			 */
			public addLegalNotice(title: string, content: string): void;
			/**
			 * Calls on the operating system to emit a short audio tone.
			 * @returns {void}
			 */
			public beep(): void;
			/**
			 * Gives Adobe Bridge the application focus for the operating 
			 * system, and makes the current browser window the topmost 
			 * active window in the windowing system.
			 * @returns {void}
			 */
			public bringToFront(): void;
			/**
			 * Deprecated in Creative Suite 3. Do not use.
			 * @param {string} path 
			 * @returns {void}
			 */
			public browseTo(path: string): void;
			/**
			 * Forces Adobe Bridge to create thumbnail images for the 
			 * specified folder.
			 * @param {string} path 
			 * @param {boolean} recurse 
			 * @param {boolean} buildFullsize 
			 * @returns {boolean}
			 */
			public buildFolderCache(path: string, recurse: boolean, buildFullsize: boolean): boolean;
			/**
			 * Cancels a task that has been scheduled using 
			 * app.scheduleTask().
			 * @param {number} id 
			 * @returns {void}
			 */
			public cancelTask(id: number): void;
			/**
			 * Creates a new, named collection node.
			 * @param {string} name 
			 * @returns {Adobe.Bridge.Thumbnail}
			 */
			public createCollection(name: string): Adobe.Bridge.Thumbnail;
			/**
			 * Deletes a collection node.
			 * @param {Thumbnail} collection 
			 * @returns {boolean}
			 */
			public deleteCollection(collection: Thumbnail): boolean;
			/**
			 * Enqueues a long-running node-handling operation for 
			 * execution at an appropriate time.
			 * @returns {void}
			 */
			public enqueueOperation(): void;
			/**
			 * @param {File} file 
			 * @returns {void}
			 */
			public exportKeywordsToFile(file: File): void;
			/**
			 * @param {any[]} thumbnails 
			 * @param {Thumbnail} collection 
			 * @returns {void}
			 */
			public getCollectionMembers(thumbnails: any[], collection: Thumbnail): void;
			/**
			 * Retrieves all collection nodes, as created with 
			 * app.createCollection().
			 * @param {any[]} thumbnails 
			 * @returns {void}
			 */
			public getCollections(thumbnails: any[]): void;
			/**
			 * Hides or minimizes all Adobe Bridge browser windows.
			 * @returns {void}
			 */
			public hide(): void;
			/**
			 * Imports keywords from a file to the Keywords palette.
			 * @param {File} file 
			 * @param {string} importType 
			 * @returns {void}
			 */
			public importKeywordsFromFile(file: File, importType: string): void;
			/**
			 * Reports whether a given thumbnail is a member of a given 
			 * collection.
			 * @param {Thumbnail} collection 
			 * @param {Thumbnail} member 
			 * @returns {boolean}
			 */
			public isCollectionMember(collection: Thumbnail, member: Thumbnail): boolean;
			/**
			 * Reports whether Adobe Bridge is processing any jobs. Returns 
			 * false if all the jobs are finished.
			 * @returns {boolean}
			 */
			public isProcessingJob(): boolean;
			/**
			 * @param {any} params 
			 * @returns {boolean}
			 */
			public launchHelp(params: any): boolean;
			/**
			 * @param {Thumbnail} scope 
			 * @param {any} specification 
			 * @returns {Adobe.Bridge.Thumbnail}
			 */
			public makeSearch(scope: Thumbnail, specification: any): Adobe.Bridge.Thumbnail;
			/**
			 * Opens a page in the platform's default web browser.
			 * @param {string} url 
			 * @returns {void}
			 */
			public openUrl(url: string): void;
			/**
			 * Notifies Adobe Bridge of an update to the processing status 
			 * or progress of a long-running background operation 
			 * implemented by a ProgressOperator object.
			 * @param {Operator} operator
			 * @returns {void}
			 */
			public operationChanged(operator: Operator): void;
			/**
			 * DEPRECATED in Creative Suite 3. Use 
			 * app.acquirePhysicalFiles() instead.
			 * @param {any[]} files 
			 * @returns {boolean}
			 */
			public preflightFiles(files: any[]): boolean;
			/**
			 * Purges the thumbnail caches for all folders.
			 * @returns {void}
			 */
			public purgeAllCaches(): void;
			/**
			 * Purges the thumbnail cache for a folder.
			 * @param {string} path 
			 * @returns {void}
			 */
			public purgeFolderCache(path: string): void;
			/**
			 * Shuts down the Adobe Bridge application and closes all 
			 * browser windows.
			 * @returns {void}
			 */
			public quit(): void;
			/**
			 * DEPRECATED in Creative Suite 3. Do not use.
			 * @param {string} protocol 
			 * @param {any} handler 
			 * @returns {boolean}
			 */
			public registerBrowseScheme(protocol: string, handler: any): boolean;
			/**
			 * Adds a script-defined node-handling extension to the 
			 * application's list of available handlers, app.extensions.
			 * @param {ExtensionHandler} extension 
			 * @returns {boolean}
			 */
			public registerExtension(extension: ExtensionHandler): boolean;
			/**
			 * Declares a new node-data information set, associating it 
			 * with a node-handling extension.
			 * @param {ExtensionHandler} extension 
			 * @param {Infoset} infoset 
			 * @returns {boolean}
			 */
			public registerInfoset(extension: ExtensionHandler, infoset: Infoset): boolean;
			/**
			 * Registers a script-defined Inspector panel, adding it to 
			 * app.inspectorPanels.
			 * @param {InspectorPanel} pivotpanel 
			 * @returns {boolean}
			 */
			public registerInspectorPanel(pivotpanel: InspectorPanel): boolean;
			/**
			 * Associates a URI prefix string with a node-handling 
			 * extension.
			 * @param {string} prefix 
			 * @param {ExtensionHandler} extension 
			 * @returns {boolean}
			 */
			public registerPrefix(prefix: string, extension: ExtensionHandler): boolean;
			/**
			 * Removes one or more member thumbnails from a collection.
			 * @param {Thumbnail} member 
			 * @returns {void}
			 */
			public removeCollectionMember(member: Thumbnail): void;
			/**
			 * Removes a text item from the Credits area of the Adobe 
			 * Bridge About box.
			 * @param {string} title 
			 * @returns {void}
			 */
			public removeCredits(title: string): void;
			/**
			 * Removes a text item from the LegalNotice area of the Adobe 
			 * Bridge About box.
			 * @param {string} title 
			 * @returns {void}
			 */
			public removeLegalNotice(title: string): void;
			/**
			 * @param {Thumbnail} thumbnail
			 * @param {string} name 
			 * @returns {boolean}
			 */
			public renameCollection(thumbnail: Thumbnail, name: string): boolean;
			/**
			 * Loads a set of files or thumbnails as a slideshow, using the 
			 * Preference options currently set for Adobe Bridge.
			 * @param {any[]} sources 
			 * @returns {void}
			 */
			public runSlideshow(sources: any[]): void;
			/**
			 * Executes a script after a specified delay.
			 * @param {string} code 
			 * @param {number} delay 
			 * @param {boolean} repeat 
			 * @returns {number}
			 */
			public scheduleTask(code: string, delay: number, repeat: boolean): number;
			/**
			 * Issues the argument to the operating system, as if it were 
			 * entered on the command line in a shell.
			 * @param {string} command 
			 * @returns {void}
			 */
			public system(command: string): void;
			/**
			 * Removes a node-handling extension, previously registered 
			 * with app.registerExtension(), from the application’s global 
			 * list.
			 * @param {ExtensionHandler} extension 
			 * @returns {void}
			 */
			public unregisterExtension(extension: ExtensionHandler): void;
			/**
			 * Removes the association between an extension and an 
			 * information set, previously established with 
			 * app.registerInfoset().
			 * @param {ExtensionHandler} extension 
			 * @param {Infoset} infoset 
			 * @returns {void}
			 */
			public unregisterInfoset(extension: ExtensionHandler, infoset: Infoset): void;
			/**
			 * Removes a script-defined Inspector panel from the global 
			 * list in app.inspectorPanels().
			 * @param {InspectorPanel} pivotpanel 
			 * @returns {boolean}
			 */
			public unregisterInspectorPanel(pivotpanel: InspectorPanel): boolean;
			/**
			 * Removes a node URI prefix from the list of prefixes that the 
			 * associated node-handling extension manages.
			 * @param {string} prefix 
			 * @returns {boolean}
			 */
			public unregisterPrefix(prefix: string): boolean;
		}
	}
}