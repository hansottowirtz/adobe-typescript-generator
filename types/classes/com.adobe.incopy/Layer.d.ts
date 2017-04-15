/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Layer extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Layer. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Layer. */
			public readonly allPageItems: any;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
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
			/** The unique ID of the Layer. */
			public readonly id: number;
			/**
			 * If true, text wrap settings applied to objects on the layer 
			 * will not affect text on other layers when the layer is 
			 * hidden.
			 */
			public readonly ignoreWrap: boolean;
			/** The index of the Layer within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/**
			 * The color of the layer, specified either as an array of 
			 * three doubles, each in the range 0 to 255 and representing 
			 * R, G, and B values, or as a UI color. Can return: Array of 3 
			 * Reals (0 - 255) or UIColors enumerator.
			 */
			public readonly layerColor: any;
			/** If true, the Layer is locked. */
			public readonly locked: boolean;
			/** If true, the guide positions on the layer are locked. */
			public readonly lockGuides: boolean;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/** The name of the Layer. */
			public readonly name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** The parent of the Layer (a Document). */
			public readonly parent: Adobe.Incopy.Document;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/** If true, the layer will print. */
			public readonly printable: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/** If true, guides are visible on the layer. */
			public readonly showGuides: boolean;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/** If true, the Layer is visible. */
			public visible: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLayer(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerLayer(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}