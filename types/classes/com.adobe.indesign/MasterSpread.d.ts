/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MasterSpread extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the MasterSpread. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the MasterSpread. */
			public readonly allPageItems: any;
			/**
			 * The master spread applied to the MasterSpread. Can also 
			 * accept: NothingEnum enumerator.
			 */
			public appliedMaster: Adobe.Indesign.MasterSpread;
			/** The name of the master spread. */
			public baseName: string;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Indesign.Buttons;
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
			/** A collection of groups. */
			public readonly groups: Adobe.Indesign.Groups;
			/** A collection of guides. */
			public readonly guides: Adobe.Indesign.Guides;
			/** The unique ID of the MasterSpread. */
			public readonly id: number;
			/** The IDML component name of the MasterSpread. */
			public idmlComponentName: string;
			/** The index of the MasterSpread within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/** The name of the MasterSpread. */
			public readonly name: string;
			/** The prefix of the master spread name. */
			public namePrefix: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The color label of the MasterSpread, specified either as  an 
			 * array of three doubles, each in the range 0 to 255 and 
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
			/** A collection of pages. */
			public readonly pages: Adobe.Indesign.Pages;
			/** The parent of the MasterSpread (a Document). */
			public readonly parent: Adobe.Indesign.Document;
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
			 * If true, displays master page items on document pages in the 
			 * spread.
			 */
			public showMasterItems: boolean;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/** The object timing settings. */
			public readonly timingSettings: Adobe.Indesign.TimingSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMasterSpread(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Creates multiple guides on all pages of the spread.
			 * @param {number} numberOfRowsParam - The number of rows to 
			 * create on each page. (Optional)
			 * @param {number} numberOfColumnsParam - The number of columns 
			 * to create on each page.  (Optional)
			 * @param {any} rowGutterParam - The height of the gutter 
			 * between rows. (Optional)
			 * @param {any} columnGutterParam - The width of the gutter 
			 * between columns. (Optional)
			 * @param {any} guideColorParam - The color to make the guides, 
			 * specified either as an array of three doubles, each in the 
			 * range 0 to 255 and representing R, G, and B values, or as a 
			 * UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors 
			 * enumerator. (Optional)
			 * @param {boolean} fitMarginsParam - If true, the row height 
			 * and column width are calculated based on the space within 
			 * the page margins. If false, row height and column width are 
			 * calculated based on the full page. (Optional)
			 * @param {boolean} removeExistingParam - If true, removes 
			 * existing guides when creating new ones. (Optional)
			 * @param {Layer} layerParam - The layer on which to create the 
			 * guides. (Optional)
			 */
			public createGuides(numberOfRowsParam: number, numberOfColumnsParam: number, rowGutterParam: any, columnGutterParam: any, guideColorParam: any, fitMarginsParam: boolean, removeExistingParam: boolean, layerParam: Layer): void;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 */
			public detach(): void;
			/**
			 * Duplicates the spread.
			 * @param {LocationOptions} toParam - The location of the 
			 * spread relative to the reference object or within the 
			 * document. (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required only when the to parameter specifies before or 
			 * after. Can accept: MasterSpread, Document or MasterSpread. 
			 * (Optional)
			 */
			public duplicate(toParam: LocationOptions, referenceParam: any): any;
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
			/** Deletes the MasterSpread. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerMasterSpread(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 */
			public removeOverride(): void;
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
			 * selection status of the MasterSpread in relation to 
			 * previously selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
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