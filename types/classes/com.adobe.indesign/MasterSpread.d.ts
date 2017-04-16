/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MasterSpread extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all graphics contained by the MasterSpread.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * Lists all page items contained by the MasterSpread.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * The master spread applied to the MasterSpread. Can also 
			 * accept: NothingEnum enumerator.
			 * @type {Adobe.Indesign.MasterSpread}
			 */
			public appliedMaster: Adobe.Indesign.MasterSpread;
			/**
			 * The name of the master spread.
			 * @type {string}
			 */
			public baseName: string;
			/**
			 * A collection of buttons.
			 * @type {Adobe.Indesign.Buttons}
			 * @readonly
			 */
			public readonly buttons: Adobe.Indesign.Buttons;
			/**
			 * A collection of checkboxes.
			 * @type {Adobe.Indesign.CheckBoxes}
			 * @readonly
			 */
			public readonly checkBoxes: Adobe.Indesign.CheckBoxes;
			/**
			 * A collection of comboboxes.
			 * @type {Adobe.Indesign.ComboBoxes}
			 * @readonly
			 */
			public readonly comboBoxes: Adobe.Indesign.ComboBoxes;
			/**
			 * EPSTexts
			 * @type {Adobe.Indesign.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * A collection of form fields.
			 * @type {Adobe.Indesign.FormFields}
			 * @readonly
			 */
			public readonly formFields: Adobe.Indesign.FormFields;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Indesign.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * A collection of groups.
			 * @type {Adobe.Indesign.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Indesign.Groups;
			/**
			 * A collection of guides.
			 * @type {Adobe.Indesign.Guides}
			 * @readonly
			 */
			public readonly guides: Adobe.Indesign.Guides;
			/**
			 * The unique ID of the MasterSpread.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The IDML component name of the MasterSpread.
			 * @type {string}
			 */
			public idmlComponentName: string;
			/**
			 * The index of the MasterSpread within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Indesign.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Indesign.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/**
			 * The name of the MasterSpread.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The prefix of the master spread name.
			 * @type {string}
			 */
			public namePrefix: string;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Indesign.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The color label of the MasterSpread, specified either as  an 
			 * array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator or 
			 * PageColorOptions enumerator.
			 * @type {any}
			 */
			public pageColor: any;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Indesign.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * A collection of pages.
			 * @type {Adobe.Indesign.Pages}
			 * @readonly
			 */
			public readonly pages: Adobe.Indesign.Pages;
			/**
			 * The parent of the MasterSpread (a Document).
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Indesign.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * The primary text frame through which text flows on the 
			 * MasterSpread. Must be a text frame or a type on a path 
			 * spline. Can also accept: NothingEnum enumerator.
			 * @type {Adobe.Indesign.PageItem}
			 */
			public primaryTextFrame: Adobe.Indesign.PageItem;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radio buttons.
			 * @type {Adobe.Indesign.RadioButtons}
			 * @readonly
			 */
			public readonly radioButtons: Adobe.Indesign.RadioButtons;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Indesign.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/**
			 * If true, displays master page items on document pages in the 
			 * spread.
			 * @type {boolean}
			 */
			public showMasterItems: boolean;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Indesign.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * A collection of text boxes.
			 * @type {Adobe.Indesign.TextBoxes}
			 * @readonly
			 */
			public readonly textBoxes: Adobe.Indesign.TextBoxes;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Indesign.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/**
			 * The object timing settings.
			 * @type {Adobe.Indesign.TimingSetting}
			 * @readonly
			 */
			public readonly timingSettings: Adobe.Indesign.TimingSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerMasterSpread(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicate an object and place it into the target.
			 * @param {any[]} pageItemsParam One or more page items to 
			 * place or load
			 * @param {boolean} linkPageItemsParam Whether to link 
			 * pageItems in content placer (if true it will override link 
			 * stories value) (Optional)
			 * @param {boolean} linkStoriesParam Whether to link stories in 
			 * content placer (only applicable for single story, pageItem 
			 * links will also be created in case of more than one item) 
			 * (Optional)
			 * @param {boolean} mapStylesParam Whether to map styles in 
			 * content placer (Optional)
			 * @param {any[]} placePointParam The point at which to place 
			 * (Optional)
			 * @param {Layer} destinationLayerParam The layer on which to 
			 * place (Optional)
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * link options dialog (Optional)
			 * @returns {any}
			 */
			public contentPlace(pageItemsParam: any[], linkPageItemsParam: boolean, linkStoriesParam: boolean, mapStylesParam: boolean, placePointParam: any[], destinationLayerParam: Layer, showingOptionsParam: boolean): any;
			/**
			 * Creates multiple guides on all pages of the spread.
			 * @param {number} numberOfRowsParam The number of rows to 
			 * create on each page. (Optional)
			 * @param {number} numberOfColumnsParam The number of columns 
			 * to create on each page.  (Optional)
			 * @param {any} rowGutterParam The height of the gutter between 
			 * rows. (Optional)
			 * @param {any} columnGutterParam The width of the gutter 
			 * between columns. (Optional)
			 * @param {any} guideColorParam The color to make the guides, 
			 * specified either as an array of three doubles, each in the 
			 * range 0 to 255 and representing R, G, and B values, or as a 
			 * UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors 
			 * enumerator. (Optional)
			 * @param {boolean} fitMarginsParam If true, the row height and 
			 * column width are calculated based on the space within the 
			 * page margins. If false, row height and column width are 
			 * calculated based on the full page. (Optional)
			 * @param {boolean} removeExistingParam If true, removes 
			 * existing guides when creating new ones. (Optional)
			 * @param {Layer} layerParam The layer on which to create the 
			 * guides. (Optional)
			 * @returns {void}
			 */
			public createGuides(numberOfRowsParam: number, numberOfColumnsParam: number, rowGutterParam: any, columnGutterParam: any, guideColorParam: any, fitMarginsParam: boolean, removeExistingParam: boolean, layerParam: Layer): void;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 * @returns {void}
			 */
			public detach(): void;
			/**
			 * Duplicates the spread.
			 * @param {LocationOptions} toParam The location of the spread 
			 * relative to the reference object or within the document. 
			 * (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required only when the to parameter specifies before or 
			 * after. Can accept: MasterSpread, Document or MasterSpread. 
			 * (Optional)
			 * @returns {any}
			 */
			public duplicate(toParam: LocationOptions, referenceParam: any): any;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Places the file.
			 * @param {File} fileNameParam The file to place
			 * @param {any[]} placePointParam The point at which to place 
			 * (Optional)
			 * @param {Layer} destinationLayerParam The layer on which to 
			 * place (Optional)
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {boolean} autoflowingParam Whether to autoflow placed 
			 * text (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 * @returns {any}
			 */
			public place(fileNameParam: File, placePointParam: any[], destinationLayerParam: Layer, showingOptionsParam: boolean, autoflowingParam: boolean, withPropertiesParam: any): any;
			/**
			 * Deprecated: Use contentPlace method. Original Description: 
			 * Create a linked story and place it into the target.
			 * @param {Story} parentStoryParam The story to place and link 
			 * from.
			 * @param {any[]} placePointParam The point at which to place 
			 * (Optional)
			 * @param {Layer} destinationLayerParam The layer on which to 
			 * place (Optional)
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * link options dialog (Optional)
			 * @returns {Adobe.Indesign.Story}
			 */
			public placeAndLink(parentStoryParam: Story, placePointParam: any[], destinationLayerParam: Layer, showingOptionsParam: boolean): Adobe.Indesign.Story;
			/**
			 * Deletes the MasterSpread.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerMasterSpread(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 * @returns {void}
			 */
			public removeOverride(): void;
			/**
			 * Get the coordinates of the given location in the specified 
			 * coordinate system.
			 * @param {any} locationParam The location requested. Can 
			 * accept: Array of 2 Reals, AnchorPoint enumerator or Array of 
			 * Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint 
			 * enumerators, BoundingBoxLimits enumerators or Long Integers.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use.
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 * @returns {any}
			 */
			public resolve(locationParam: any, inParam: CoordinateSpaces, consideringRulerUnitsParam: boolean): any;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the MasterSpread in relation to 
			 * previously selected objects. (Optional)
			 * @returns {void}
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Transform the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 * @param {any} fromParam The temporary origin during the 
			 * transformation. Can accept: Array of 2 Reals, AnchorPoint 
			 * enumerator or Array of Arrays of 2 Reals, CoordinateSpaces 
			 * enumerators, AnchorPoint enumerators, BoundingBoxLimits 
			 * enumerators or Long Integers.
			 * @param {any} withMatrixParam Transform matrix. Can accept: 
			 * Array of 6 Reals or TransformationMatrix.
			 * @param {any} replacingCurrentParam Transform components to 
			 * consider; providing this optional parameter causes the 
			 * target's existing transform components to be replaced with 
			 * new values.  Without this parameter, the given matrix is 
			 * concatenated onto the target's existing transform combining 
			 * the effect of the two. Can accept: MatrixContent enumerator, 
			 * Array of MatrixContent enumerators or Long Integer. 
			 * (Optional)
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler based origin is interpreted using ruler units rather 
			 * than points. The default value is false. This parameter has 
			 * no effect unless the reference point is specified relative 
			 * to a page. (Optional)
			 * @returns {void}
			 */
			public transform(inParam: CoordinateSpaces, fromParam: any, withMatrixParam: any, replacingCurrentParam: any, consideringRulerUnitsParam: boolean): void;
			/**
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 * @returns {any}
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
		}
	}
}