/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Snippet extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched before a Snippet is placed. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_PLACE: string;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Indesign.Buttons;
			/** A collection of checkboxes. */
			public readonly checkBoxes: Adobe.Indesign.CheckBoxes;
			/** A collection of comboboxes. */
			public readonly comboBoxes: Adobe.Indesign.ComboBoxes;
			/** A collection of EPS files. */
			public readonly epss: Adobe.Indesign.EPSs;
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
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 */
			public readonly graphics: Adobe.Indesign.Graphics;
			/** A collection of groups. */
			public readonly groups: Adobe.Indesign.Groups;
			/** The unique ID of the Snippet. */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 */
			public readonly images: Adobe.Indesign.Images;
			/** The index of the Snippet within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of listboxes. */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/**
			 * The name of the Snippet; this is an alias to the Snippet's 
			 * label property.
			 */
			public name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/** The parent of the Snippet (a PlaceGun). */
			public readonly parent: Adobe.Indesign.PlaceGun;
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
			/** A collection of radio buttons. */
			public readonly radioButtons: Adobe.Indesign.RadioButtons;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/** A collection of signature fields. */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/** A collection of text boxes. */
			public readonly textBoxes: Adobe.Indesign.TextBoxes;
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
			public addEventListenerSnippet(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
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
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Deletes the Snippet. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerSnippet(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}