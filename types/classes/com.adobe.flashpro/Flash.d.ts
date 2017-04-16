/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Flash Object represents the application. Can be 
		 * represented as fl or flash.
		 */
		class Flash extends Adobe.Csawlib.CSHostObject {
			/**
			 * Reference to Actions panel object
			 * @type {Adobe.Flashpro.ActionsPanel}
			 * @readonly
			 */
			public readonly actionsPanel: Adobe.Flashpro.ActionsPanel;
			/**
			 * The effect descriptor for the current effect being applied.  
			 * This is used during the executeEffect() method invocation.
			 * @type {any}
			 * @readonly
			 */
			public readonly activeEffect: any;
			/**
			 * returns a URI to the application's parent directory
			 * @type {string}
			 * @readonly
			 */
			public readonly applicationURI: string;
			/**
			 * Corresponds to the classpath for AS3 set by the Preferences 
			 * dialog.  String is a semi-colon (;) delimited list of paths.
			 * @type {string}
			 */
			public as3PackagePaths: string;
			/**
			 * a CompilerErrors object, which provides access to the 
			 * compiler errors panel
			 * @type {Adobe.Flashpro.CompilerErrors}
			 * @readonly
			 */
			public readonly compilerErrors: Adobe.Flashpro.CompilerErrors;
			/**
			 * The ComponentsPanel object is a property of the flash object 
			 * which represents the component panel
			 * @type {Adobe.Flashpro.ComponentPanel}
			 * @readonly
			 */
			public readonly componentsPanel: Adobe.Flashpro.ComponentPanel;
			/**
			 * Returns the the full path name for the local users 
			 * configuration directory as a platform specific file path.
			 * @type {string}
			 * @readonly
			 */
			public readonly configDirectory: string;
			/**
			 * gives a URI to the user config directory
			 * @type {string}
			 * @readonly
			 */
			public readonly configURI: string;
			/**
			 * When set to true, the Contact Sensitive Selection mode is 
			 * enabled.
			 * @type {boolean}
			 */
			public contactSensitiveSelection: boolean;
			/**
			 * Return an array of strings for the various types of 
			 * documents that can be created (similar to the File-New 
			 * command).
			 * @type {any[]}
			 * @readonly
			 */
			public readonly createNewDocList: any[];
			/**
			 * Return an array of strings for the various types of 
			 * documents that can be created (similar to the File-New 
			 * command).   The entries in the array correspond directly to 
			 * those (by index) with the entries in fl.createNewDocList.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly createNewDocListType: any[];
			/**
			 * Return an array of strings for the various types of 
			 * templates that can be created (similar to the File-New from 
			 * template command). This returns the top level categories not 
			 * the individual tempalte names themselves.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly createNewTemplateList: any[];
			/**
			 * An array of document objects.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly documents: any[];
			/**
			 * The drawingLayer is used for tools when they want to do some 
			 * temporary drawing while dragging. For example, a selection 
			 * style marquee.
			 * @type {Adobe.Flashpro.DrawingLayer}
			 */
			public drawingLayer: Adobe.Flashpro.DrawingLayer;
			/**
			 * An array of effect descriptors based on XML parameter file.  
			 * These are not effects but a description of effects.  The 
			 * array length corresponds to the number of effects (based on 
			 * the XML parameter definition files, not the number of JSFL 
			 * implementation files) registered at launch time.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly effects: any[];
			/**
			 * Comma delimited list of items in the global AS3 external 
			 * library path.
			 * @type {string}
			 */
			public externalLibraryPath: string;
			/**
			 * true, if current fill has image
			 * @type {boolean}
			 * @readonly
			 */
			public readonly fillHasBitmap_: boolean;
			/**
			 * Path to the Flex SDK
			 * @type {string}
			 */
			public flexSDKPath: string;
			/**
			 * Returns an array of generic objects corresponding to the 
			 * list of installed Flash Players in the document PI. Each 
			 * object in the array contains the following properties: name, 
			 * version, minASVersion, maxASVersion, stageWidth, 
			 * stageHeight. The version property can be used to set the 
			 * current player for a document, using the 
			 * Document.setPlayerVersion() function. An integer between the 
			 * minASVersion and the maxASVersion (inclusive) can be used to 
			 * set the ActionScript version of the document, using the 
			 * Document.asVersion property.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly installedPlayers: any[];
			/**
			 * Returns true (1) if the user preferences are currently set 
			 * to "Show Start Page", otherwise it returns false (0).
			 * @type {number}
			 * @readonly
			 */
			public readonly inStartPageMode: number;
			/**
			 * Returns true (1) if application is currently connected to 
			 * the internet via Ethernet, dialup modem, wireless.  If not 
			 * connected, returns false (0).
			 * @type {number}
			 * @readonly
			 */
			public readonly isConnectedToInternet: number;
			/**
			 * Boolean value set to true when current fill color is 
			 * gradient
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isFillGradient: boolean;
			/**
			 * Returns integer value 1 (if help is available), 0 otherwise.
			 * @type {number}
			 * @readonly
			 */
			public readonly isNewHelpContentAvailable: number;
			/**
			 * Boolean value set to true when current fill color is 
			 * gradient
			 * @type {any}
			 * @readonly
			 */
			public readonly isStrokeGradient: any;
			/**
			 * A string containing version information for the Mozilla 
			 * SpiderMonkey JavaScript engine that Flash Pro uses in its 
			 * extensibility layer. The version number in this string 
			 * determines which features are available in the JS engine. 
			 * For example, E4X and "for each in loops" were added in 
			 * version 1.6. The current JS engine version (1.6) was added 
			 * in Flash Pro CS3. For a full list of features: 
			 * https://developer.mozilla.org/en/New_in_JavaScript_1.6
			 * @type {string}
			 * @readonly
			 */
			public readonly jsEngineVersion: string;
			/**
			 * Returns the 5 character code for the locale that the UI is 
			 * running in.
			 * @type {string}
			 * @readonly
			 */
			public readonly languageCode: string;
			/**
			 * Comma delimited list of items in the global AS3 library 
			 * path.
			 * @type {string}
			 */
			public libraryPath: string;
			/**
			 * The mathObject provides methods for matrix and point 
			 * operations.  See spec for details.
			 * @type {Adobe.Flashpro.mathObject}
			 * @readonly
			 */
			public readonly Math: Adobe.Flashpro.mathObject;
			/**
			 * Returns an array of the complete filenames in the MRU (Most 
			 * Recently Used) list that the authoring tool manages.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly mruRecentFileList: any[];
			/**
			 * This is an array of the file types in the MRU (Most Recently 
			 * Used) list that the authoring tool manages.  This array 
			 * corresponds to the array for fl.mruRecentFileList
			 * @type {any[]}
			 * @readonly
			 */
			public readonly mruRecentFileListType: any[];
			/**
			 * Returns the interger value of the object drawing mode. 0 = 
			 * shape, 1 = drawing object, 2 = Primitive
			 * @type {boolean}
			 */
			public objectDrawingMode: boolean;
			/**
			 * Reference to Output Panel object
			 * @type {Adobe.Flashpro.OutputPanel}
			 * @readonly
			 */
			public readonly outputPanel: Adobe.Flashpro.OutputPanel;
			/**
			 * Corresponds to the classpath for AS2 set by the Preferences 
			 * dialog.  String is a semi-colon (;) delimited list of paths.
			 * @type {string}
			 */
			public packagePaths: string;
			/**
			 * Reference to presetPanel object
			 * @type {Adobe.Flashpro.PresetPanel}
			 * @readonly
			 */
			public readonly presetPanel: Adobe.Flashpro.PresetPanel;
			/**
			 * set maximum size of the portion of the publish cache written 
			 * to disk in megabytes, corresponds to Disk cache size limit 
			 * value in Publish Cache section of Preferences dialog. 
			 * defaults to 250 megabytes.
			 * @type {number}
			 */
			public publishCacheDiskSizeMax: number;
			/**
			 * enable/disable publish cache, corresponds to Enable Publish 
			 * Cache checkbox in Publish Cache section of Preferences 
			 * dialog.
			 * @type {boolean}
			 */
			public publishCacheEnabled: boolean;
			/**
			 * set threshold size used to determine whether cache entries 
			 * should be kept in memory or written to disk in kilobytes. 
			 * Cache entries smaller than this will be kept in memory and 
			 * larger will be written to disk, corresponds to Maximum size 
			 * for memory cache entry value in Publish Cache section of 
			 * Preferences dialog. defaults to 10 kilobytes.
			 * @type {number}
			 */
			public publishCacheMemoryEntrySizeLimit: number;
			/**
			 * set maximum size of the portion of the publish cache kept in 
			 * memory in megabytes, corresponds to Memory cache size limit 
			 * value in Publish Cache section of Preferences dialog. 
			 * defaults to 10 megabytes.
			 * @type {number}
			 */
			public publishCacheMemorySizeMax: number;
			/**
			 * enable the generate xml size report when a file is 
			 * published.
			 * @type {boolean}
			 */
			public publishSizeReportXMLEnabled: boolean;
			/**
			 * An array containing all the screen Types in the system.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly screenTypes: any[];
			/**
			 * This property yields the path to the executing file. It does 
			 * not transverse nested scripts called through runScript. In 
			 * such a case it will return the parent script's path. The 
			 * property is read only.
			 * @type {string}
			 * @readonly
			 */
			public readonly scriptURI: string;
			/**
			 * Comma delimited list of items in the global AS3 source path.
			 * @type {string}
			 */
			public sourcePath: string;
			/**
			 * Return an instance of SpriteSheetExporter object
			 * @type {Adobe.Flashpro.SpriteSheetExporter}
			 * @readonly
			 */
			public readonly spriteSheetExporter: Adobe.Flashpro.SpriteSheetExporter;
			/**
			 * true if stroke has a fill with bitmap
			 * @type {boolean}
			 * @readonly
			 */
			public readonly strokeHasBitmap_: boolean;
			/**
			 * An array of initialized SWF panels. The panel has to be 
			 * opened once to appear in the array.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly swfPanels: any[];
			/**
			 * This object contains an array of tools Obj objects. This 
			 * object maintains the options of the tools. It will be 
			 * implemented as part of the Extensible tools. If tools 
			 * settings are implemented as part part of future features, 
			 * any app wide tool settings should be a property of the Tools 
			 * object, any options that are doucment specific should be a 
			 * property of the Document object.
			 * @type {Adobe.Flashpro.Tools}
			 * @readonly
			 */
			public readonly tools: Adobe.Flashpro.Tools;
			/**
			 * Returns the long string version of the Flash authoring tool, 
			 * including platform.
			 * @type {string}
			 * @readonly
			 */
			public readonly version: string;
			/**
			 * XMLUI top-level object.  Permits get/set of XMLUI properties 
			 * during a XMLUI dialog, and makes it possible to 
			 * accept/cancel the dialog programatically.
			 * @type {Adobe.Flashpro.XMLUI}
			 * @readonly
			 */
			public readonly xmlui: Adobe.Flashpro.XMLUI;
			/**
			 * Registers a JS function to be called when a specific event 
			 * is received.
			 * @param {string} eventType The event type to associate with 
			 * the callback function. Currently, this can be one of the 
			 * following: "documentNew", "documentOpened", 
			 * "documentClosed", "mouseMove", "documentChanged", 
			 * "layerChanged", "frameChanged", "selectionChanged", 
			 * "timelineChanged", "documentSaved"
			 * @param {any} callbackFunction The function to execute when 
			 * the specified event occurs.
			 * @returns {number}
			 */
			public addEventListener(eventType: string, callbackFunction: any): number;
			/**
			 * The ActionScript 3.0 Debugger opens a socket on the 
			 * specified port and waits a device connected via USB to 
			 * connect. When the player connects to the debugger, the debug 
			 * session begins.
			 * @param {number} port The port number on which to connect.
			 * @returns {boolean}
			 */
			public beginPortDebugSession(port: number): boolean;
			/**
			 * Either the ActionScript 3.0 Debugger or the ActionScript 2.0 
			 * Debugger opens and waits for a debug Flash Player to 
			 * connect. The user then has 2 minutes to start the debug 
			 * Flash Player. When the player connects to the debugger, the 
			 * debug session begins.
			 * @param {boolean} debugAS3 If 'debugAS3' is true, the 
			 * ActionScript 3.0 Debugger opens and waits. If false, the 
			 * ActionScript 2.0 Debugger opens waits instead.
			 * @returns {boolean}
			 */
			public beginRemoteDebugSession(debugAS3: boolean): boolean;
			/**
			 * Bring Flash App to front if other application is in front of 
			 * it
			 * @returns {boolean}
			 */
			public bringToFront(): boolean;
			/**
			 * Brings up a File Open or File Save system dialog box and 
			 * permits the user to specify a file to be opened or saved.  
			 * Returns the URL of the file.
			 * @param {string} browseType Specifies the type of file browse 
			 * operation.  Valid values are "open", "select" or "save".  
			 * @param {string} title Specifies the title for the File Open 
			 * or File Save dialog box.  If this argument is omitted, a 
			 * default value is used.
			 * @param {any} previewArea This parameter is ignored by Flash 
			 * and Fireworks and is present only for compatibility with 
			 * Dreamweaver.
			 * @param {string} macFormat Specifies which file formats to 
			 * enable on the Macintosh operating system's browse for file 
			 * dialog. If this argument is omitted, all supported file 
			 * types are enabled.
			 * @param {string} winFormat Specifies which file formats to 
			 * enable on the Windows operating system's browse for file 
			 * dialog. If this argument is omitted, all supported file 
			 * types are enabled.
			 * @returns {string}
			 */
			public browseForFileURL(browseType: string, title: string, previewArea: any, macFormat: string, winFormat: string): string;
			/**
			 * Brings up a Browse for folder dialog box and permits the 
			 * user to select a folder. Returns the URL of the folder.
			 * @param {string} description Specifies the description of the 
			 * Browse For Folder dialog.  If this argument is omitted, 
			 * nothing is shown in the description area.
			 * @returns {string}
			 */
			public browseForFolderURL(description: string): string;
			/**
			 * internal API related to code snippets HUD feature
			 * @param {boolean} discardEdits if true, discard edits on 
			 * cancel
			 * @returns {void}
			 */
			public cancelCodeSnippetHUD(discardEdits: boolean): void;
			/**
			 * clears the publish cache, similar behavior as if user 
			 * selects the Clear Publish Cache menu item, but that menu 
			 * item also deletes ASO files (files specific to AS2 
			 * incrementaly compilation).
			 * @returns {void}
			 */
			public clearPublishCache(): void;
			/**
			 * Copies a string value to the clipboard.
			 * @param {string} text A string to be copied to the clipboard.
			 * @returns {string}
			 */
			public clipCopyString(text: string): string;
			/**
			 * Closes all open documents, displaying the Save As dialog box 
			 * for any documents that were not previously been saved 
			 * (prompting the user if neccessary but don't quit the App).
			 * @param {boolean} promptToSave Bool. true prompts the user to 
			 * save via a dialog, false saves with no dialog.
			 * @returns {void}
			 */
			public closeAll(promptToSave: boolean): void;
			/**
			 * Close all the movie windows that are currently open. Returns 
			 * true if a player window was open, false if none were found.
			 * @returns {boolean}
			 */
			public closeAllPlayerDocuments(): boolean;
			/**
			 * Closes the specified document.
			 * @param {Document} documentObject documentObject is the 
			 * object at the root of a document's DOM tree (the value that 
			 * fl.getDocumentDOM() returns). If documentObject refers to 
			 * the active document, the Document window might not close 
			 * until the script that calls this function finishes 
			 * executing.
			 * @param {boolean} bPromptToSaveChanges If false, the user is 
			 * not prompted if there are unsaved changes in the document.  
			 * If true, the user is prompted with the standard yes/no 
			 * dialog box if there are unsaved changes.  Default value is 
			 * true.
			 * @returns {void}
			 */
			public closeDocument(documentObject: Document, bPromptToSaveChanges: boolean): void;
			/**
			 * internal API related to code snippets HUD feature
			 * @param {string} codeSnippetsText
			 * @param {string} instanceName
			 * @returns {void}
			 */
			public codeSnippetHUDSelChanged(codeSnippetsText: string, instanceName: string): void;
			/**
			 * silently copies a library item from a document without 
			 * exposing the document in the flash UI. Use the 
			 * Document.clipPaste() call to paste the item into the new 
			 * document.
			 * @param {string} filURI file URI to FLA or XFL document on 
			 * disk
			 * @param {string} libraryItemPath path to library item that 
			 * you want to copy
			 * @returns {boolean}
			 */
			public copyLibraryItem(filURI: string, libraryItemPath: string): boolean;
			/**
			 * Opens a new document and selects it. Values for size, 
			 * resolution, and color are the same as the
			 * current defaults. 
			 * RETURNS: The Document object for the newly created document 
			 * upon success, or undefined upon error.
			 * @param {string} docType Optional docType argument - 
			 * "timeline", "presentation", "application". Default is 
			 * "timeline"
			 * @returns {Adobe.Flashpro.Document}
			 */
			public createDocument(docType: string): Adobe.Flashpro.Document;
			/**
			 * Creates an MD5 hash (checksum) from the contents of the 
			 * input string.
			 * @param {string} inString the string to be checksummed
			 * @returns {string}
			 */
			public createMD5Hash(inString: string): string;
			/**
			 * Creates a new document based on the argument index.
			 * @param {number} file_type This is a zero based index which 
			 * corresponds to the list obtained by fl.createNewDocList.
			 * @returns {void}
			 */
			public createNewDialog(file_type: number): void;
			/**
			 * Creates a new document based on the template argument index.
			 * @param {number} templateIndex Used by the Start Page and 
			 * Creates a new document based on the template index. This is 
			 * a zero based index which corresponds to the list obtained by 
			 * fl.createNewTemplateList.
			 * @returns {void}
			 */
			public createNewTemplateDialog(templateIndex: number): void;
			/**
			 * creates a FLA file from a folder hierarchy in the local file 
			 * system
			 * @param {string} targetFileURI URI to FLA file you are saving
			 * @param {string} sourceDirectory URI to folder you are 
			 * packaging
			 * @returns {boolean}
			 */
			public createUCFPackage(targetFileURI: string, sourceDirectory: string): boolean;
			/**
			 * Download latest version of the non-opened document given its 
			 * local replica path as input. While opening a document 
			 * through java script, download from any version cue server is 
			 * done automatically only if its local replica copy does not 
			 * exist. So if user wants to open the latest copy of a 
			 * document through java script or wants to open a document 
			 * that exists only on a version cue server then he should call 
			 * downloadLatestVersion before opening it through openDocument 
			 * call. Return true if download if successful otherwise 
			 * returns false.
			 * 
			 *  During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened. For authentication failure from a server 
			 * whose credentials are not cached, currently we log the 
			 * authentication failure error to the output panel. In such a 
			 * case users can just visit the version cue workspace using 
			 * open dialog and passed the necessary credentials. Version 
			 * cue has key chain mechanism for authentication, so the 
			 * credentials are stored and then subsequent java script 
			 * execution would be successful.
			 * Also log any kind of version cue error to the trace panel.
			 * @param {string} fileURI fileURI specifies the name of the 
			 * file to be opened, which is expressed as a URL 
			 * (file://URL).The URL should be full path of the file on the 
			 * local file system like "file:///C|/Documents and 
			 * Settings/user/My Documents/Version 
			 * Cue/Flash_project/documents/Flash.fla"
			 * @returns {boolean}
			 */
			public downloadLatestVersion(fileURI: string): boolean;
			/**
			 * This method allows the effect script developer to enable 
			 * immediate visual updates of the timeline when executing 
			 * effects.  This is normally supressed, so that the end user 
			 * will not see intermediate steps that can be visually 
			 * distracting and can make the effect appear to take longer 
			 * than is necessary.  This method is purely for debugging 
			 * purposes and should not be used in effects that are deployed 
			 * in the field. Once the effect completes the internal state 
			 * is reset to again suppress immediate updates.
			 * @returns {void}
			 */
			public enableImmediateUpdates(): void;
			/**
			 * Shuts down either the ActionScript 3.0 Debugger or the 
			 * ActionScript 2.0 Debugger if waiting for a connection from 
			 * the Flash Debug Player.
			 * @returns {boolean}
			 */
			public endRemoteDebugSession(): boolean;
			/**
			 * Return a specific document publish profile without having to 
			 * open the file. The publish profile can also be specified but 
			 * is optional.
			 * @param {string} ucfURI File URI to export the publish 
			 * settings from.
			 * @param {string} profileName The profile name to export. This 
			 * parameter is optional.
			 * @returns {string}
			 */
			public exportPublishProfileString(ucfURI: string, profileName: string): string;
			/**
			 * This function extracts a specific file from a compressed FLA 
			 * file package.
			 * @param {string} ucfURI URI to a FLA file
			 * @param {string} internalSourceURI URI to the file inside the 
			 * FLA package (i.e. zip container)
			 * @param {string} targetURI URI to target file that will be 
			 * saved to local file system
			 * @returns {boolean}
			 */
			public extractFileFromUCFPackage(ucfURI: string, internalSourceURI: string, targetURI: string): boolean;
			/**
			 * Check if file already exists on disk.
			 * RETURNS: TRUE if file exists on disk, or FALSE otherwise.
			 * @param {string} fileURI a string containing the filepath to 
			 * the file
			 * @returns {boolean}
			 */
			public fileExists(fileURI: string): boolean;
			/**
			 * Takes integer argument for document ID. Returns Document 
			 * object if a document is associated with the ID. Returns 
			 * undefined if no document is associated with the ID.
			 * @param {number} docID Unique ID to identify an open Flash 
			 * document.
			 * @returns {Adobe.Flashpro.Document}
			 */
			public findDocumentDOM(docID: number): Adobe.Flashpro.Document;
			/**
			 * Returns an array of integers that contain the index of each 
			 * of the documents with the given name.
			 * @param {string} name The document name for the item to find.
			 * @returns {any[]}
			 */
			public findDocumentIndex(name: string): any[];
			/**
			 * Exposes elements with the denoted name in the denoted DOM. 
			 * Note that the object returned is a generic object, not a JS 
			 * object. This is because this method is really a face plate 
			 * for a utility script.
			 * @param {string} name String denoting the name of an object 
			 * in a DOM. Example: var name = 'myString'; 
			 * fl.findObjectInDocByName(name, doc);
			 * @param {Document} doc typically the current doc: var doc = 
			 * fl.getDocumentDOM();
			 * @returns {any}
			 */
			public findObjectInDocByName(name: string, doc: Document): any;
			/**
			 * method which hooks into utility script. exposes elements of 
			 * the denoted type in the denoted DOM. Note that the object 
			 * returned is a generic object, not a JS object. This is 
			 * because this method is really a face plate for a utility 
			 * script.
			 * @param {string} _type This argument denotes the Element type 
			 * for which to search. Acceptable strings are the list of 
			 * Element types defined by the elements.
			 * @param {Document} doc typically the current doc: var doc = 
			 * fl.getDocumentDOM();
			 * @returns {any}
			 */
			public findObjectInDocByType(_type: string, doc: Document): any;
			/**
			 * Find the named screen type. Return undefined if none found. 
			 * Returns the Type object if found.
			 * @param {string} name The name of the template to invoke.
			 * @param {string} version The version of the template to 
			 * invoke.
			 * @returns {any}
			 */
			public findScreenType(name: string, version: string): any;
			/**
			 * indows Only
			 * Access Flash.exe memory utilization data. Following 
			 * parameter will return the corresponding resource number in 
			 * bytes.
			 * @param {number} memType following number will correspond to 
			 * returning the resource data in bytes.
			 * @returns {number}
			 */
			public getAppMemoryInfo(memType: number): number;
			/**
			 * Returns the currently active document.
			 * @returns {Adobe.Flashpro.Document}
			 */
			public getDocumentDOM(): Adobe.Flashpro.Document;
			/**
			 * alizedString("$$$/PI/DrawingObject/Label/label=testLabel");
			 * $$$/PI/DrawingObject/Label/label is the string ID in 
			 * fl_dictionary.dat, if the string ID doesn't exist, the 
			 * default string in this case is 'testLabel' is returned
			 * @param {string} stringID
			 * @returns {string}
			 */
			public getLocalizedString(stringID: string): string;
			/**
			 * retrieves an integer preference value
			 * @param {string} keySection section name of preference 
			 * setting (usually this is "Settings")
			 * @param {string} keyName name of preference setting being 
			 * retrieved
			 * @returns {number}
			 */
			public getPrefInteger(keySection: string, keyName: string): number;
			/**
			 * retrieves a string preference value
			 * @param {string} keySection section name of preference 
			 * setting (usually this is "Settings")
			 * @param {string} keyName name of preference setting being 
			 * retrieved
			 * @returns {string}
			 */
			public getPrefString(keySection: string, keyName: string): string;
			/**
			 * Returns the SWFPanel object based on the panel's localized 
			 * name or its SWF filename (without the filename extension).
			 * @param {string} panelName Either the localized panel name or 
			 * the root filename of the panel's SWF file. Pass in false as 
			 * the second parameter if using the latter.
			 * @param {boolean} useLocalizedPanelName defaults to true. If 
			 * false, the panelName parameter is assumed to be the English 
			 * (unlocalized) name of the panel, which corresponds to the 
			 * SWF filename without the file extension.
			 * @returns {Adobe.Flashpro.SwfPanel}
			 */
			public getSwfPanel(panelName: string, useLocalizedPanelName: boolean): Adobe.Flashpro.SwfPanel;
			/**
			 * Given a FLA file URI, this function returns an array UCF 
			 * URIs. Each URI is a path to a file inside the UCF package. 
			 * Note that the CS5 FLA format is based on the UCF packaging 
			 * format (i.e. a zip package). Each URI can be passed to the 
			 * fl.extractFileFromUCFPackage() function to retrieve the file 
			 * from the FLA package.
			 * @param {string} ucfURI URI to FLA file
			 * @returns {any[]}
			 */
			public getUCFPackageListing(ucfURI: string): any[];
			/**
			 * internal API related to code snippets HUD feature
			 * @param {string} codeSnippetsText
			 * @param {string} instanceName
			 * @param {any} rectObject this is a generic rect object, which 
			 * has the following int properties: x, y, width, height
			 * @returns {void}
			 */
			public invokeCodeSnippetHUD(codeSnippetsText: string, instanceName: string, rectObject: any): void;
			/**
			 * Invoke the screen type with the same name and version and 
			 * return the Type object if success. If not return undefined.
			 * @param {string} name The name of the template to invoke.
			 * @param {string} version The version of the template to 
			 * invoke.
			 * @returns {any}
			 */
			public invokeScreenType(name: string, version: string): any;
			/**
			 * internal API related to code snippets HUD feature
			 * @param {number} frameNumber
			 * @param {number} beforeAddingSnippetLength
			 * @param {number} afterAddingSnippetLength
			 * @returns {void}
			 */
			public invokeSnippetInsertedHUD(frameNumber: number, beforeAddingSnippetLength: number, afterAddingSnippetLength: number): void;
			/**
			 * Checks if the font named in the string fontName exists in 
			 * the current operating system.
			 * @param {string} fontName
			 * @returns {boolean}
			 */
			public isFontInstalled(fontName: string): boolean;
			/**
			 * determines if an ActionScript 3 identifier is valid or not
			 * @param {string} identifier name of identifier
			 * @returns {boolean}
			 */
			public isValidIdentifier(identifier: string): boolean;
			/**
			 * if Headlight is enabled, we can logPIPEvent using javascript 
			 * api.  Similar to C++ version of theApp.LogPIPEvent.  Most 
			 * subCategory are not defined ie: we use empty string in this 
			 * case
			 * @param {string} category category name such as Sketch 
			 * Command
			 * @param {string} subCategory subCategory is not optional, 
			 * however if you don't have anything to specify, use ""
			 * @param {string} eventName this is the event name
			 * @returns {void}
			 */
			public logPIPEvent(category: string, subCategory: string, eventName: string): void;
			/**
			 * Maps a unicode escaped URI to a UTF8 or MBCS URL. Used when 
			 * the string is to be used in Actionscript to access an  
			 * external resource. Must use if you need to handle multi-byte 
			 * characters.
			 * @param {string} URI the escaped unicode URI to map.
			 * @param {boolean} returnMBCS if true UTF8 will be returned, 
			 * otherwise MBCS.  default is false.
			 * @returns {string}
			 */
			public mapPlayerURL(URI: string, returnMBCS: boolean): string;
			/**
			 * Opens a FLA document or an XFL document for editing in a new 
			 * Flash Document window and gives it the focus. For a user, 
			 * the effect is the same as choosing File > Open and selecting 
			 * a file. If the specified file is already open, the window 
			 * that contains the document comes to the front. The window 
			 * that contains the specified file becomes the currently 
			 * selected document.
			 * 
			 * RETURNS: The Document object for the newly opened document 
			 * upon success, or undefined upon error.
			 * @param {string} fileURI fileURI specifies the name of the 
			 * file to be opened, which is expressed as a URL (file://URL). 
			 * If the URL is relative, it is relative to the file that 
			 * contains the script that called this function.
			 * @returns {Adobe.Flashpro.Document}
			 */
			public openDocument(fileURI: string): Adobe.Flashpro.Document;
			/**
			 * Invoke the File-Open dialog and allow the user to choose a 
			 * file to be loaded into the authoring tool. used for start 
			 * page.
			 * @returns {boolean}
			 */
			public openFileDialog(): boolean;
			/**
			 * Opens a script (JSFL, AS, ASC) or other file (XML, TXT) into 
			 * the Flash text editor.
			 * @param {string} scriptURI This is the full or relative path 
			 * of the JSFL, AS, ASC, XML, TXT or other file that should be 
			 * loaded into the Flash text editor.
			 * @returns {void}
			 */
			public openScript(scriptURI: string): void;
			/**
			 * Publishes a FLA file without opening it. This API opens the 
			 * FLA in a headless mode and publishes the SWF (or whatever 
			 * the profile is set to).  The second parameter 
			 * (publishProfile) is optional. The return value is a boolean 
			 * indicating if the profile was found or not. In the case 
			 * where the second parameter is not supplied, the return value 
			 * is always true.
			 * 
			 * If the 3rd and 4th parameters are used, the first two 
			 * parameters are ignored. In Flash CS5, we added these 
			 * additional parameters to allow publishing multiple documents 
			 * at a time.
			 * @param {string} flaURI A string, expressed as a file:/// 
			 * URI, that specifies the path of the FLA file that should be 
			 * silently published.
			 * @param {string} publishProfile A string that specifies the 
			 * publish profile to use when publishing. If this parameter is 
			 * omitted, the default publish profile is used.
			 * @param {any} fileURIArray an array of file URIs which point 
			 * to FLAs
			 * @param {any} profileNameArray an array of profile names that 
			 * correspond to the fileURIArray items
			 * @returns {boolean}
			 */
			public publishDocument(flaURI: string, publishProfile: string, fileURIArray: any, profileNameArray: any): boolean;
			/**
			 * Quits flash prompting user to save unchanged documents
			 * @param {boolean} bPromptIfNeeded This is an optional 
			 * parameter.
			 * @returns {void}
			 */
			public quit(bPromptIfNeeded: boolean): void;
			/**
			 * fl.reloadEffects() will reload all effects descriptors 
			 * defined in the per-user configuration effects folder.  This 
			 * allows rapidly changing the scripts during develop and 
			 * provides a mechanism to improve the effects without 
			 * relaunching the application.  Best if used in a command 
			 * placed in the commands folder.
			 * @returns {void}
			 */
			public reloadEffects(): void;
			/**
			 * Tells the application to reload a specific preference 
			 * setting that was changed earlier in the session. Call this 
			 * function after setting a specific preference value with 
			 * setPrefInteger() or setPrefString(), passing in the first 
			 * two parameters used for the set calls.
			 * @param {string} keySection section name of preference 
			 * setting (usually this is "Settings")
			 * @param {string} keyName name of preference setting being 
			 * changed
			 * @returns {boolean}
			 */
			public reloadPref(keySection: string, keyName: string): boolean;
			/**
			 * Rebuilds the Toolbar from the toolconfig.xml file. Used only 
			 * when creating extensible tools.
			 * @returns {void}
			 */
			public reloadTools(): void;
			/**
			 * Unregisters a JS function to be called when a specific event 
			 * is received.
			 * @param {string} eventType The event type associated with the 
			 * callback function you are removing. Currently, this can be 
			 * one of the following: "documentNew", "documentOpened", 
			 * "documentClosed", "mouseMove", "documentChanged", 
			 * "layerChanged", "frameChanged", "selectionChanged", 
			 * "timelineChanged"
			 * @param {number} guid this is the return value of the 
			 * fl.addEventListener() call
			 * @returns {boolean}
			 */
			public removeEventListener(eventType: string, guid: number): boolean;
			/**
			 * Resets global classpath for AS3 to the default (e.g. 
			 * ".;$(LocalData)/Classes").  Global classpath is set in the 
			 * AS3 dialog that pops up from the main Preferences dialog.  
			 * This is different than the per fla classpath set from the 
			 * Publish Profiles dialog.
			 * @returns {void}
			 */
			public resetAS3PackagePaths(): void;
			/**
			 * Resets global classpath for AS2 to the default (e.g. 
			 * ".;$(LocalData)/Classes").  Global classpath is set in the 
			 * AS2 dialog that pops up from the main Preferences dialog.  
			 * This is different than the per fla classpath set from the 
			 * Publish Profiles dialog.
			 * @returns {void}
			 */
			public resetPackagePaths(): void;
			/**
			 * Reverts the specified document to its last saved version. 
			 * Unlike the menu option, this function doesn't pop up any 
			 * warning window asking to confirm the operation because not 
			 * undoable. RETURNS: true if the Revert operation completes 
			 * successfully; false otherwise.
			 * @param {Document} documentObject documentObject is the 
			 * object at the root of a document's DOM tree (the value that 
			 * fl.getDocumentDOM() returns). If documentObject refers to 
			 * the active document, the Document window might not revert 
			 * until the script that calls this function finishes 
			 * executing.
			 * @returns {boolean}
			 */
			public revertDocument(documentObject: Document): boolean;
			/**
			 * revert the document to the latest version of the document on 
			 * a version cue server . Noting happens if revert operation 
			 * can't be performed on the document. Also log any kind of 
			 * version cue error to the trace panel.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened. For authentication failure from a server 
			 * whose credentials are not cached, currently we log the 
			 * authentication failure error to the output panel. In such a 
			 * case users can just visit the version cue workspace using 
			 * open dialog and passed the necessary credentials. Version 
			 * cue has key chain mechanism for authentication, so the 
			 * credentials are stored and then subsequent java script 
			 * execution would be successful.
			 * @param {Document} documentObject documentObject is the 
			 * object at the root of a document's DOM tree (the value that 
			 * fl.getDocumentDOM() returns). If documentObject refers to 
			 * the active document, the Document window might not revert 
			 * until the script that calls this function finishes 
			 * executing.
			 * @returns {boolean}
			 */
			public revertDocumentToLastVersion(documentObject: Document): boolean;
			/**
			 * Executes a JavaScript file. If a function is specified it 
			 * will run any code in the script that is NOT within a 
			 * function and the function.
			 * @param {string} fileURI URI of the script file to execute.
			 * @param {string} funcName If present, identifies a function 
			 * to execute in the .jsfl file. Note: the function must be 
			 * placed in the jsfl file that specified in fileURI
			 * @param {any} arg The third and subsequent arguments to 
			 * runScript are passed as arguments to the function identified 
			 * in argument 2 in the file identified in argument 1.  There 
			 * can be any number of arguments.
			 * @returns {void}
			 */
			public runScript(fileURI: string, funcName: string, arg: any): void;
			/**
			 * Saves all open documents, displaying the Save As dialog box 
			 * for any documents that were not
			 * previously been saved.
			 * @returns {void}
			 */
			public saveAll(): void;
			/**
			 * If a version can be saved for the document then saves a 
			 * version for it. Otherwise this method does nothing. Prompt 
			 * UI dialog for taking version comments.
			 * 
			 * Returns true if new version is successfully saved otherwise 
			 * returns false. Also log any kind of version cue error to the 
			 * trace panel.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened. For authentication failure from a server 
			 * whose credentials are not cached, currently we log the 
			 * authentication failure error to the output panel. In such a 
			 * case users can just visit the version cue workspace using 
			 * open dialog and passed the necessary credentials. Version 
			 * cue has key chain mechanism for authentication, so the 
			 * credentials are stored and then subsequent java script 
			 * execution would be successful.
			 * @param {Document} documentObject documentObject is the 
			 * object at the root of a document's DOM tree (the value that 
			 * fl.getDocumentDOM() returns). If documentObject refers to 
			 * the active document, the Document window might not revert 
			 * until the script that calls this function finishes 
			 * executing.
			 * @returns {boolean}
			 */
			public saveAVersionOfDocument(documentObject: Document): boolean;
			/**
			 * Saves specified document as a FLA. or Uncompressed FLA by 
			 * specifying .xfl as the filename.
			 * RETURNS: true if the Save operation completes successfully; 
			 * false otherwise.
			 * @param {Document} document The first argument is a Document 
			 * object that specifies the document to be saved. If document 
			 * is null the active document is saved.
			 * @param {string} fileURI The second argument is the name of 
			 * the saved document expressed as a file://URL. If the fileURL 
			 * is null or omitted , the document is saved with its current 
			 * name; if the document is not yet saved, the save as dialog 
			 * is displayed.
			 * @returns {boolean}
			 */
			public saveDocument(document: Document, fileURI: string): boolean;
			/**
			 * Displays the Save As dialog box for the specified document. 
			 * 
			 * RETURNS: true if the Save As operation completes 
			 * successfully; false otherwise.
			 * @param {Document} document document is a Document object 
			 * that specifies the document to
			 * @returns {boolean}
			 */
			public saveDocumentAs(document: Document): boolean;
			/**
			 * enables selection or editing of an element. Typically used 
			 * with findObjectInDocByName or findObjectInDocByType.
			 * @param {any} element This object references a document 
			 * element.
			 * @param {boolean} editMode true means that the element can be 
			 * edited, false means the element will become selected.
			 * @returns {boolean}
			 */
			public selectElement(element: any, editMode: boolean): boolean;
			/**
			 * Selects the specified tool in the tool palette.
			 * @param {string} toolName name of the tool to select
			 * @returns {boolean}
			 */
			public selectTool(toolName: string): boolean;
			/**
			 * Sets the active window to be the specified document.
			 * This method is also supported by Dreamweaver and Fireworks.
			 * If the document has multiple views (i.e. created by Edit In 
			 * New Window), the first view is selected.
			 * @param {Document} document Document to select as the active 
			 * window
			 * @param {boolean} bActivateFrame This argument is present for 
			 * consistency with the Dreamweaver JSAPI.  As in Fireworks, it 
			 * is optional and it is ignored.
			 * @returns {void}
			 */
			public setActiveWindow(document: Document, bActivateFrame: boolean): void;
			/**
			 * sets an integer preference value
			 * @param {string} keySection section name of preference 
			 * setting (usually this is "Settings")
			 * @param {string} keyName name of preference setting being 
			 * changed
			 * @param {number} keyValue integer value to set
			 * @returns {void}
			 */
			public setPrefInteger(keySection: string, keyName: string, keyValue: number): void;
			/**
			 * sets an string preference value
			 * @param {string} keySection section name of preference 
			 * setting (usually this is "Settings")
			 * @param {string} keyName name of preference setting being 
			 * changed
			 * @param {string} keyValue string value to set
			 * @returns {void}
			 */
			public setPrefString(keySection: string, keyName: string, keyValue: string): void;
			/**
			 * method is used to pass the Project panel properties to the 
			 * app in an XML format. Optionally, the app can read this data 
			 * directly from the "<user config>/Project/Project 
			 * Preferences.xml" file.
			 * @param {string} xmlString XML data passed as a string, which 
			 * contains the Project panel's preferences.
			 * @returns {void}
			 */
			public setProjectPrefsAsXML(xmlString: string): void;
			/**
			 * Displays the Help panel and sets specified tab to be the 
			 * active tab.
			 * @param {number} tabIndex zero based index, that specifies 
			 * which tab to display in the help panel
			 * @returns {void}
			 */
			public showHelpTab(tabIndex: number): void;
			/**
			 * Use showIdleMessage(false) to disable the JS warning about a 
			 * script running too long. This is useful for batch operations 
			 * that take a long time to complete. Use showIdleMessage(true) 
			 * to re-enable the alert.
			 * @param {boolean} show Use false to hide the script warning 
			 * alert. Use true to re-enable it.
			 * @returns {void}
			 */
			public showIdleMessage(show: boolean): void;
			/**
			 * Enable or disable the Start Page during program launch. Same 
			 * as changing this in the preferences dialog.
			 * @param {boolean} showPage True to enable the Start Page, 
			 * false to disable and change the launch preference to "New 
			 * Document".
			 * @returns {void}
			 */
			public showStartPage(showPage: boolean): void;
			/**
			 * synchronize any document managed by version cue with its 
			 * copy on version cue server. After it the local copy is 
			 * updated and is in sync with the copy on version cue server. 
			 * Prompt UI like version comment dialog or conflict alert. 
			 * Also log any kind of version cue error to the trace panel.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened. For authentication failure from a server 
			 * whose credentials are not cached, currently we log the 
			 * authentication failure error to the output panel. In such a 
			 * case users can just visit the version cue workspace using 
			 * open dialog and passed the necessary credentials. Version 
			 * cue has key chain mechanism for authentication, so the 
			 * credentials are stored and then subsequent java script 
			 * execution would be successful.
			 * @param {any} documentObject documentObject is the object at 
			 * the root of a document's DOM tree (the value that 
			 * fl.getDocumentDOM() returns). If documentObject refers to 
			 * the active document, the Document window might not revert 
			 * until the script that calls this function finishes 
			 * executing.
			 * @returns {boolean}
			 */
			public synchronizeDocumentWithHeadVersion(documentObject: any): boolean;
			/**
			 * Sends a text string to the output window. Works just like 
			 * the trace statement in ActionScript.
			 * @param {any} message message is the string that will be 
			 * displayed in output panel
			 * @returns {void}
			 */
			public trace(message: any): void;
			/**
			 * Updates the help content. Will force internet connection if 
			 * it doesn't exist (for example on dial-up).
			 * @returns {void}
			 */
			public updateHelpContents(): void;
			/**
			 * Posts a XMLUI dialog. The object returned has properties 
			 * defined for all controls defined in the xml file. All 
			 * properties are returned as strings. The returned object will 
			 * have one predefined property named "dismiss" that will have 
			 * the string value "accept" or "cancel".
			 * @param {string} fileURI A URI specifying the xml file 
			 * defining the controls in the panel. Need to use the full 
			 * path name.
			 * @returns {any}
			 */
			public xmlPanel(fileURI: string): any;
		}
	}
}