/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

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
			 */
			public readonly defaultFilterCriteria: any[];
			/**
			 * A collection of the default SortCriterion objects used to 
			 * sort the contents of container nodes.
			 */
			public readonly defaultSortCriteria: any[];
			/** The policy for the display of modal dialogs. */
			public displayDialogs: string;
			/**
			 * The active (top-most)   Document   object, representing the 
			 * active browser window.
			 */
			public document: Adobe.Bridge.Document;
			/**
			 * A collection of   Document   objects representing the set of 
			 * all open browser windows.
			 */
			public readonly documents: any[];
			/**
			 * A collection of ExtensionHandler objects representing 
			 * registered node-handling extensions.
			 */
			public readonly extensions: any[];
			/**
			 * The top-level Favoritesobject for the navigation hierarchy 
			 * displayed in the Favorites palette.
			 */
			public readonly favorites: Adobe.Bridge.Favorites;
			/**
			 * The list of Bridge URI strings for the root nodes of the 
			 * Folders palette.
			 */
			public readonly folderRoots: any[];
			/**
			 * The collection of script-defined InspectorPanel objects that 
			 * make up the Inspector view for new browser windows.
			 */
			public readonly inspectorPanels: any[];
			/**
			 * The display name of the language for the current locale, as 
			 * configured by the operating system.
			 */
			public readonly language: string;
			/**
			 * The application specifier for the application that has most 
			 * recently sent an interapplication message to Adobe Bridge.
			 */
			public lastSender: string;
			/**
			 * The Adobe locale code for the current locale, as configured 
			 * by the operating system.
			 */
			public readonly locale: string;
			/** The application specifier for this application, "bridge". */
			public readonly name: string;
			/**
			 * The number of background tasks that Adobe Bridge has left to 
			 * process.
			 */
			public readonly pendingJobs: number;
			/**
			 * The Preferences object, which provides access to the user 
			 * preferences shown in the Preferences dialog.
			 */
			public readonly preferences: Adobe.Bridge.Preferences;
			public readonly standardFavorites: any[];
			/**
			 * When true, Adobe Bridge attempts to ensure that all 
			 * Thumbnail properties are valid before returning their 
			 * values.
			 */
			public synchronousMode: boolean;
			public readonly userFavorites: any[];
			/** The version number of the Adobe Bridge application. */
			public readonly version: string;
			/**
			 * The duration in seconds between checks for folder 
			 * consistency (checking whether files have been added or 
			 * removed).
			 */
			public watchDirInterval: number;
			/**
			 * The list of all available workspaces, both default and user- 
			 * or script-defined.
			 */
			public readonly workspaces: any[];
			/**
			 * For each specified file or folder, if it refers to a 
			 * resource that does not have a local copy (such as the files 
			 * referenced by VersionCue nodes), downloads the resource.
			 * @param {any[]} thumbnails 
			 */
			public acquirePhysicalFiles(thumbnails: any[]): void;
			/**
			 * Adds a member thumbnail, or set of member thumbnails, to a 
			 * collection.
			 * @param {Thumbnail} member 
			 */
			public addCollectionMember(member: Thumbnail): void;
			/**
			 * Appends a line of text to the Credits section of the Adobe 
			 * Bridge About box.
			 * @param {string} title 
			 * @param {string} content 
			 */
			public addCredits(title: string, content: string): void;
			/**
			 * Appends a custom URI to the list of root nodes in 
			 * app.folderRoots, which appear in the Folders palette.
			 * @param {string} uri 
			 */
			public addCustomRoot(uri: string): boolean;
			/**
			 * Appends a line of text to the Legal Notice section of the 
			 * Adobe Bridge About box.
			 * @param {string} title 
			 * @param {string} content 
			 */
			public addLegalNotice(title: string, content: string): void;
			/** Calls on the operating system to emit a short audio tone. */
			public beep(): void;
			/**
			 * Gives Adobe Bridge the application focus for the operating 
			 * system, and makes the current browser window the topmost 
			 * active window in the windowing system.
			 */
			public bringToFront(): void;
			/**
			 * Deprecated in Creative Suite 3. Do not use.
			 * @param {string} path 
			 */
			public browseTo(path: string): void;
			/**
			 * Forces Adobe Bridge to create thumbnail images for the 
			 * specified folder.
			 * @param {string} path 
			 * @param {boolean} recurse 
			 * @param {boolean} buildFullsize 
			 */
			public buildFolderCache(path: string, recurse: boolean, buildFullsize: boolean): boolean;
			/**
			 * Cancels a task that has been scheduled using 
			 * app.scheduleTask().
			 * @param {number} id 
			 */
			public cancelTask(id: number): void;
			/**
			 * Creates a new, named collection node.
			 * @param {string} name 
			 */
			public createCollection(name: string): Adobe.Bridge.Thumbnail;
			/**
			 * Deletes a collection node.
			 * @param {Thumbnail} collection 
			 */
			public deleteCollection(collection: Thumbnail): boolean;
			/**
			 * Enqueues a long-running node-handling operation for 
			 * execution at an appropriate time.
			 */
			public enqueueOperation(): void;
			/**
			 * @param {File} file 
			 */
			public exportKeywordsToFile(file: File): void;
			/**
			 * @param {any[]} thumbnails 
			 * @param {Thumbnail} collection 
			 */
			public getCollectionMembers(thumbnails: any[], collection: Thumbnail): void;
			/**
			 * Retrieves all collection nodes, as created with 
			 * app.createCollection().
			 * @param {any[]} thumbnails 
			 */
			public getCollections(thumbnails: any[]): void;
			/** Hides or minimizes all Adobe Bridge browser windows. */
			public hide(): void;
			/**
			 * Imports keywords from a file to the Keywords palette.
			 * @param {File} file 
			 * @param {string} importType 
			 */
			public importKeywordsFromFile(file: File, importType: string): void;
			/**
			 * Reports whether a given thumbnail is a member of a given 
			 * collection.
			 * @param {Thumbnail} collection 
			 * @param {Thumbnail} member 
			 */
			public isCollectionMember(collection: Thumbnail, member: Thumbnail): boolean;
			/**
			 * Reports whether Adobe Bridge is processing any jobs. Returns 
			 * false if all the jobs are finished.
			 */
			public isProcessingJob(): boolean;
			/**
			 * @param {any} params 
			 */
			public launchHelp(params: any): boolean;
			/**
			 * @param {Thumbnail} scope 
			 * @param {any} specification 
			 */
			public makeSearch(scope: Thumbnail, specification: any): Adobe.Bridge.Thumbnail;
			/**
			 * Opens a page in the platform's default web browser.
			 * @param {string} url 
			 */
			public openUrl(url: string): void;
			/**
			 * Notifies Adobe Bridge of an update to the processing status 
			 * or progress of a long-running background operation 
			 * implemented by a ProgressOperator object.
			 * @param {Operator} operator
			 */
			public operationChanged(operator: Operator): void;
			/**
			 * DEPRECATED in Creative Suite 3. Use 
			 * app.acquirePhysicalFiles() instead.
			 * @param {any[]} files 
			 */
			public preflightFiles(files: any[]): boolean;
			/** Purges the thumbnail caches for all folders. */
			public purgeAllCaches(): void;
			/**
			 * Purges the thumbnail cache for a folder.
			 * @param {string} path 
			 */
			public purgeFolderCache(path: string): void;
			/**
			 * Shuts down the Adobe Bridge application and closes all 
			 * browser windows.
			 */
			public quit(): void;
			/**
			 * DEPRECATED in Creative Suite 3. Do not use.
			 * @param {string} protocol 
			 * @param {any} handler 
			 */
			public registerBrowseScheme(protocol: string, handler: any): boolean;
			/**
			 * Adds a script-defined node-handling extension to the 
			 * application's list of available handlers, app.extensions.
			 * @param {ExtensionHandler} extension 
			 */
			public registerExtension(extension: ExtensionHandler): boolean;
			/**
			 * Declares a new node-data information set, associating it 
			 * with a node-handling extension.
			 * @param {ExtensionHandler} extension 
			 * @param {Infoset} infoset 
			 */
			public registerInfoset(extension: ExtensionHandler, infoset: Infoset): boolean;
			/**
			 * Registers a script-defined Inspector panel, adding it to 
			 * app.inspectorPanels.
			 * @param {InspectorPanel} pivotpanel 
			 */
			public registerInspectorPanel(pivotpanel: InspectorPanel): boolean;
			/**
			 * Associates a URI prefix string with a node-handling 
			 * extension.
			 * @param {string} prefix 
			 * @param {ExtensionHandler} extension 
			 */
			public registerPrefix(prefix: string, extension: ExtensionHandler): boolean;
			/**
			 * Removes one or more member thumbnails from a collection.
			 * @param {Thumbnail} member 
			 */
			public removeCollectionMember(member: Thumbnail): void;
			/**
			 * Removes a text item from the Credits area of the Adobe 
			 * Bridge About box.
			 * @param {string} title 
			 */
			public removeCredits(title: string): void;
			/**
			 * Removes a text item from the LegalNotice area of the Adobe 
			 * Bridge About box.
			 * @param {string} title 
			 */
			public removeLegalNotice(title: string): void;
			/**
			 * @param {Thumbnail} thumbnail
			 * @param {string} name 
			 */
			public renameCollection(thumbnail: Thumbnail, name: string): boolean;
			/**
			 * Loads a set of files or thumbnails as a slideshow, using the 
			 * Preference options currently set for Adobe Bridge.
			 * @param {any[]} sources 
			 */
			public runSlideshow(sources: any[]): void;
			/**
			 * Executes a script after a specified delay.
			 * @param {string} code 
			 * @param {number} delay 
			 * @param {boolean} repeat 
			 */
			public scheduleTask(code: string, delay: number, repeat: boolean): number;
			/**
			 * Issues the argument to the operating system, as if it were 
			 * entered on the command line in a shell.
			 * @param {string} command 
			 */
			public system(command: string): void;
			/**
			 * Removes a node-handling extension, previously registered 
			 * with app.registerExtension(), from the application’s global 
			 * list.
			 * @param {ExtensionHandler} extension 
			 */
			public unregisterExtension(extension: ExtensionHandler): void;
			/**
			 * Removes the association between an extension and an 
			 * information set, previously established with 
			 * app.registerInfoset().
			 * @param {ExtensionHandler} extension 
			 * @param {Infoset} infoset 
			 */
			public unregisterInfoset(extension: ExtensionHandler, infoset: Infoset): void;
			/**
			 * Removes a script-defined Inspector panel from the global 
			 * list in app.inspectorPanels().
			 * @param {InspectorPanel} pivotpanel 
			 */
			public unregisterInspectorPanel(pivotpanel: InspectorPanel): boolean;
			/**
			 * Removes a node URI prefix from the list of prefixes that the 
			 * associated node-handling extension manages.
			 * @param {string} prefix 
			 */
			public unregisterPrefix(prefix: string): boolean;
		}
	}
}