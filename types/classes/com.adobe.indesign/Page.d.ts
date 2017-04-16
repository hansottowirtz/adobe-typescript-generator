/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Page extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all graphics contained by the Page.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * Lists all page items contained by the Page.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * The alternate layout section to which the page belongs.
			 * @type {Adobe.Indesign.Section}
			 * @readonly
			 */
			public readonly appliedAlternateLayout: Adobe.Indesign.Section;
			/**
			 * The master spread applied to the Page. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Indesign.MasterSpread}
			 */
			public appliedMaster: Adobe.Indesign.MasterSpread;
			/**
			 * The section to which the page belongs.
			 * @type {Adobe.Indesign.Section}
			 * @readonly
			 */
			public readonly appliedSection: Adobe.Indesign.Section;
			/**
			 * The trap preset applied to the page. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.TrapPreset}
			 */
			public appliedTrapPreset: Adobe.Indesign.TrapPreset;
			/**
			 * The bounds of the Page, in the format [y1, x1, y2, x2].
			 * @type {any}
			 * @readonly
			 */
			public readonly bounds: any;
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
			 * The sequential number of the page within the document.
			 * @type {number}
			 * @readonly
			 */
			public readonly documentOffset: number;
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
			 * Default grid properties. Note: Applies to named, layout, and 
			 * frame (story) grids.
			 * @type {Adobe.Indesign.GridDataInformation}
			 * @readonly
			 */
			public readonly gridData: Adobe.Indesign.GridDataInformation;
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
			 * The unique ID of the Page.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Page within its containing object.
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
			 * layout rule
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 */
			public layoutRule: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Indesign.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/**
			 * Margin preference settings.
			 * @type {Adobe.Indesign.MarginPreference}
			 * @readonly
			 */
			public readonly marginPreferences: Adobe.Indesign.MarginPreference;
			/**
			 * The items on a specified document page that originated on 
			 * the applied master page and have not been overridden or 
			 * detached. Can return: Array of PageItems, Guides, Graphics, 
			 * Movies or Sounds.
			 * @type {any}
			 * @readonly
			 */
			public readonly masterPageItems: any;
			/**
			 * The transform applied to the master page before it is 
			 * applied to Page.
			 * @type {Adobe.Indesign.TransformationMatrix}
			 */
			public masterPageTransform: Adobe.Indesign.TransformationMatrix;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Indesign.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/**
			 * The name of the Page.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * optional page for HTML5 pagination
			 * @type {boolean}
			 */
			public optionalPage: boolean;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Indesign.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The color label of the Page, specified either as  an array 
			 * of three doubles, each in the range 0 to 255 and 
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
			 * The parent of the Page (a Spread or MasterSpread).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
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
			 * The side of the binding spine on which to place the page 
			 * within the spread.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public readonly side: Adobe.Indesign.PageSideOptions;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Indesign.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/**
			 * snapshot blending mode
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 */
			public snapshotBlendingMode: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * The order in which the focus moves to different form fields 
			 * in the PDF when the tab key is pressed. Can return: Array of 
			 * Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, 
			 * TextBoxes or SignatureFields.
			 * @type {any}
			 */
			public tabOrder: any;
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPage(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Delete all layout snapshots for this Page.
			 * @returns {void}
			 */
			public deleteAllLayoutSnapshots(): void;
			/**
			 * Delete the snapshot of the layout for the current Page size 
			 * and shape.
			 * @returns {void}
			 */
			public deleteLayoutSnapshot(): void;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 * @returns {void}
			 */
			public detach(): void;
			/**
			 * Duplicates the page.
			 * @param {LocationOptions} toParam The location at which to 
			 * place the duplicate page relative to the reference object or 
			 * within the document or spread.  (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to value specifies before or after. Can 
			 * accept: Page or Spread. (Optional)
			 * @returns {Adobe.Indesign.Page}
			 */
			public duplicate(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.Page;
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
			 * Moves the page.
			 * @param {LocationOptions} toParam The new location of the 
			 * page relative to the reference object or within the document 
			 * or spread.  (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter value specifies before or 
			 * after. Can accept: Page or Spread. (Optional)
			 * @param {BindingOptions} bindingParam The location of the 
			 * binding spine in spreads. (Optional)
			 * @returns {Adobe.Indesign.Page}
			 */
			public move(toParam: LocationOptions, referenceParam: any, bindingParam: BindingOptions): Adobe.Indesign.Page;
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
			 * Places the XML element onto a page. If the place point is 
			 * above an existing page item, place the XML element into the 
			 * page item.
			 * @param {XMLElement} usingParam The XML element to place.
			 * @param {any[]} placePointParam The point at which to place 
			 * the object, specified in the format [x, y].
			 * @param {boolean} autoflowingParam If true, autoflows placed 
			 * text. (Optional)
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public placeXML(usingParam: XMLElement, placePointParam: any[], autoflowingParam: boolean): Adobe.Indesign.PageItem;
			/**
			 * Move the bounding box of the page item
			 * @param {any} inParam The bounding box to resize. Can accept: 
			 * CoordinateSpaces enumerator or Ordered array containing 
			 * coordinateSpace:CoordinateSpaces enumerator, 
			 * boundsKind:BoundingBoxLimits enumerator.
			 * @param {any[]} opposingCornersParam Opposing corners of new 
			 * bounding box in the given coordinate space
			 * @returns {void}
			 */
			public reframe(inParam: any, opposingCornersParam: any[]): void;
			/**
			 * Deletes the Page.
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
			public removeEventListenerPage(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 * @returns {void}
			 */
			public removeOverride(): void;
			/**
			 * Resize the page item.
			 * @param {any} inParam The bounding box to resize. Can accept: 
			 * CoordinateSpaces enumerator, BoundingBoxLimits enumerator or 
			 * Ordered array containing coordinateSpace:CoordinateSpaces 
			 * enumerator, boundsKind:BoundingBoxLimits enumerator.
			 * @param {any} fromParam The transform origin. Legal 
			 * specifications: relative to bounding box: anchor | {anchor | 
			 * {x,y}, bounds kind [, coordinate space]}; relative to 
			 * coordinate space: {x,y} | {{x,y}[, coordinate space]}; 
			 * relative to layout window ruler: {{x,y}, page index | bounds 
			 * kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator 
			 * or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, 
			 * AnchorPoint enumerators, BoundingBoxLimits enumerators or 
			 * Long Integers.
			 * @param {ResizeMethods} byParam How the current dimensions 
			 * are affected by the given values
			 * @param {any[]} valuesParam The width and height values. 
			 * Legal dimensions specifications: {x, y [, coordinate 
			 * space]}, {x, resize constraint [, coordinate space]}, or 
			 * {resize constraint, y [, coordinate space]}; where x and y 
			 * are real numbers and coordinate space is used to determine 
			 * _only_ the unit of length for x and y; coordinate space is 
			 * ignored for the 'current dimensions times' resize method). 
			 * Can accept: Array of Reals, ResizeConstraints enumerators or 
			 * CoordinateSpaces enumerators.
			 * @param {boolean} resizeIndividuallyParam If false and 
			 * multiple page items are targeted, the new dimensions are 
			 * attained only by moving the individual items rather than 
			 * resizing them. (Optional)
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 * @returns {void}
			 */
			public resize(inParam: any, fromParam: any, byParam: ResizeMethods, valuesParam: any[], resizeIndividuallyParam: boolean, consideringRulerUnitsParam: boolean): void;
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
			 * selection status of the Page in relation to previously 
			 * selected objects. (Optional)
			 * @returns {void}
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Replaces the content of XML element with content imported 
			 * from a file.
			 * @param {string} usingParam The file path to the import file.
			 * @param {string} relativeBasePathParam Base path used to 
			 * resolve relative paths. (Optional)
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public setContent(usingParam: string, relativeBasePathParam: string): Adobe.Indesign.PageItem;
			/**
			 * Create a snapshot of the layout for the current Page size 
			 * and shape.
			 * @returns {void}
			 */
			public snapshotCurrentLayout(): void;
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