/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Document object represents the stage. (see main 
		 * JavaScript API for more info)
		 */
		class Document extends Adobe.Csawlib.CSHostObject {
			/**
			 * Name of the movie. This is not the instance name, this name 
			 * will be exposed to the screen reader.
			 */
			public accName: string;
			/**
			 * Boolean property that describes whether the instances placed 
			 * on stage will be automatically added to user-defined 
			 * timeline classes. By default this is true.  If the user 
			 * would prefer to explicitly declare these instances in the 
			 * class files, then this option can be set to false.
			 */
			public as3AutoDeclare: boolean;
			/**
			 * String property that describes the AS3 dialect.  Acceptable 
			 * values are "AS3" and "ES".  By default, the value is "AS3". 
			 * If old ECMAScript behavior is desired for the purpose of 
			 * allowing prototype classes, then this should be set to "ES".
			 */
			public as3Dialect: string;
			/**
			 * Number that specifies which frame to export ActionScript 3.0 
			 * classes.  By default classes are exported in frame 1.
			 */
			public as3ExportFrame: number;
			/**
			 * Boolean property that specifies whether the ActionScript 3.0 
			 * compiler should compile with strict mode option turned on.  
			 * By default this is true.
			 */
			public as3StrictMode: boolean;
			/**
			 * Boolean property that specifies whether the ActionScript 3.0 
			 * compiler should compile with warnings mode option turned on. 
			 *  By default this is true.
			 */
			public as3WarningsMode: boolean;
			/**
			 * returns a number with values 1, 2, 3 or - if it is 
			 * undefined. User can also assign the ActionScript version for 
			 * the document.
			 */
			public asVersion: number;
			/**
			 * This is equivalent to the Auto Label checkbox on the 
			 * Accessibility Panel.
			 * Instructs Flash to automatically label objects on the stage 
			 * with the text associated with them.
			 */
			public autoLabel: boolean;
			/** Color representing the background. */
			public backgroundColor: string;
			/**
			 * Set/Get the name of the active publish profile for document.
			 */
			public currentPublishProfile: string;
			/**
			 * Index of the active timeline. Use getTimeline() to get the 
			 * active timeline in the document. Setting the active timeline 
			 * by changing the value of this property is possible. The 
			 * effect is equivalent to the one obtained by calling 
			 * 'editScene()'. The only difference is that we don't get any 
			 * error message if the index of the timeline is not valid (the 
			 * property is simply not set -> silent failure).
			 */
			public currentTimeline: number;
			/**
			 * Equivalent to the Description field on the Accessibility 
			 * Panel. The description is read by the screen reader.
			 */
			public description: string;
			/**
			 * A string that specifies the top-level ActionScript 3.0 class 
			 * associated with the document.
			 */
			public docClass: string;
			/** Private property, the gateway to the DOM2 APIs */
			public readonly DOM2: any;
			/**
			 * Comma delimited list of items in the AS3 external library 
			 * path for the document. Default value = '.'
			 */
			public externalLibraryPath: string;
			/**
			 * Enable/disable the children of the object to be accessible. 
			 * This is equivalent to the inverse logic of "Make Child 
			 * Objects Accessible" setting in the Accessibility Panel. 
			 * 
			 * forceSimple == true --> Make Child Object Accessible is 
			 * unchecked.
			 * 
			 * forceSimple == false --> Make Child Object Accessible is 
			 * checked.
			 */
			public forceSimple: boolean;
			/** The number of frames per second. The default is 12. */
			public frameRate: number;
			/** Height of the document/stage */
			public height: number;
			/**
			 * returns an integer that represents the internal document ID. 
			 * Each document in a Flash session will have a unique document 
			 * ID.
			 */
			public readonly id: number;
			/** Flag describing if the document is Compressed/Uncompressed. */
			public readonly isUncompressed: boolean;
			/** The library object for the document. */
			public readonly library: Adobe.Flashpro.Library;
			/**
			 * Comma delimited list of items in the AS3 library path for 
			 * the document.
			 */
			public libraryPath: string;
			/**
			 * If true, the document should display components as they will 
			 * appear in the player.
			 */
			public livePreview: boolean;
			/** name of the document */
			public readonly name: string;
			/**
			 * path of the document (the value is 'undefined' if the 
			 * document was never saved).
			 */
			public readonly path: string;
			/**
			 * path of the document as a platform-independent URI (the 
			 * value is 'undefined' if the document was never saved).
			 */
			public readonly pathURI: string;
			/** the current player target for publishing a SWF */
			public readonly playerTarget: string;
			/**
			 * returns a string with values 1-7, or - if it is undefined ( 
			 * they'll have to add 8 once there is a new player )
			 */
			public readonly playerVersion: string;
			/** An array of the publish profile names for the document. */
			public readonly publishProfiles: any[];
			/** The current Screen Outline object for the document. */
			public readonly screenOutline: Adobe.Flashpro.ScreenOutline;
			/**
			 * Array of the selected objects in the document. If nothing is 
			 * selected. returns an array of length zero. If no document is 
			 * open, returns null.
			 */
			public selection: any[];
			/**
			 * Enable/disable the object to be accessible. This is 
			 * equivalent to the inverse logic of "Make Movie Accessible" 
			 * setting in the Accessibility Panel.
			 * 
			 * silent == true --> Make Movie Accessible is unchecked.
			 * 
			 * silent == false --> Make Movie Accessible is checked.
			 */
			public silent: boolean;
			/**
			 * Comma delimited list of items in the AS3 source path for the 
			 * document.
			 */
			public sourcePath: string;
			/** The JPEG Quality setting in the current Publish Profile. */
			public readonly swfJPEGQuality: number;
			/**
			 * An array of timeline objects. See timeline object for more 
			 * info.
			 */
			public readonly timelines: any[];
			/**
			 * viewMatrix is a matrix object.  A matrix has 6 properties:  
			 * a, b, c, d, tx, ty;
			 */
			public readonly viewMatrix: any;
			/** Width of the document/stage */
			public width: number;
			/**
			 * Gets/Sets the zoom percent of the Stage at Author-time. A 
			 * value of 1 equals 100% zoom, 8 = 800%, .5 = 50%, etc.
			 */
			public zoomFactor: number;
			/**
			 * Stores specified data with a document. Data is written to 
			 * the .fla file and available to JavaScript when the file is 
			 * re-opened.
			 * @param {string} name the name of the data to add.
			 * @param {string} _type this argument defines the type of 
			 * data. allowable types are "integer", "integerArray", 
			 * "double", "doubleArray", "string", and "byteArray".
			 * @param {any} data the value depends on the value of argument 
			 * 2. The logical rules apply.
			 */
			public addDataToDocument(name: string, _type: string, data: any): void;
			/**
			 * Stores specified data with the selected object(s). Data is 
			 * written to .fla file and available to JavaScript when the 
			 * file is re-opened.
			 * @param {string} name the name of the persistent data
			 * @param {string} _type this argument defines the type of 
			 * data. allowable types are "integer", "integerArray", 
			 * "double", "doubleArray", "string", and "byteArray".
			 * @param {any} data the value depends on the value of argument 
			 * 2. The logical rules apply.
			 */
			public addDataToSelection(name: string, _type: string, data: any): void;
			/**
			 * Add a filter to the selected objects.
			 * @param {string} filterName "glowFilter", "dropShadowFilter", 
			 * "blurFilter", "bevelFilter", "gradientBevelFilter", 
			 * "gradientGlowFilter", "adjustColorFilter"
			 */
			public addFilter(filterName: string): void;
			/**
			 * Adds an item from library as specified in the item parameter 
			 * to the document object specified.
			 * RETURNS: true if successful, false otherwise
			 * @param {any} position Specifies x,y location to add the item 
			 * to. Uses the center of the symbol.
			 * @param {any} item Specifies from which library and which 
			 * item to add.
			 */
			public addItem(position: any, item: any): boolean;
			/**
			 * Adds a new path between two points. The path uses the doc's 
			 * current stroke attributes and is added on current frame, 
			 * current layer. This works just as if you clicked on the line 
			 * tool and drew a line.
			 * @param {any} startPoint The x and y position where the line 
			 * starts
			 * @param {any} endPoint The arguments are points that specify 
			 * the x,y coordinates between which the path is added.
			 */
			public addNewLine(startPoint: any, endPoint: any): void;
			/**
			 * Adds a new oval fitting into the specified bounding 
			 * rectangle. The oval uses the document's current default 
			 * stroke/fill attributes and is added on the current frame and 
			 * layer. If bSurpressFill is set to true, the oval is drawn 
			 * without a fill. if bSurpressStroke is set to true, oval is 
			 * drawn without a stroke
			 * @param {any} boundingRectangle The argument is a rectangle 
			 * that specifies the bounds of the oval to be added
			 * @param {boolean} bSuppressFill If true the shape will be 
			 * created without a fill.  default is false.
			 * @param {boolean} bSuppressStroke If true the shape will be 
			 * created without a stroke. Default is false
			 */
			public addNewOval(boundingRectangle: any, bSuppressFill: boolean, bSuppressStroke: boolean): void;
			/**
			 * Adds a new oval primitive fitting into the specified bounds. 
			 * The rectangle primitive uses the document's current default 
			 * path attributes and is added on the current frame and layer. 
			 * If bSuppressFill is set to true, the oval is drawn with no 
			 * fill. If bSupressStroke is set to true, the oval is drawn 
			 * without a stroke.
			 * @param {any} boundingRectangle The first argument is a 
			 * rectangle that specifies the bounds within which the new 
			 * oval primitive is added
			 * @param {boolean} bSupressFill If true the shape will be 
			 * created with no fill. Default is false.
			 * @param {boolean} bSuppressStroke If true the shape will be 
			 * created without a stroke. Default is false.
			 */
			public addNewPrimitiveOval(boundingRectangle: any, bSupressFill: boolean, bSuppressStroke: boolean): void;
			/**
			 * Adds a new rectangle primitive fitting into the specified 
			 * bounds. The rectangle primitive uses the document's current 
			 * default path attributes and is added on the current frame 
			 * and layer. If bSuppressFill is set to true, the rectangle is 
			 * drawn with no fill. If bSupressStroke is set to true, the 
			 * rectangle is drawn without a stroke.
			 * @param {any} boundingRectangle The first argument is a 
			 * rectangle that specifies the bounds within which the new 
			 * rectangle primitive is added
			 * @param {number} roundness The second is argument is a int 
			 * value between 0 and 999 that specifies "roundness" to use 
			 * for the corners, specified in terms of number of points.
			 * @param {boolean} bSupressFill If true the shape will be 
			 * created with no fill. Default is false.
			 * @param {boolean} bSuppressStroke If true the shape will be 
			 * created without a stroke. Default is false.
			 */
			public addNewPrimitiveRectangle(boundingRectangle: any, roundness: number, bSupressFill: boolean, bSuppressStroke: boolean): void;
			/**
			 * Add a new publish profile and make it the current one.
			 * returns: index of the new profile in the profiles list; 
			 * returns -1 if new profile couldn't be created
			 * @param {string} profileName_ profileName, name of the new 
			 * profile (with unique name). If the name is not specified, a 
			 * default name will be provided.
			 */
			public addNewPublishProfile(profileName_: string): number;
			/**
			 * Adds a new rectangle or rounded rectangle fitting into the 
			 * specified bounds. The rectangle uses the document's current 
			 * default path attributes and is added on the current frame 
			 * and layer. if bSurpressFill is set to true, rectangle is 
			 * drawn with no fill. If bSurpressStroke is set to true, 
			 * rectanlge is drawn without a stroke.
			 * @param {any} boundingRectangle The first argument is a 
			 * rectangle that specified the bounds within which the new 
			 * rectangle is added
			 * @param {number} roundness The second is argument is a int 
			 * value between 0 and 999 that specifies "roundness" to use 
			 * for the corners, specified in terms of number of points.
			 * @param {boolean} bSupressFill If true the shape will be 
			 * created with no fill. Default is false.
			 * @param {boolean} bSuppressStroke If true the shape will be 
			 * created without a stroke. Default is false.
			 */
			public addNewRectangle(boundingRectangle: any, roundness: number, bSupressFill: boolean, bSuppressStroke: boolean): void;
			/**
			 * Adds a new scene (timeline object) as the next scene (just 
			 * after the currently selected scene) and sets it as the 
			 * currently selected scene. If the name in argument already 
			 * exists, the scene is not added and the function returns an 
			 * error.
			 * 
			 * RETURNS: true if scene was sucessfully added, otherwise 
			 * false.
			 * @param {string} name The name of the scene. If name not 
			 * specified, a new scene name is generated.
			 */
			public addNewScene(name: string): boolean;
			/**
			 * Inserts a new empty text field.
			 * @param {any} boundingRectangle Added boundingRectangle 
			 * argument instead of x,y,w,h.
			 * @param {string} text The argument is a string consisting of 
			 * the characters to be inserted in the text field.
			 */
			public addNewText(boundingRectangle: any, text: string): void;
			/**
			 * Aligns the selection.
			 * @param {string} alignmode Acceptable values for alignmode 
			 * are "left", "right", "top", "bottom", "vertical center", and 
			 * "horizontal center".  
			 * @param {boolean} bUseDocumentBounds if useDocumentBounds is 
			 * true align to the bounds of the document, otherwise use the 
			 * bounds of the selected objects.  Defaults to false.
			 */
			public align(alignmode: string, bUseDocumentBounds: boolean): void;
			/**
			 * Check this method before using the screenOutline property.  
			 * If allowScreens() returns true, dom.screenOutline can safely 
			 * be used, otherwise dom.screenOutline will display an error 
			 * for the user indicating screens cannot be used.
			 */
			public allowScreens(): boolean;
			/**
			 * Arranges the selection.  Only applies to non-shape objects
			 * @param {string} arrangeMode Acceptable values for 
			 * arrangemode are "back", "backward", "forward", and "front".
			 */
			public arrange(arrangeMode: string): void;
			/** Performs a breakApart operation on the current selection. */
			public breakApart(): void;
			/**
			 * Boolean returned by method which indicates whether the "Edit 
			 * Symbols" menu and functionality is enabled.  This is 
			 * independent of the selection status of any objects stage, 
			 * but rather if one or more symbols are defined.   This should 
			 * not be used to test whether 
			 * fl.getDocumentDOM().enterEditMode() is allowed.
			 */
			public canEditSymbol(): boolean;
			/**
			 * fl.getDocumentDOM().canRevert()
			 * 
			 * RETURNS: boolean returned by method indicating whether the 
			 * <dom.revert()> method should be used.
			 */
			public canRevert(): boolean;
			/**
			 * Finds out if save a version operation can happen or not on 
			 * the document. Returns true if a new version of the document 
			 * can be saved.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened.
			 * 
			 * For authentication failure from a server whose credentials 
			 * are not cached, currently we log the authentication failure 
			 * error to the output panel. In such a case users can just 
			 * visit the version cue workspace using open dialog and passed 
			 * the necessary credentials. Version cue has key chain 
			 * mechanism for authentication, so the credentials are stored 
			 * and then subsequent java script execution would be 
			 * successful.
			 */
			public canSaveAVersion(): boolean;
			/**
			 * fl.getDocumentDOM().canTestMovie()
			 * RETURNS: boolean returned by method indicating whether the 
			 * method should be used.
			 */
			public canTestMovie(): boolean;
			/**
			 * RETURNS: boolean returned by method indicating whether the 
			 * method should be used.
			 */
			public canTestScene(): boolean;
			/**
			 * Change the index of the filter in the filter list.
			 * @param {number} oldIndex the old index of the filter to be 
			 * changed in the filter list
			 * @param {number} newIndex the new index of the filter in the 
			 * filter List.
			 */
			public changeFilterOrder(oldIndex: number, newIndex: number): void;
			/** Copies the selection to the Clipboard. */
			public clipCopy(): void;
			/** Cuts the selection to the Clipboard. */
			public clipCut(): void;
			/**
			 * Pastes the Clipboard into the document.
			 * @param {boolean} bInPlace Default is false, which performs a 
			 * regular paste operation.
			 */
			public clipPaste(bInPlace: boolean): void;
			/**
			 * Closes the specified document.
			 * @param {boolean} bPromptToSaveChanges If false is specified, 
			 * the user is not prompted with a dialog box if there are 
			 * unsaved changes in the document.  If true, the user will be 
			 * prompted with the standard yes/no dialog box if there are 
			 * unsaved changes.  Default is true.
			 */
			public close(bPromptToSaveChanges: boolean): void;
			/** Performs a convert lines to Fills on the selected objects. */
			public convertLinesToFills(): void;
			/**
			 * convert selected objects in current frame to bitmap, and the 
			 * bitmap is inserted into library
			 */
			public convertSelectionToBitmap(): boolean;
			/**
			 * Converts the selected stage item(s) to a new symbol.
			 * 
			 * RETURNS: the newly created symbol, or null if the symbol is 
			 * failed to create
			 * @param {string} _type The type of the symbol.
			 * @param {string} name The name for the new symbol, this must 
			 * be unique or the function will fail and return null
			 * @param {string} registrationPoint The registration point.
			 */
			public convertToSymbol(_type: string, name: string, registrationPoint: string): any;
			/** Copy the filter list (all filters) of the selected objects */
			public copyAllFilters(): boolean;
			/**
			 * Copy the filter at the specified index in the filter list
			 * @param {number} index index of the filter in the filter list 
			 * to be copied
			 */
			public copyFilter(index: number): void;
			/**
			 * Using top selected Drawing Object to crop all selected 
			 * Drawing Objects underneath it
			 */
			public crop(): boolean;
			/**
			 * launches an AIR based SWF in the external player and 
			 * attaches the AS3 debugger
			 * @param {string} debugLauncherPath path to adl tool
			 * @param {string} runtimePath path to AIR runtime folder
			 * @param {string} applicationXMLPath path to the application 
			 * xml file
			 * @param {string} forDebugging "true" if this is a debugging 
			 * session
			 * @param {string} profileName the profile name of the targeted 
			 * device. This can be: desktop, mobileDevice, extendedDesktop. 
			 * and extendedMobileDevice, et al.
			 * @param {string} pubidName publisher ID string, which is in 
			 * the following format: com.mydomain.myapp 
			 * @param {string} securityPath path to AIR security policy 
			 * file
			 * @param {string} screenSize screen size of device, which can 
			 * be one of the following: 
			 * @param {number} dpi screen resolution of SWF
			 */
			public debugAIRMovie(debugLauncherPath: string, runtimePath: string, applicationXMLPath: string, forDebugging: string, profileName: string, pubidName: string, securityPath: string, screenSize: string, dpi: number): void;
			/**
			 * Export the swf and connect to Apollo runtime for debugging 
			 * when the parameters are set for apollo debug launcher and 
			 * runtime.  We do not have debug movie for a regular fla.  
			 * This method is written for Apollo support.  This is for 
			 * internal use only.
			 * @param {string} ApolloDebugLauncherPath Path to ADL
			 * @param {string} ApolloRuntimePath Path to Apollo Runtime
			 * @param {string} apolloSecurity path apollo security file
			 */
			public debugMovie(ApolloDebugLauncherPath: string, ApolloRuntimePath: string, apolloSecurity: string): void;
			/**
			 * Delete envelopes on the selected object. Return true on 
			 * success, false otherwise.
			 */
			public deleteEnvelope(): boolean;
			/**
			 * Delete the profile currently active if more than one 
			 * profile. We need to have at least one profile left.
			 * RETURNS: index of the new current profile in the profiles 
			 * list; if new profile couldn't be created, fails silently and 
			 * return unchanged current profile index.
			 */
			public deletePublishProfile(): number;
			/**
			 * Deletes the current scene (timeline object) and:
			 * - if the deleted scene was not the last one, sets the next 
			 * object as the current timeline,
			 * - if the deleted scene was the last one, sets the first 
			 * object as the current timeline. 
			 * If only one timeline object (Scene) exists, returns false
			 * RETURNS: true if scene was sucessfully deleted, otherwise 
			 * false.
			 */
			public deleteScene(): boolean;
			/** Deletes the selection in the document. */
			public deleteSelection(): void;
			/** Disable all filters on selected objects. */
			public disableAllFilters(): void;
			/**
			 * Disable specified filter in the filter list.
			 * @param {number} index Index of the filter to be disabled in 
			 * the filter list array.
			 */
			public disableFilter(index: number): void;
			/**
			 * Alt click to disable other filters but the one that is alt 
			 * click on.
			 * @param {number} index index of the filter that is always 
			 * enabled while others are disabled.
			 */
			public disableOtherFilters(index: number): void;
			/**
			 * Distributes the selection.
			 * @param {string} distributemode Acceptable values for 
			 * distributeMode are "left edge", "horizontal center", "right 
			 * edge", "top edge", "vertical center", and "bottom edge"
			 * @param {boolean} bUseDocumentBounds if useDocumentBounds is 
			 * true distribute using the bounds of the document, otherwise 
			 * use the bounds of the selected objects.  Defaults to false.
			 */
			public distribute(distributemode: string, bUseDocumentBounds: boolean): void;
			/**
			 * Performs a distribute to layers operation on the current 
			 * selection, same as selecting the menu item Distribute to 
			 * Layers.
			 */
			public distributeToLayers(): void;
			/**
			 * Returns true if there is persistent data with the specified 
			 * name.
			 * @param {string} name the name of the data to check for.
			 */
			public documentHasData(name: string): boolean;
			/**
			 * Duplicate the profile currently active and make it the 
			 * current one.
			 * RETURNS: index of the new profile in the profiles list; 
			 * returns -1 if new profile couldn't be duplicated
			 * @param {string} profileName_ profileName, name of the 
			 * duplicated profile (unique name). If the name is not 
			 * specified, a default name will be provided.
			 */
			public duplicatePublishProfile(profileName_: string): number;
			/**
			 * Makes a copy of the currently selected scene, giving the new 
			 * scene a default unique name and setting it as the current 
			 * scene.
			 * 
			 * RETURNS: true if scene was sucessfully duplicated, otherwise 
			 * false.
			 */
			public duplicateScene(): boolean;
			/** Duplicates the selection in the document. */
			public duplicateSelection(): void;
			/**
			 * Sets the specified scene as the currently selected scene.
			 * @param {number} index A zero-based integer that specifies 
			 * which scene to
			 */
			public editScene(index: number): void;
			/** Enable all filters of the selected objects. */
			public enableAllFilters(): void;
			/**
			 * Enable the filter at the specified index in the filters List 
			 * array.
			 * @param {number} index Index of the filter to be enabled in 
			 * the filter list array
			 */
			public enableFilter(index: number): void;
			/**
			 * This switches the authoring tool into the editing mode 
			 * specified by the argument. If no argument is specified it 
			 * defaults to Edit Symbol mode. Which is the same as context 
			 * clicking on the symbol and selecting "Edit".
			 * NOTE: Repeating enterEditMode via HP or menu item repeats 
			 * the step previous to EnterEditMode
			 * @param {string} editMode Optional string specifying the 
			 * mode.  Allowable values are "inPlace", or "newWindow".  No 
			 * argument means edit symbol mode.
			 */
			public enterEditMode(editMode: string): void;
			/**
			 * Exit out of edit mode.  This command will go up one level 
			 * from the current level.
			 */
			public exitEditMode(): void;
			/**
			 * Export all the objects on the stage or selected one(s) to 
			 * the specified file in Adobe FXG format.
			 * 
			 * - fileURI: specifies the file name for the exported file. 
			 * - selection Only (optional): if true, Flash will export only 
			 * selected objects,otherwise Flash will export all objects. 
			 * Default value is false.
			 * @param {string} File_URL specifies the filename for the 
			 * exported file. 
			 */
			public exportFXG(File_URL: string): void;
			/**
			 * Export an selected Instance of movie clip, graphic symbol or 
			 * button on stage to a bitmap in Library
			 * @param {number} frameNumber the frame to be exported
			 * @param {string} bitmapName the name of the bitmap to be 
			 * added in Library
			 */
			public exportInstanceToLibrary(frameNumber: number, bitmapName: string): void;
			/**
			 * Export an selected Instance of movie clip, graphic symbol or 
			 * button on stage to a series of PNG files
			 * @param {string} outputURI The URI to export the PNG Sequence 
			 * files to.  This URI must reference a local file.  Example: 
			 * file:///c|/tests/mytest.png  (with written permission)
			 * @param {number} startFramNum start frame number which will 
			 * be exported. The default number is 1
			 * @param {number} endFrameNum end frame number which will be 
			 * exported. The default number is 99999
			 * @param {mathObject} jsMatrix Users can add additional matrix 
			 * to generate PNG sequence
			 */
			public exportInstanceToPNGSequence(outputURI: string, startFramNum: number, endFrameNum: number, jsMatrix: mathObject): void;
			/**
			 * Exports the document's library in the Flash SWC format to 
			 * the specified file.
			 * @param {string} fileURI fileURI is a string, which is 
			 * expressed as a file:///URI, that specifies the name of the 
			 * exported file. If fileURI is empty or not specified, Flash 
			 * displays the Export Movie dialog box. This parameter is 
			 * optional.
			 */
			public exportLibraryAsSWC(fileURI: string): void;
			/**
			 * exports the document as one or more PNG files. If fileURI is 
			 * specified and the file already exists, it is overwritten 
			 * without warning.
			 * @param {string} fileURI expressed as a file:/// URI, that 
			 * specifies the filename for the exported file. If fileURI is 
			 * an empty string or is not specified, Flash displays the 
			 * Export Movie dialog box.
			 * @param {boolean} bCurrentPNGSettings A Boolean value that 
			 * specifies whether to use the current PNG publish settings 
			 * (true) or to display the Export PNG dialog box (false). This 
			 * parameter is optional. The default value is false.
			 * @param {boolean} bCurrentFrame A Boolean value that 
			 * specifies whether to export only the current frame (true) or 
			 * to export all frames, with each frame as a separate PNG file 
			 * (false). 
			 */
			public exportPNG(fileURI: string, bCurrentPNGSettings: boolean, bCurrentFrame: boolean): boolean;
			/**
			 * Export the profile currently active to file.
			 * @param {string} fileURI_ fileURI (not optional): path of the 
			 * XML file defining the profile to export
			 */
			public exportPublishProfile(fileURI_: string): void;
			/**
			 * Given a profile name, it exports the profile XML data to a 
			 * string. If no profile name is provided or an empty string is 
			 * passed in, the current profile is exported.
			 * @param {string} profileName A string that specifies the name 
			 * of the profile to export to an XML string. This parameter is 
			 * optional
			 */
			public exportPublishProfileString(profileName: string): string;
			/**
			 * Export the document to the specififed file in Macromedia 
			 * Flash SWF format.
			 * @param {string} fileURI fileURI is a string, which is 
			 * expressed as a file://URL, that specifies the name of the 
			 * exported
			 * @param {boolean} bCurrentSettings currentSettings 
			 * (optional): if true, Flash uses current SWF publish 
			 * settings, otherwise Flash displays the SWF export settings 
			 * dialog. This argument is false by default.
			 */
			public exportSWF(fileURI: string, bCurrentSettings: boolean): void;
			/**
			 * Gets the preference for align(), distribute(), match(), and 
			 * space() to work acting on the document. Identical to 
			 * retrieving the value of the toStage button in the align 
			 * panel.
			 * 
			 * RETURNS: btoStage
			 * 
			 * If TRUE aligns objects to Stage, if FALSE it does not.
			 */
			public getAlignToDocument(): boolean;
			/** return the blend mode name on the selection. */
			public getBlendMode(): string;
			/**
			 * Returns the fill object of selection or the fill object of 
			 * toolbar, depending on what argument is set to.
			 * @param {string} locationOfFill If argument is not set it 
			 * defaults to selection. In the case of no selection, it 
			 * returns undefined. 
			 */
			public getCustomFill(locationOfFill: string): any;
			/**
			 * Returns the stroke object selection; if set to true, returns 
			 * fill object of toolbar
			 * @param {string} locationOfFill If argument is not set it 
			 * defaults to selection. In the case of no selection, it 
			 * returns undefined. 
			 */
			public getCustomStroke(locationOfFill: string): any;
			/**
			 * Returns the value of the specified data. The type returned 
			 * depends on the type of data that was stored.
			 * @param {string} name the name of the data to return.
			 */
			public getDataFromDocument(name: string): any;
			/**
			 * checks if the "Permit Debugging" checkbox is selected in the 
			 * Publish Settings dialog.
			 */
			public getDebugForSwf(): boolean;
			/**
			 * For the current selection, gets the given property and 
			 * RETURN the value.
			 * 
			 * See element properties for list of acceptable values.
			 * @param {string} propertyName the name of the property that 
			 * will return the value. See list of property
			 */
			public getElementProperty(propertyName: string): any;
			/**
			 * Gets a specific TextAttrs property of the selected text 
			 * objects.  If one text field is selected, we return the 
			 * property if there is only one value used within the text, 
			 * and 'undefined' if there are several values used inside the 
			 * field. If several text fields are selected, and all the text 
			 * alignment values are equal, we return this value. If several 
			 * text fields are selected, but all the text alignment values 
			 * are not equal, we return 'undefined'.  Selected objects that 
			 * are not text fields are ignored.  If the optional parameters 
			 * are not passed, the rules above apply to the the range of 
			 * text currently selected, or the whole text field if the text 
			 * is not currently being edited. If only startIndex is passed, 
			 * the property of the character to the right of the index is 
			 * returned (if all the selected text objects match values). If 
			 * startIndex and endIndex are passed, the value returned will 
			 * reflect the entire range of characters from startIndex up to 
			 * but not including endIndex.
			 * 
			 * RETURNS:
			 * see TextAttrs object for property names and return values 
			 * associated with them.
			 * @param {string} attrName Specifies the name of the TextAttrs 
			 * property to be returned. 
			 * @param {number} startIndex Index of first character.
			 * @param {number} endIndex Index of last character.
			 */
			public getElementTextAttr(attrName: string, startIndex: number, endIndex: number): any;
			/** Return the array of filter objects. */
			public getFilters(): any[];
			/** Returns metadata xml as a string, takes no parameters. */
			public getMetadata(): string;
			/** Returns the mobile settings xml. */
			public getMobileSettings(): string;
			/**
			 * Returns the player version as a string, takes no parameters. 
			 * The string returned for Flash Player will be one of the 
			 * following: "1","2","3"..."9". The string returned returned 
			 * for Flash Lite will be one of the following: "FlashLite", 
			 * "FlashLite11", "FlashLite20"...
			 */
			public getPlayerVersion(): string;
			/**
			 * Gets the bounding rectangle of the current selection. If a 
			 * selection is non-rectangular, the smallest rectangle 
			 * encomposing the entire selection is returned. 
			 * 
			 * RETURNS: Return value is the bounding rectangle of the 
			 * current selection, 0 if nothing is selected
			 */
			public getSelectionRect(): any;
			/**
			 * return the size report XML of the document.  Note that a 
			 * blank string is returned if fl.publishSizeReportXMLEnabled 
			 * is false or the checkbox "Generate size report" in Publish 
			 * Settings dialog is unchecked.
			 */
			public getSizeReportXML(): string;
			/**
			 * Returns the full path to the SWF file that is set in the 
			 * current Publish Profile.
			 */
			public getSWFPathFromProfile(): string;
			/**
			 * Gets the currently selected text. If the optional parameters 
			 * are not passed, the current text selection is used.  If  
			 * text isn't currently opened for editing the whole text 
			 * string will be returned. If only startIndex is passed, the 
			 * string starting at index and ending at the end of the field 
			 * will be returned. If startIndex and endIndex are passed, the 
			 * string starting from startIndex up to but not including 
			 * endIndex will be returned.
			 * 
			 * RETURNS: 
			 * string that contains text
			 * 
			 * 
			 * If there are several text fields selected, we return the 
			 * concatenation of all the strings.
			 * @param {number} startIndex Index of first character to get.
			 * @param {number} endIndex Index of last character to get.
			 */
			public getTextString(startIndex: number, endIndex: number): string;
			/**
			 * Returns the timeline which is currently being edited in the 
			 * document.
			 */
			public getTimeline(): Adobe.Flashpro.Timeline;
			/**
			 * Gets the location of the transformation point of the current 
			 * selection.
			 */
			public getTransformationPoint(): any;
			/** Converts the current selection to a group. */
			public group(): void;
			/**
			 * importFile( string [,boolean])
			 * 
			 * Import the specified file into the current Flash document. 
			 * The optional second parameter, when set to true, imports the 
			 * specified file to the current document's Library.
			 * @param {string} fileURI The argument is the file you are 
			 * importing, expressed as a file:// URL.
			 * @param {boolean} importToLibrary When true, the specified 
			 * file is imported to the current document's Library.
			 * @param {boolean} showDialog document.importFile(fileURI [, 
			 * importToLibrary] [, showDialog])
			 */
			public importFile(fileURI: string, importToLibrary: boolean, showDialog: boolean): void;
			/**
			 * Import a profile from file.
			 * RETURNS: index of the imported profile in the profiles list; 
			 * returns -1 if profile couldn't be imported
			 * @param {string} fileURI_ fileURI (not optional): path of the 
			 * XML file defining the profile to import
			 */
			public importPublishProfile(fileURI_: string): number;
			/**
			 * Given a string containing XML data, it imports the 
			 * publishing profile contained in the XML data.
			 * @param {string} xml 
			 */
			public importPublishProfileString(xml: string): boolean;
			/**
			 * Imports a SWF into the document. The same as going to the 
			 * Import menu option and selecting a swf.
			 * @param {string} fileURI Specifies the URI for the swf to 
			 * import.
			 */
			public importSWF(fileURI: string): void;
			/**
			 * Create a intersection Drawing Object from all selected 
			 * Drawing Objects
			 */
			public intersect(): boolean;
			/**
			 * checks if a document has been modified since it has been 
			 * opened
			 */
			public isModified(): boolean;
			/**
			 * Makes the size of the selected objects the same
			 * @param {boolean} bWidth If bWidth is true, the Width of the 
			 * selected items will be made the same.
			 * @param {boolean} bHeight If bHeight is true, the height of 
			 * the selected items will be made the same.
			 * @param {boolean} bUseDocumentBounds if useDocumentBounds is 
			 * true match the size of the objects to the bounds of the 
			 * document, otherwise use the bounds of the largest object.  
			 * Defaults to false.
			 */
			public match(bWidth: boolean, bHeight: boolean, bUseDocumentBounds: boolean): void;
			/**
			 * effectively do a mouse click from the Arrow tool.
			 * NOTE: Repeating mouseClk via HP or menu item repeats the 
			 * step previous to mouseClk
			 * @param {any} position the x,y location of the click in 
			 * pixels.
			 * @param {boolean} bToggleSel The shift key state.  true for 
			 * pressed, false for unpressed.
			 * @param {boolean} bShiftSel The state of the app preference 
			 * "Shift Select"
			 */
			public mouseClick(position: any, bToggleSel: boolean, bShiftSel: boolean): void;
			/**
			 * make double clicking in the arrow tool repeatable.
			 * NOTE: Repeating mouseDblClk via HP or menu item repeats the 
			 * step previous to mouseDblClk
			 * @param {any} position the x,y location of the cursor in 
			 * pixels.
			 * @param {boolean} bAltDown record whether the alt key was 
			 * down at the time of the event.
			 * @param {boolean} bShiftDown record whether the shift key was 
			 * down when the event occurred.
			 * @param {boolean} bShiftSelect This indicates the shiftSelect 
			 * app preference setting.
			 */
			public mouseDblClk(position: any, bAltDown: boolean, bShiftDown: boolean, bShiftSelect: boolean): void;
			/**
			 * If the selection contains at least one path with at least 
			 * one Bezier point selected,
			 * this function moves all selected Bezier points on all 
			 * selected paths by the
			 * specified amount.
			 * @param {any} delta The argument is a point that specifies 
			 * the x,y coordinate values by which the
			 */
			public moveSelectedBezierPointsBy(delta: any): void;
			/**
			 * Move selected objects to specified point x, y.
			 * 
			 * NOTE: When using arrow keys to move item, HP should combine 
			 * all presses of the arrow key as one move step.
			 * @param {any} distanceToMove A point that specifies the x,y 
			 * coordinate values by which
			 */
			public moveSelectionBy(distanceToMove: any): void;
			/**
			 * Opimizes the current selection, uses multiple passes for 
			 * optimal smoothing.
			 * @param {number} smoothing Smoothing is specified from 0 to 
			 * 100, 0 being no smoothing, 100 maximum smoothing.
			 * @param {boolean} bUseMultiplePasses Boolean to indicate if 
			 * muliple passes should be used.
			 */
			public optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void;
			/** Paste the stored filter list to the selected objects */
			public pasteFilters(): void;
			/**
			 * Publish the document according to the active publish profile 
			 * settings. Same action as the UI menu item.
			 */
			public publish(): void;
			/**
			 * Use top selected Drawing Object to punch through all 
			 * selected Drawing Objects underneath it
			 */
			public punch(): boolean;
			/** remove all the filters on the selected object. */
			public removeAllFilters(): void;
			/**
			 * Remove any persistent data that has been attached to the 
			 * document with the specified name.
			 * @param {string} name the name of the data to remove.
			 */
			public removeDataFromDocument(name: string): void;
			/**
			 * Remove any persistent data that has been attached to the 
			 * selected objects with the specified name.
			 * @param {string} name the name of the data to remove.
			 */
			public removeDataFromSelection(name: string): void;
			/**
			 * Remove the filter at the specified index in the filter list 
			 * of the selected objects.
			 * @param {number} index Index of the filter in the filter list
			 */
			public removeFilter(index: number): void;
			/**
			 * Rename the profile currently active.
			 * RETURNS: true if name changed, false otherwise.
			 * @param {string} profileNewName profileNewName: new name for 
			 * the profile (unique name needed). If the name is not 
			 * specified, a default name will be provided.
			 */
			public renamePublishProfile(profileNewName: string): boolean;
			/**
			 * Renames the currently selected scene in the scenes panel. 
			 * The new name for the selected scene needs to be unique, not 
			 * already used by another scene. If the new name is already 
			 * used, this function returns false.
			 * 
			 * RETURNS: true if names was sucessfully changed, otherwise 
			 * false.
			 * @param {string} name The new name of the scene.
			 */
			public renameScene(name: string): boolean;
			/**
			 * Moves the specified scene before another specified scene.
			 * @param {number} sceneToMove The first argument is a 
			 * zero-based integer that specifies which scene to
			 * @param {number} sceneToPutItBefore The second argument is a 
			 * zero-based integer that specifies which scene you
			 */
			public reorderScene(sceneToMove: number, sceneToPutItBefore: number): void;
			/**
			 * resets the startAngle, endAngle, and centerRadius values. in 
			 * the PI and on selected objects
			 */
			public resetOvalObject(): void;
			/**
			 * resets the cornerRadius values in the PI and on selected 
			 * objects
			 */
			public resetRectangleObject(): void;
			/** resets the matrix for the current selection */
			public resetTransformation(): void;
			/**
			 * Reverts the specified document to its previously saved 
			 * version. Behaves exactly like the menu option.
			 */
			public revert(): void;
			/**
			 * Added to support revert to last version of active document 
			 * with version cue. Noting happens if revert operation can't 
			 * be done.
			 * 
			 * Also log any kind of version cue error to the output panel.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened.
			 * 
			 * For authentication failure from a server whose credentials 
			 * are not cached, currently we log the authentication failure 
			 * error to the output panel. In such a case users can just 
			 * visit the version cue workspace using open dialog and passed 
			 * the necessary credentials. Version cue has key chain 
			 * mechanism for authentication, so the credentials are stored 
			 * and then subsequent java script execution would be 
			 * successful.
			 */
			public revertToLastVersion(): boolean;
			/**
			 * 3D global and local rotation of selected MovieClip
			 * @param {any} XYZ_Rotation XYZ Coordinate for the Rotation
			 * @param {boolean} transform_Mode If set to true -> Global 
			 * transform mode
			 */
			public rotate3DSelection(XYZ_Rotation: any, transform_Mode: boolean): void;
			/**
			 * Rotates the selection by a specified amount. The effect is 
			 * the
			 * same as performing a Rotation operation within Flash, and 
			 * then replaying
			 * the Transform step from the History panel while other items 
			 * are selected.
			 * @param {number} angle Specifies the angle of the rotation.
			 * @param {string} rotationPoint Specifies which side of the 
			 * bounding box to rotate acceptable values are: "top right", 
			 * "top left", "bottom right", "bottom left".  If unspecified, 
			 * the transformation point is used.
			 */
			public rotateSelection(angle: number, rotationPoint: string): void;
			/**
			 * Saves the document in its default location. After a 
			 * successful Save operation, the document's
			 * isDirty property clears.
			 * 
			 * RETURNS: true if the Save operation completes successfully; 
			 * false otherwise.
			 * @param {boolean} bOkToSaveAs If bOkToSaveAs is true and the 
			 * file was never saved, then the Save As dialog box
			 */
			public save(bOkToSaveAs: boolean): boolean;
			/**
			 * Saves and Compacts the file, same as using the File > Save 
			 * and compact menu item.
			 * 
			 * RETURNS: true if the "Save and Compact" operation completes 
			 * successfully; false otherwise.
			 * @param {boolean} bOkToSaveAs If bOkToSaveAs is true or 
			 * omitted and the file was never saved, then the Save As 
			 * dialog box appears. If bOkToSaveAs is false and the file was 
			 * never saved, the file is not saved.
			 */
			public saveAndCompact(bOkToSaveAs: boolean): boolean;
			/**
			 * A way to save a new FLA based on the existing document 
			 * object, with an option to just save the current selection on 
			 * stage.
			 * @param {string} uri a file URI for the output FLA document 
			 * (or an uncompressed XFL document)
			 * @param {boolean} selectionOnly a flag indicating if only the 
			 * current stage selection should be saved to the new document
			 */
			public saveAsCopy(uri: string, selectionOnly: boolean): boolean;
			/**
			 * If a version can be saved for the document then saves a 
			 * version for it. Otherwise this method does nothing. Prompt 
			 * UI for version comment dialog.
			 * 
			 * Returns true if new version is successfully saved otherwise 
			 * returns false. Also log any kind of version cue error to 
			 * output panel.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened.
			 * 
			 * For authentication failure from a server whose credentials 
			 * are not cached, currently we log the authentication failure 
			 * error to the output panel. In such a case users can just 
			 * visit the version cue workspace using open dialog and passed 
			 * the necessary credentials. Version cue has key chain 
			 * mechanism for authentication, so the credentials are stored 
			 * and then subsequent java script execution would be 
			 * successful.
			 */
			public saveAVersion(): boolean;
			/**
			 * Scales the selection by a specified amount. The effect is 
			 * the
			 * same as performing a scale operation within Flash, and then 
			 * replaying
			 * the Transform step from the History panel while other items 
			 * are selected.
			 * @param {number} xScale The amount of x to scale by.
			 * @param {number} yScale The amount of y to scale by.
			 * @param {string} whichCorner Specifies the edge about which 
			 * the transformation occurs. If omitted scale occurs about the 
			 * transformation point. Acceptable values are: "bottom left", 
			 * "bottom right", "top right", "top left", "top center", 
			 * "right center", "bottom center", "left center".
			 */
			public scaleSelection(xScale: number, yScale: number, whichCorner: string): void;
			/** Selects all items in the current playhead */
			public selectAll(): void;
			/** Deselects any selected items. */
			public selectNone(): void;
			/**
			 * Sets the preference for align(), distribute(), match(), and 
			 * space() to work acting on the document. Identical to 
			 * enabling the toStage button in the align panel.
			 * @param {boolean} bToStage If set to TRUE aligns objects to 
			 * Stage, if FALSE it does not.
			 */
			public setAlignToDocument(bToStage: boolean): void;
			/**
			 * Set blend mode for the selected movieclip.
			 * Valid blend modes are: normal, layer, darken, multiply, 
			 * lighten, screen, overlay, hardlight, add, subtract, 
			 * difference, invert, alpha, and erase.
			 * @param {string} mode Valid blend modes are: normal, layer, 
			 * darken, multiply, lighten, screen, overlay, hardlight, add, 
			 * subtract, difference, invert, alpha, and erase. 
			 */
			public setBlendMode(mode: string): void;
			/**
			 * Sets the fill settings in the toolbar. This allows for a 
			 * script to set the fill settings before drawing the object. 
			 * Rather than having to draw the object, then select it and 
			 * change the fill settings. It also allows a script to change 
			 * the toolbar fill settings.
			 * @param {any} fill sets the fill color object. 
			 */
			public setCustomFill(fill: any): void;
			/**
			 * Sets the stroke settings in the toolbar. This allows for a 
			 * script to set the stroke settings before drawing the object. 
			 * Rather than having to draw the object, then select it and 
			 * change the stroke settings. It also allows a script to 
			 * change the toolbar stroke settings.
			 * @param {any} stroke The stroke object. 
			 */
			public setCustomStroke(stroke: any): void;
			/**
			 * sets or unsets the "Permit Debugging" checkbox in the 
			 * Publish Settings dialog.
			 * @param {boolean} value true to check the checkbox, false to 
			 * uncheck the checkbox
			 * @param {boolean} modifyDocument true to set the modified 
			 * flag on the document, which allows the setting to be saved
			 */
			public setDebugForSwf(value: boolean, modifyDocument: boolean): void;
			/**
			 * setElementProperty on selected object(s) in the document.
			 * @param {string} property For a complete list of property and 
			 * values, see the Element Object under Timeline.  This setting 
			 * does not apply to readonly properties such as elementType, 
			 * top, and left
			 * @param {any} value For a complete list of property and 
			 * values, see the Element Object 
			 */
			public setElementProperty(property: string, value: any): void;
			/**
			 * Sets the specified property of the selected text items to 
			 * the specified setting. If the optional parameters are not 
			 * passed, we set the style of the currently selected text 
			 * range, or the whole text field if no text is selected. If 
			 * only startIndex is passed, we set that character's 
			 * attributes . If startIndex and endIndex are passed, we set 
			 * the attributes on the characters starting from startIndex up 
			 * to but not including endIndex.  If paragraph styles are 
			 * specified all the paragraphs that fall within the range will 
			 * be affected.
			 * 
			 * RETURNS: 
			 * 
			 * 
			 * Returns true if at least one textAttr property was changed, 
			 * false otherwise.
			 * @param {string} attrName Specifies the name of the TextAttrs 
			 * property to be changed.
			 * @param {any} attrValue The value to set the textAttrs 
			 * property to.  Refer to the TextAttrs object for the list of 
			 * property name and values expected.
			 * @param {number} startIndex Index of first character.
			 * @param {number} endIndex Index of last character.
			 */
			public setElementTextAttr(attrName: string, attrValue: any, startIndex: number, endIndex: number): boolean;
			/**
			 * This method is used internally by diesel to store the AME 
			 * preset list asuming that Adobe Media Encoder has been launch 
			 * by the user.
			 */
			public setEncoderPresetList(): void;
			/**
			 * Changes the fill color of the selection to the specified 
			 * color.
			 * @param {string} color The argument is a color string in 
			 * hexadecimal #rrggbb format or an integer containg the value. 
			 * If set to null, no fill color is set. This is the same thing 
			 * as setting the Fill color swatch to "no fill".
			 */
			public setFillColor(color: string): void;
			/**
			 * Set graphic filter property on the selected objects. 
			 * Flash 8: the following properties can be set using this 
			 * method: blurX (History caption: Filter BlurX), blurY (Filter 
			 * BlurY), quality (Filter Quality), angle (Filter Angle), 
			 * distance (Filter Distance), strength (Filter Strength), 
			 * knockout (Filter Knockout), inner (Filter Inner), bevelType 
			 * (Filter BevelType), color (Filter Color), shadowColor 
			 * (Effect Shadow Color), highlightColor (Filter Highlight 
			 * Color) 
			 * 
			 * 
			 * 
			 * The type of Filter is accessed via the index in filters.
			 * @param {string} property The following properties can be set 
			 * using this method: blurX, blurY, quality, angle, distance, 
			 * strength, knockout, inner, bevelType, color, shadowColor, 
			 * highlightColor
			 * @param {number} index Index of the filter in the filters 
			 * array. 
			 * @param {any} value the value's type depends on which filter 
			 * property, see the invidual filter objects for more 
			 * information.
			 */
			public setFilterProperty(property: string, index: number, value: any): void;
			/**
			 * Set the array of filter objects to the selection.
			 * @param {any} filters array of filter objects
			 */
			public setFilters(filters: any): boolean;
			/**
			 * Sets the opacity of the instance
			 * @param {number} opacity The opacity argument is an integer 
			 * between 0 (transparent) and 100 (completely saturated) that 
			 * adjusts the transparency of the instance.
			 */
			public setInstanceAlpha(opacity: number): void;
			/**
			 * Sets the brightness for the instance
			 * @param {number} brightness The argument is specified as a 
			 * value from -100 to 100
			 */
			public setInstanceBrightness(brightness: number): void;
			/**
			 * Sets the tint for the selected instance
			 * @param {string} color The color of the tint.
			 * @param {number} strength The amount of the tint specified by 
			 * an interger between 0-100.
			 */
			public setInstanceTint(color: string, strength: number): void;
			/**
			 * Takes string argument of xml metadata, replaces current 
			 * metadata string with this xml.  First parses XML to ensure 
			 * it is valid XML and follows our rules (correct tags, 
			 * namespaces, etc, see spec for more details), if does not 
			 * follow rules returns false and no transaction recorded, if 
			 * returns true transaction pushed on undo stack, document 
			 * dirtied.
			 * @param {string} xml metadata xml to replace any current 
			 * metadata xml
			 */
			public setMetadata(xml: string): boolean;
			/**
			 * Takes string argument of mobile settings xml, replaces 
			 * current mobile settings string with this xml.
			 * @param {string} xml Mobile settings XML data.
			 */
			public setMobileSettings(xml: string): boolean;
			/**
			 * Sets the properties of the oval primitive
			 * @param {string} propertyName A string that specifies the 
			 * property to be set.  Acceptable values are specified in the 
			 * Shape properties, they are: "startAngle", "endAngle", 
			 * "innerRadius", and "closePath".
			 * @param {any} value The value to be assigned to the property. 
			 * Acceptable values vary depending on the property you specify 
			 * in propertyName.
			 */
			public setOvalObjectProperty(propertyName: string, value: any): void;
			/**
			 * Takes string argument representing Flash player version, 
			 * replaces current player version. If the string is not a 
			 * valid version, then it returns false and player verion is 
			 * not changed. Valid player version strings are internal IDs 
			 * that correspond to the Version drop down list of the Publish 
			 * Settings dialog. For Flash Player versions, use the 
			 * following strings: "1","2","3"..."9". For Flash Lite, use 
			 * the following codes: "FlashLite", "FlashLite11", 
			 * "FlashLite20" ...
			 * @param {string} version String representing player version. 
			 * Valid version strings appear in the Publish Settings 
			 * dialog's Version drop down list.
			 */
			public setPlayerVersion(version: string): boolean;
			/**
			 * Sets the property values for rectangle primitives.
			 * @param {string} propertyName A string that specifies the 
			 * property to be set. Acceptable values are specified in the 
			 * Shape properties, they are: "topLeftRadius", 
			 * "bottomLeftRadius", "topRightRadius", "bottomRightRadius", 
			 * and "lockFlag"
			 * @param {any} value The value to be assigned to the property. 
			 * Acceptable values vary depending on the property you specify 
			 * in propertyName
			 */
			public setRectangleObjectProperty(propertyName: string, value: any): void;
			/**
			 * Moves and resizes the selection in a single operation.
			 * @param {any} boundingRectangle A rectangle that specifies 
			 * the new location and size of the selection 
			 * @param {boolean} bContactSelective Optional param that sets 
			 * the Contact Selective preference for this specific call. The 
			 * scope of the selection is limited to the function call. 
			 * (i.e. calling a function with either a true or false param 
			 * wouldnt affect the applications global "Contact Selective" 
			 * preference (Edit->Preferences))
			 */
			public setSelectionBounds(boundingRectangle: any, bContactSelective: boolean): void;
			/**
			 * Sets the selection to the rectangle. Equivalent to dragging 
			 * out a rectangle with the arrow tool. An instance must be 
			 * fully enclosed by the rect to become selected.
			 * NOTE: Repeating setSelectionRect via HP or menu item repeats 
			 * the step previous to setSelectionRect
			 * @param {any} rect Rectangle to set as selected.
			 * @param {boolean} bReplaceCurrentSelection 
			 * bReplaceCurrentSelection if TRUE, replaces the current 
			 * selection, if FALSE adds to the current selection. If not 
			 * set it defaults to true.
			 * @param {boolean} bContactSelective Optional param that sets 
			 * the Contact Selective preference for this specific call. The 
			 * scope of the selection is limited to the function call. 
			 * (i.e. calling a function with either a true or flase param 
			 * wouldnt affect the applications global "Contact Selective" 
			 * preference (Edit->Preferences))
			 */
			public setSelectionRect(rect: any, bReplaceCurrentSelection: boolean, bContactSelective: boolean): void;
			/**
			 * This will set the stage Vanishing point x and y values.
			 * @param {any} Vanish_Point X and Y coordinate of the new 
			 * vanish point
			 */
			public setStageVanishingPoint(Vanish_Point: any): void;
			/**
			 * This will set the stage perspective angle.
			 * @param {number} Angle stage perspective angle
			 */
			public setStageViewAngle(Angle: number): void;
			/**
			 * set the color, width, and style of the selected strokes.
			 * @param {string} color the color to set the stroke.
			 * @param {number} size Changes the stroke size of the 
			 * selection to the specified size.
			 * @param {string} stroke stroke has acceptable values of 
			 * "hairline", "solid," "dashed," "dotted," "ragged," 
			 * "stipple," "hatched".
			 */
			public setStroke(color: string, size: number, stroke: string): void;
			/**
			 * Changes the stroke color of the selection to the specified 
			 * color.
			 * @param {string} color The argument is a color string in 
			 * hexadecimal #rrggbb format or an integer containg the value. 
			 * If set to null, no color is set. This is the same thing as 
			 * setting the Stroke color swatch to "no Stroke".
			 */
			public setStrokeColor(color: string): string;
			/**
			 * Changes the stroke size of the selection to the specified 
			 * size.
			 * @param {number} size The argument is a double from 0.25 to 
			 * 10 specifying the size.
			 */
			public setStrokeSize(size: number): void;
			/**
			 * Sets the stroke for the current selection.
			 * @param {string} stroke stroke has acceptable values of 
			 * "hairline", "solid," "dashed," "dotted," "ragged," 
			 * "stipple," "hatched".
			 */
			public setStrokeStyle(stroke: string): void;
			/**
			 * This function is called with xml string from kuler swf 
			 * (kuler panel) to add color palette selected in kuler swf to 
			 * Flash swatch panel.
			 * @param {string} encryptedXMLString Valid xml containing 
			 * description of the colors in the set to add. Warning: This 
			 * is an encrypted string. We are not exposing the ability to 
			 * use this method with decrypted strings.
			 */
			public setSwatchKulerTheme(encryptedXMLString: string): boolean;
			/**
			 * Changes the bounding rectangle for the selected text item to 
			 * the specified size.
			 * This function causes the text to reflow inside the new 
			 * rectangle; the text item
			 * is not scaled or transformed. If the text is horizontal and 
			 * static, we only take into account the width of the rect (the 
			 * height is automatically computed to fit all the text). If 
			 * the text is vertical, we only take into account the height 
			 * of the rect (the width is automatically computed to fit all 
			 * the text). If the text is dynamic or input, we take into 
			 * account width and height of rect but the text field will be 
			 * constrained to fit all the text.
			 * 
			 * RETURNS: 
			 * bSuccess
			 * 
			 * 
			 * Returns true if at least the size of one text field was 
			 * changed, false otherwise.
			 * @param {any} boundingRectangle The argument is a rectangle 
			 * that specifies the new size within which the text item
			 */
			public setTextRectangle(boundingRectangle: any): boolean;
			/**
			 * Sets the text selection of the currently selected text field 
			 * to startIndex, endIndex.  Text editing will be activated if 
			 * it isn't already.
			 * @param {number} startIndex Index of first character to 
			 * select
			 * @param {number} endIndex select a text starts from 
			 * startIndex up to but not including endIndex
			 */
			public setTextSelection(startIndex: number, endIndex: number): boolean;
			/**
			 * Inserts a string of text. If the optional parameters are not 
			 * passed, the existing text selection is replaced, if the text 
			 * object isn't currently being edited the whole text string 
			 * will be replaced. If only startIndex is passed, the string 
			 * passed will be inserted at this position. If startIndex and 
			 * endIndex are passed, the string passed will replace the 
			 * segment of text starting from startIndex up to but not 
			 * including endIndex.
			 * 
			 * RETURNS: 
			 * 
			 * bSuccess
			 * 
			 * 
			 * Returns true if at least the string of one text field was 
			 * set, false otherwise.
			 * @param {string} text The argument is a string consisting of 
			 * the characters to be inserted in the text field.
			 * @param {number} startIndex Index of first character to 
			 * replace
			 * @param {number} endIndex Index of last character to replace
			 */
			public setTextString(text: string, startIndex: number, endIndex: number): boolean;
			/**
			 * Moves the transformation point of the current selection.
			 * @param {any} transformationPoint Shapes: 
			 */
			public setTransformationPoint(transformationPoint: any): void;
			/**
			 * if the document is in a Project, use the symbol path passed 
			 * in to share the symbol with the project.
			 * @param {string} pathToSymbol a path to a symbol in the 
			 * library that will be shared with the documents in the 
			 * project
			 */
			public shareAsset(pathToSymbol: string): boolean;
			/**
			 * This method will show any potential AME error to the user 
			 * inside diesel.
			 */
			public showEncoderError(): void;
			/**
			 * Skews the selection by a specified amount. The effect is 
			 * the
			 * same as performing a skew operation within Flash, and then 
			 * replaying
			 * the Transform step from the History panel while other items 
			 * are selected.
			 * @param {number} xSkew The first argument is the amount of x 
			 * to skew by measured in degrees.
			 * @param {number} ySkew The second argument is the amount of y 
			 * to skew by.  Measured in degrees.
			 * @param {string} whichEdge Specifies the edge about which the 
			 * transformation occurs, if omitted skew occurs about the 
			 * transformation point. Acceptable values are: "top center", 
			 * "right center", "bottom center", "left center".
			 */
			public skewSelection(xSkew: number, ySkew: number, whichEdge: string): void;
			/**
			 * smooth the curve of each selected fill outline or curved 
			 * line
			 */
			public smoothSelection(): void;
			/**
			 * When selecting Modify > Shape > Smooth...
			 * The current document.smoothSelectionFromMenu() will gain 
			 * three parameters which match the variables to be set in the 
			 * UI.
			 * @param {number} rate A uint betweeen 0 and 100. 0 is no 
			 * smoothing, 100 is the maximum amount of smoothing we can 
			 * perform in one operation. 
			 * @param {number} min A value between 0 and 180. Either min or 
			 * max must be set for smoothing to be attempted, otherwise, 
			 * smoothing will silently fail. A value of -1 means no 
			 * smoothing min is set.
			 * @param {number} max A value between 0 and 180. Either min or 
			 * max must be set for smoothing to be attempted, otherwise, 
			 * smoothing will silently fail. A value of -1 means no 
			 * smoothing max is set.
			 */
			public smoothSelectionFromMenu(rate: number, min: number, max: number): void;
			/**
			 * Spaces the objects in the selection evenly.
			 * @param {string} direction Acceptable values for direction 
			 * are: "horizontal" or "vertical"
			 * @param {boolean} bUseDocumentBounds If useDocumentBounds is 
			 * true space the objects to the document bounds, otherwise 
			 * uses the bounds of the selected objects.  Defaults to false.
			 */
			public space(direction: string, bUseDocumentBounds: boolean): void;
			/** Straighten the current selection */
			public straightenSelection(): void;
			/**
			 * Modify > Shape > Straighten...
			 * The current document.straightenSelectionFromMenu() will gain 
			 * one parameter which matches the variable to be set in the 
			 * UI.
			 * @param {number} rate A uint betweeen 0 and 100. 0 is no 
			 * straightening, 100 is the maximum amount of straightening we 
			 * can perform in one operation.
			 */
			public straightenSelectionFromMenu(rate: number): void;
			/**
			 * Swaps the current selection with the specified one. The 
			 * selection must contain a graphic, button, movie clip, video 
			 * or bitmap.
			 * @param {string} name The name of the library item to use.
			 */
			public swapElement(name: string): void;
			/** swaps the Stroke and Fill colors. */
			public swapStrokeAndFill(): void;
			/**
			 * Added to support synchronize of active document with version 
			 * cue. Prompt UI like version comment dialog or conflict 
			 * alert. After sync the local copy of the document will be in 
			 * sync with its copy on the version cue server.
			 * 
			 * During Script Execution, version cue suppressed any idle 
			 * loop UI and execution of script continues regardless of any 
			 * version cue related errors. The version cue errors are 
			 * logged to output panel and script execution continues. In 
			 * addition, downloading of the assets from the server is 
			 * suppressed during script Execution. So it mean while opening 
			 * a flash file, download takes place only if its local replica 
			 * copy does not exist otherwise the out to date on the file 
			 * system is opened.
			 * 
			 * For authentication failure from a server whose credentials 
			 * are not cached, currently we log the authentication failure 
			 * error to the output panel. In such a case users can just 
			 * visit the version cue workspace using open dialog and passed 
			 * the necessary credentials. Version cue has key chain 
			 * mechanism for authentication, so the credentials are stored 
			 * and then subsequent java script execution would be 
			 * successful.
			 */
			public synchronizeWithHeadVersion(): boolean;
			/** Execute a Test Movie operation on the document. */
			public testMovie(): void;
			/**
			 * Execute a Test Scene operation on the current scene of the 
			 * document.
			 */
			public testScene(): void;
			/**
			 * Performs a trace bitmap on the current selection.
			 * @param {number} threshold The threshold argument controls 
			 * the number of colors in your traced bitmap. Accpetable 
			 * values are integers between 0-500.
			 * @param {number} minimumArea The minimumArea argument is the 
			 * radius measured in pixels. Acceptable values are integers 
			 * between 1-1000.
			 * @param {any} curveFit The curveFit argument determines how 
			 * smoothly outlines are drawn. Acceptable values are: 
			 * "pixels", "very tight", "tight", "normal", "smooth", "very 
			 * smooth"
			 * @param {any} cornerThreshold The cornerThreshold argument is 
			 * similiar to curveFit, but it pertains to the corners of the 
			 * bitmap image. Acceptable values are: "many corners", 
			 * "normal", "few corners"
			 */
			public traceBitmap(threshold: number, minimumArea: number, curveFit: any, cornerThreshold: any): void;
			/**
			 * perform a general transformation on the current selection by 
			 * applying the matrix specified in the arguments. See 
			 * element.matrix property for more information
			 * @param {number} a the (0,0) element of the transformation 
			 * matrix.
			 * @param {number} b the (0,1) element in the matrix
			 * @param {number} c the (1,0) element in the matrix.
			 * @param {number} d the (1,1) element in the matrix
			 */
			public transformSelection(a: number, b: number, c: number, d: number): void;
			/**
			 * This will move the center point of 3D Rotation.
			 * @param {any} XYZ_Point Translation point.
			 */
			public translate3DCenter(XYZ_Point: any): void;
			/**
			 * XYZ translation of the selected MovieClip
			 * @param {any} XYZ_Translation XYZ Coordinate for the 
			 * Translation
			 * @param {boolean} Transform_Mode If set to true -> Global 
			 * transform mode
			 */
			public translate3DSelection(XYZ_Translation: any, Transform_Mode: boolean): void;
			/** Ungroups the current selection. */
			public unGroup(): void;
			/** Combine all selected shapes into a Drawing Object */
			public union(): boolean;
			/** Unlocks all locked objects on the currently displayed frame */
			public unlockAllElements(): void;
			/**
			 * Posts a XMLUI dialog.  The object returned has properties 
			 * defined for all controls defined in the xml file.  All 
			 * properties are returned as strings.
			 * The returned object will have one predefined property named 
			 * "dismiss" that will have the string value "accept" or 
			 * "cancel".
			 * @param {string} fileURI A URI specifying the xml file 
			 * defining the controls in the panel. Need to use the full 
			 * path name.   
			 */
			public xmlPanel(fileURI: string): any;
		}
	}
}