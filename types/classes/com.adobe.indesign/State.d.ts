/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class State extends Adobe.Csawlib.CSHostObject {
			/** If true, the state is active in the exported PDF. */
			public active: boolean;
			/** If true, the state is enabled in PDF documents. */
			public enabled: boolean;
			/** A collection of EPS files. */
			public readonly epss: Adobe.Indesign.EPSs;
			/** EPSTexts */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 */
			public readonly graphics: Adobe.Indesign.Graphics;
			/** A collection of groups. */
			public readonly groups: Adobe.Indesign.Groups;
			/** The unique ID of the State. */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 */
			public readonly images: Adobe.Indesign.Images;
			/** The index of the State within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the State. */
			public name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * The parent of the State (a Button, MultiStateObject, 
			 * CheckBox or RadioButton).
			 */
			public readonly parent: any;
			/** A collection of PDF files. */
			public readonly pdfs: Adobe.Indesign.PDFs;
			/** A collection of PICT graphics. */
			public readonly picts: Adobe.Indesign.PICTs;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * For a button, the type of user action that dictates the 
			 * object's appearance. For a MultiStateObject, which has no 
			 * user actions associated with states, this property is a 
			 * numeric value uniquely identifying the state. Can return: 
			 * StateTypes enumerator or Long Integer.
			 */
			public statetype: any;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/** A collection of WMF graphics. */
			public readonly wmfs: Adobe.Indesign.WMFs;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerState(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Adds page items to this state.
			 * @param {any[]} pageitemsParam One or more page items to add 
			 * to this state.
			 */
			public addItemsToState(pageitemsParam: any[]): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Moves the state to a new position in its parent collection.
			 * @param {number} newPositionParam the index to move the state 
			 * to in its parent collection
			 */
			public move(newPositionParam: number): void;
			/**
			 * Releases this state's appearance as a page item, removing 
			 * the state from its parent object.
			 */
			public releaseAsObject(): void;
			/** Deletes the State. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerState(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}