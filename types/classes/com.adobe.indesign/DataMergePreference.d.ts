/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DataMergePreference extends Adobe.Indesign.Preference {
			/**
			 * The order in which to arrange multiple records on the page 
			 * in the target document.
			 * @type {Adobe.Indesign.ArrangeBy}
			 */
			public arrangeBy: Adobe.Indesign.ArrangeBy;
			/**
			 * The offset value of the bottom margin in the target 
			 * document.
			 * @type {any}
			 */
			public bottomMargin: any;
			/**
			 * The amount of space between columns of records in the target 
			 * document.
			 * @type {any}
			 */
			public columnSpacing: any;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The offset value of the left margin in the target document.
			 * @type {any}
			 */
			public leftMargin: any;
			/**
			 * The parent of the DataMergePreference (a DataMerge).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The number of the record to merge. Note: Valid only when 
			 * record selection is one record.
			 * @type {number}
			 */
			public recordNumber: number;
			/**
			 * The range of records to merge. Note: Valid only when record 
			 * selection is range.
			 * @type {string}
			 */
			public recordRange: string;
			/**
			 * The records to merge.
			 * @type {Adobe.Indesign.RecordSelection}
			 */
			public recordSelection: Adobe.Indesign.RecordSelection;
			/**
			 * The number of records to place on each page in the document.
			 * @type {Adobe.Indesign.RecordsPerPage}
			 */
			public recordsPerPage: Adobe.Indesign.RecordsPerPage;
			/**
			 * The offset value of the right margin in the target document.
			 * @type {any}
			 */
			public rightMargin: any;
			/**
			 * The amount of space between rows of records in the target 
			 * document.
			 * @type {any}
			 */
			public rowSpacing: any;
			/**
			 * The offset value of the top margin in the target document.
			 * @type {any}
			 */
			public topMargin: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDataMergePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * If true, lists missing images in the specified output file.
			 * @param {File} outputMissingImagesReportFileParam The path to 
			 * the output file.
			 * @returns {boolean}
			 */
			public alertMissingImages(outputMissingImagesReportFileParam: File): boolean;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerDataMergePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}