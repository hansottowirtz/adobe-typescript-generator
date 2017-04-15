/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PlaceGun extends Adobe.Incopy.Preference {
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
			/** A collection of EPS files. */
			public readonly epss: Adobe.Incopy.EPSs;
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
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 */
			public readonly graphics: Adobe.Incopy.Graphics;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 */
			public readonly images: Adobe.Incopy.Images;
			/** Imported InDesign pages. */
			public readonly importedPages: Adobe.Incopy.ImportedPages;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * Whether the place gun is currently loaded with content for 
			 * placing.
			 */
			public readonly loaded: boolean;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** The parent of the PlaceGun (a Document). */
			public readonly parent: any;
			/** A collection of PDF files. */
			public readonly pdfs: Adobe.Incopy.PDFs;
			/** A collection of PICT graphics. */
			public readonly picts: Adobe.Incopy.PICTs;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/** A collection of WMF graphics. */
			public readonly wmfs: Adobe.Incopy.WMFs;
			/** Delete the contents of the place gun. */
			public abortPlaceGun(): void;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPlaceGun(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Load the place gun with one or more files.
			 * @param {any} fileNameParam - One or more files to place. Can 
			 * accept: File or Array of Files.
			 * @param {boolean} showingOptionsParam - Whether to display 
			 * the import options dialog (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the placed object(s) (Optional)
			 */
			public loadPlaceGun(fileNameParam: any, showingOptionsParam: boolean, withPropertiesParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPlaceGun(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Rotate the contents of the place gun.
			 * @param {RotationDirection} directionParam - Which direction 
			 * to rotate the contents (Optional)
			 */
			public rotate(directionParam: RotationDirection): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}