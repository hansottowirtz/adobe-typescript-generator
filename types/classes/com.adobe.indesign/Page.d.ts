/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Page extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Page. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Page. */
			public readonly allPageItems: any;
			/**
			 * The master spread applied to the Page. Can also accept: 
			 * NothingEnum enumerator.
			 */
			public appliedMaster: Adobe.Indesign.MasterSpread;
			/** The section to which the page belongs. */
			public readonly appliedSection: Adobe.Indesign.Section;
			/**
			 * The trap preset applied to the page. Can also accept: 
			 * String.
			 */
			public appliedTrapPreset: Adobe.Indesign.TrapPreset;
			/** The bounds of the Page, in the format [y1, x1, y2, x2]. */
			public readonly bounds: any;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Indesign.Buttons;
			/** The sequential number of the page within the document. */
			public readonly documentOffset: number;
			/** EPSTexts */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Indesign.FormFields;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * Default grid properties. Note: Applies to named, layout, and 
			 * frame (story) grids.
			 */
			public readonly gridData: Adobe.Indesign.GridDataInformation;
			/** A collection of groups. */
			public readonly groups: Adobe.Indesign.Groups;
			/** A collection of guides. */
			public readonly guides: Adobe.Indesign.Guides;
			/** The unique ID of the Page. */
			public readonly id: number;
			/** The index of the Page within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** Margin preference settings. */
			public readonly marginPreferences: Adobe.Indesign.MarginPreference;
			/**
			 * The items on a specified document page that originated on 
			 * the applied master page and have not been overridden or 
			 * detached. Can return: Array of PageItems, Guides, Graphics, 
			 * Movies or Sounds.
			 */
			public readonly masterPageItems: any;
			/**
			 * The transform applied to the master page before it is 
			 * applied to Page.
			 */
			public masterPageTransform: Adobe.Indesign.TransformationMatrix;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/** The name of the Page. */
			public readonly name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The color label of the Page, specified either as  an array 
			 * of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator or 
			 * PageColorOptions enumerator.
			 */
			public pageColor: any;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/** The parent of the Page (a Spread or MasterSpread). */
			public readonly parent: any;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Indesign.Polygons;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/**
			 * The side of the binding spine on which to place the page 
			 * within the spread.
			 */
			public readonly side: Adobe.Indesign.PageSideOptions;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * The order in which the focus moves to different buttons in 
			 * the PDF when the tab key is pressed.
			 */
			public tabOrder: any;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPage(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 */
			public detach(): void;
			/**
			 * Duplicates the page.
			 * @param {LocationOptions} toParam - The location at which to 
			 * place the duplicate page relative to the reference object or 
			 * within the document or spread.  (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to value specifies before or after. Can 
			 * accept: Page or Spread. (Optional)
			 */
			public duplicate(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.Page;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Moves the page.
			 * @param {LocationOptions} toParam - The new location of the 
			 * page relative to the reference object or within the document 
			 * or spread.  (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to parameter value specifies before or 
			 * after. Can accept: Page or Spread. (Optional)
			 * @param {BindingOptions} bindingParam - The location of the 
			 * binding spine in spreads. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any, bindingParam: BindingOptions): Adobe.Indesign.Page;
			/**
			 * Places the file.
			 * @param {File} fileNameParam - The file to place
			 * @param {any[]} placePointParam - The point at which to place 
			 * (Optional)
			 * @param {Layer} destinationLayerParam - The layer on which to 
			 * place (Optional)
			 * @param {boolean} showingOptionsParam - Whether to display 
			 * the import options dialog (Optional)
			 * @param {boolean} autoflowingParam - Whether to autoflow 
			 * placed text (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the placed object(s) (Optional)
			 */
			public place(fileNameParam: File, placePointParam: any[], destinationLayerParam: Layer, showingOptionsParam: boolean, autoflowingParam: boolean, withPropertiesParam: any): any;
			/**
			 * Places the XML element onto a page. If the place point is 
			 * above an existing page item, place the XML element into the 
			 * page item.
			 * @param {XMLElement} usingParam - The XML element to place.
			 * @param {any[]} placePointParam - The point at which to place 
			 * the object, specified in the format [x, y].
			 * @param {boolean} autoflowingParam - If true, autoflows 
			 * placed text. (Optional)
			 */
			public placeXML(usingParam: XMLElement, placePointParam: any[], autoflowingParam: boolean): Adobe.Indesign.PageItem;
			/**
			 * Move the bounding box of the page item
			 * @param {any} inParam - The bounding box to resize. Can 
			 * accept: CoordinateSpaces enumerator or Ordered array 
			 * containing coordinateSpace:CoordinateSpaces enumerator, 
			 * boundsKind:BoundingBoxLimits enumerator.
			 * @param {any[]} opposingCornersParam - Opposing corners of 
			 * new bounding box in the given coordinate space
			 */
			public reframe(inParam: any, opposingCornersParam: any[]): void;
			/** Deletes the Page. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPage(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 */
			public removeOverride(): void;
			/**
			 * Resize the page item.
			 * @param {any} inParam - The bounding box to resize. Can 
			 * accept: CoordinateSpaces enumerator, BoundingBoxLimits 
			 * enumerator or Ordered array containing 
			 * coordinateSpace:CoordinateSpaces enumerator, 
			 * boundsKind:BoundingBoxLimits enumerator.
			 * @param {any} fromParam - The transform origin. Legal 
			 * specifications: relative to bounding box: anchor | {anchor | 
			 * {x,y}, bounds kind [, coordinate space]}; relative to 
			 * coordinate space: {x,y} | {{x,y}[, coordinate space]}; 
			 * relative to layout window ruler: {{x,y}, page index | bounds 
			 * kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator 
			 * or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, 
			 * AnchorPoint enumerators, BoundingBoxLimits enumerators or 
			 * Long Integers.
			 * @param {ResizeMethods} byParam - How the current dimensions 
			 * are affected by the given values
			 * @param {any[]} valuesParam - The width and height values. 
			 * Legal dimensions specifications: {x, y [, coordinate 
			 * space]}, {x, resize constraint [, coordinate space]}, or 
			 * {resize constraint, y [, coordinate space]}; where x and y 
			 * are real numbers and coordinate space is used to determine 
			 * _only_ the unit of length for x and y; coordinate space is 
			 * ignored for the 'current dimensions times' resize method). 
			 * Can accept: Array of Reals, ResizeConstraints enumerators or 
			 * CoordinateSpaces enumerators.
			 * @param {boolean} resizeIndividuallyParam - If false and 
			 * multiple page items are targeted, the new dimensions are 
			 * attained only by moving the individual items rather than 
			 * resizing them. (Optional)
			 * @param {boolean} consideringRulerUnitsParam - If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 */
			public resize(inParam: any, fromParam: any, byParam: ResizeMethods, valuesParam: any[], resizeIndividuallyParam: boolean, consideringRulerUnitsParam: boolean): void;
			/**
			 * Get the coordinates of the given location in the specified 
			 * coordinate system.
			 * @param {any} locationParam - The location requested. Can 
			 * accept: Array of 2 Reals, AnchorPoint enumerator or Array of 
			 * Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint 
			 * enumerators, BoundingBoxLimits enumerators or Long Integers.
			 * @param {CoordinateSpaces} inParam - The coordinate space to 
			 * use.
			 * @param {boolean} consideringRulerUnitsParam - If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 */
			public resolve(locationParam: any, inParam: CoordinateSpaces, consideringRulerUnitsParam: boolean): any;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam - The 
			 * selection status of the Page in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Replaces the content of XML element with content imported 
			 * from a file.
			 * @param {string} usingParam - The file path to the import 
			 * file.
			 * @param {string} relativeBasePathParam - Base path used to 
			 * resolve relative paths. (Optional)
			 */
			public setContent(usingParam: string, relativeBasePathParam: string): Adobe.Indesign.PageItem;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Transform the page item.
			 * @param {CoordinateSpaces} inParam - The coordinate space to 
			 * use
			 * @param {any} fromParam - The temporary origin during the 
			 * transformation. Can accept: Array of 2 Reals, AnchorPoint 
			 * enumerator or Array of Arrays of 2 Reals, CoordinateSpaces 
			 * enumerators, AnchorPoint enumerators, BoundingBoxLimits 
			 * enumerators or Long Integers.
			 * @param {any} withMatrixParam - Transform matrix. Can accept: 
			 * Array of 6 Reals or TransformationMatrix.
			 * @param {any} replacingCurrentParam - Transform components to 
			 * consider; providing this optional parameter causes the 
			 * target's existing transform components to be replaced with 
			 * new values.  Without this parameter, the given matrix is 
			 * concatenated onto the target's existing transform combining 
			 * the effect of the two. Can accept: MatrixContent enumerator, 
			 * Array of MatrixContent enumerators or Long Integer. 
			 * (Optional)
			 * @param {boolean} consideringRulerUnitsParam - If true then a 
			 * ruler based origin is interpreted using ruler units rather 
			 * than points. The default value is false. This parameter has 
			 * no effect unless the reference point is specified relative 
			 * to a page. (Optional)
			 */
			public transform(inParam: CoordinateSpaces, fromParam: any, withMatrixParam: any, replacingCurrentParam: any, consideringRulerUnitsParam: boolean): void;
			/**
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam - The coordinate space to 
			 * use
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
		}
	}
}