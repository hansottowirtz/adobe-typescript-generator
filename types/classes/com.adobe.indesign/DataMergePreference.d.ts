/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DataMergePreference extends Adobe.Indesign.Preference {
			/**
			 * The order in which to arrange multiple records on the page 
			 * in the target document.
			 */
			public arrangeBy: Adobe.Indesign.ArrangeBy;
			/**
			 * The offset value of the bottom margin in the target 
			 * document.
			 */
			public bottomMargin: any;
			/**
			 * The amount of space between columns of records in the target 
			 * document.
			 */
			public columnSpacing: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The offset value of the left margin in the target document. */
			public leftMargin: any;
			/** The parent of the DataMergePreference (a DataMerge). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The number of the record to merge. Note: Valid only when 
			 * record selection is one record.
			 */
			public recordNumber: number;
			/**
			 * The range of records to merge. Note: Valid only when record 
			 * selection is range.
			 */
			public recordRange: string;
			/** The records to merge. */
			public recordSelection: Adobe.Indesign.RecordSelection;
			/**
			 * The number of records to place on each page in the document.
			 */
			public recordsPerPage: Adobe.Indesign.RecordsPerPage;
			/**
			 * The offset value of the right margin in the target document.
			 */
			public rightMargin: any;
			/**
			 * The amount of space between rows of records in the target 
			 * document.
			 */
			public rowSpacing: any;
			/** The offset value of the top margin in the target document. */
			public topMargin: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDataMergePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * If true, lists missing images in the specified output file.
			 * @param {File} outputMissingImagesReportFileParam The path to 
			 * the output file.
			 */
			public alertMissingImages(outputMissingImagesReportFileParam: File): boolean;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDataMergePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}