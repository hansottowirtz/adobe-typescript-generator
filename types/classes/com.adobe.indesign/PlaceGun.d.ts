/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PlaceGun extends Adobe.Indesign.Preference {
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
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 * @type {Adobe.Indesign.Images}
			 * @readonly
			 */
			public readonly images: Adobe.Indesign.Images;
			/**
			 * Imported InDesign pages.
			 * @type {Adobe.Indesign.ImportedPages}
			 * @readonly
			 */
			public readonly importedPages: Adobe.Indesign.ImportedPages;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Indesign.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/**
			 * Whether the place gun is currently loaded with content for 
			 * placing.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly loaded: boolean;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Indesign.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
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
			 * The parent of the PlaceGun (a Document).
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
			 * A collection of signature fields.
			 * @type {Adobe.Indesign.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/**
			 * A collection of IDML snippets.
			 * @type {Adobe.Indesign.Snippets}
			 * @readonly
			 */
			public readonly snippets: Adobe.Indesign.Snippets;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
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
			 * A collection of WMF graphics.
			 * @type {Adobe.Indesign.WMFs}
			 * @readonly
			 */
			public readonly wmfs: Adobe.Indesign.WMFs;
			/**
			 * Delete the contents of the place gun.
			 * @returns {void}
			 */
			public abortPlaceGun(): void;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPlaceGun(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Load the place gun with one or more files.
			 * @param {any} fileNameParam One or more files to place. Can 
			 * accept: File or Array of Files.
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 * @returns {void}
			 */
			public loadPlaceGun(fileNameParam: any, showingOptionsParam: boolean, withPropertiesParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPlaceGun(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Rotate the contents of the place gun.
			 * @param {RotationDirection} directionParam Which direction to 
			 * rotate the contents (Optional)
			 * @returns {void}
			 */
			public rotate(directionParam: RotationDirection): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}