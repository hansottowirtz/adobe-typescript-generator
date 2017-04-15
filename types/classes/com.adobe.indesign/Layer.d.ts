/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Layer extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Layer. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Layer. */
			public readonly allPageItems: any;
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
			/** The unique ID of the Layer. */
			public readonly id: number;
			/**
			 * If true, text wrap settings applied to objects on the layer 
			 * will not affect text on other layers when the layer is 
			 * hidden.
			 */
			public ignoreWrap: boolean;
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
			public layerColor: any;
			/** If true, the Layer is locked. */
			public locked: boolean;
			/** If true, the guide positions on the layer are locked. */
			public lockGuides: boolean;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/** The name of the Layer. */
			public name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/** The parent of the Layer (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Indesign.Polygons;
			/** If true, the layer will print. */
			public printable: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/** If true, guides are visible on the layer. */
			public showGuides: boolean;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Indesign.TextFrames;
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
			public addEventListenerLayer(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the Layer. */
			public duplicate(): Adobe.Indesign.Layer;
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
			 * Merges the layer with other layer(s).
			 * @param {any[]} withParam - The layer(s) with which to merge.
			 */
			public merge(withParam: any[]): Adobe.Indesign.Layer;
			/**
			 * Moves the Layer to the specified location.
			 * @param {LocationOptions} toParam - The location relative to 
			 * the reference object or within the containing object.
			 * @param {Layer} referenceParam - The reference object. Note: 
			 * Required when the to value specifies before or after. 
			 * (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: Layer): Adobe.Indesign.Layer;
			/** Deletes the Layer. */
			public remove(): void;
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