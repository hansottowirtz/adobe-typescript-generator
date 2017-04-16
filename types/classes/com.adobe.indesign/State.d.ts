/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class State extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, the state is active in the exported PDF.
			 * @type {boolean}
			 */
			public active: boolean;
			/**
			 * If true, the state is enabled in PDF documents.
			 * @type {boolean}
			 */
			public enabled: boolean;
			/**
			 * A collection of EPS files.
			 * @type {Adobe.Indesign.EPSs}
			 * @readonly
			 */
			public readonly epss: Adobe.Indesign.EPSs;
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
			 * A collection of graphic lines.
			 * @type {Adobe.Indesign.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 * @type {Adobe.Indesign.Graphics}
			 * @readonly
			 */
			public readonly graphics: Adobe.Indesign.Graphics;
			/**
			 * A collection of groups.
			 * @type {Adobe.Indesign.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Indesign.Groups;
			/**
			 * The unique ID of the State.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 * @type {Adobe.Indesign.Images}
			 * @readonly
			 */
			public readonly images: Adobe.Indesign.Images;
			/**
			 * The index of the State within its containing object.
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
			 * The name of the State.
			 * @type {string}
			 */
			public name: string;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Indesign.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Indesign.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * The parent of the State (a Button, MultiStateObject, 
			 * CheckBox or RadioButton).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of PDF files.
			 * @type {Adobe.Indesign.PDFs}
			 * @readonly
			 */
			public readonly pdfs: Adobe.Indesign.PDFs;
			/**
			 * A collection of PICT graphics.
			 * @type {Adobe.Indesign.PICTs}
			 * @readonly
			 */
			public readonly picts: Adobe.Indesign.PICTs;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Indesign.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Indesign.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * For a button, the type of user action that dictates the 
			 * object's appearance. For a MultiStateObject, which has no 
			 * user actions associated with states, this property is a 
			 * numeric value uniquely identifying the state. Can return: 
			 * StateTypes enumerator or Long Integer.
			 * @type {any}
			 */
			public statetype: any;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Indesign.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/**
			 * A collection of WMF graphics.
			 * @type {Adobe.Indesign.WMFs}
			 * @readonly
			 */
			public readonly wmfs: Adobe.Indesign.WMFs;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerState(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Adds page items to this state.
			 * @param {any[]} pageitemsParam One or more page items to add 
			 * to this state.
			 * @returns {void}
			 */
			public addItemsToState(pageitemsParam: any[]): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Moves the state to a new position in its parent collection.
			 * @param {number} newPositionParam the index to move the state 
			 * to in its parent collection
			 * @returns {void}
			 */
			public move(newPositionParam: number): void;
			/**
			 * Releases this state's appearance as a page item, removing 
			 * the state from its parent object.
			 * @returns {void}
			 */
			public releaseAsObject(): void;
			/**
			 * Deletes the State.
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
			public removeEventListenerState(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}