/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Page extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Page. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Page. */
			public readonly allPageItems: any;
			/**
			 * The master spread applied to the Page. Can also accept: 
			 * NothingEnum enumerator.
			 */
			public readonly appliedMaster: Adobe.Incopy.MasterSpread;
			/** The section to which the page belongs. */
			public readonly appliedSection: Adobe.Incopy.Section;
			/**
			 * The trap preset applied to the page. Can also accept: 
			 * String.
			 */
			public appliedTrapPreset: Adobe.Incopy.TrapPreset;
			/** The bounds of the Page, in the format [y1, x1, y2, x2]. */
			public readonly bounds: any;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
			/** The sequential number of the page within the document. */
			public readonly documentOffset: number;
			/** EPSTexts */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Incopy.FormFields;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/** A collection of guides. */
			public readonly guides: Adobe.Incopy.Guides;
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
			public readonly marginPreferences: Adobe.Incopy.MarginPreference;
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
			public masterPageTransform: Adobe.Incopy.TransformationMatrix;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/** The name of the Page. */
			public readonly name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** The parent of the Page (a Spread or MasterSpread). */
			public readonly parent: any;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/**
			 * The side of the binding spine on which to place the page 
			 * within the spread.
			 */
			public readonly side: Adobe.Incopy.PageSideOptions;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * The order in which the focus moves to different buttons in 
			 * the PDF when the tab key is pressed.
			 */
			public tabOrder: any;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPage(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPage(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
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
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam - The coordinate space to 
			 * use
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
		}
	}
}