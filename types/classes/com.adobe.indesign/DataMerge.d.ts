/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DataMerge extends Adobe.Indesign.Preference {
			/**
			 * A collection of data merge fields.
			 * @type {Adobe.Indesign.DataMergeFields}
			 * @readonly
			 */
			public readonly dataMergeFields: Adobe.Indesign.DataMergeFields;
			/**
			 * The data merge preference properties that define the layout 
			 * and content of the target page.
			 * @type {Adobe.Indesign.DataMergePreference}
			 * @readonly
			 */
			public readonly dataMergePreferences: Adobe.Indesign.DataMergePreference;
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
			 * The parent of the DataMerge (a Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDataMerge(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Merges records and exports to PDF.
			 * @param {File} toParam The path of exported PDF file.
			 * @param {PDFExportPreset} usingParam The PDF export style to 
			 * use. (Optional)
			 * @param {File} outputOversetReportFileParam The path to the 
			 * file in which to store the overset report. (Optional)
			 * @returns {void}
			 */
			public exportFile(toParam: File, usingParam: PDFExportPreset, outputOversetReportFileParam: File): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Merges records and produces an optional overset report.
			 * @param {File} outputOversetReportFileParam The path to the 
			 * file in which to store the overset report. (Optional)
			 * @returns {void}
			 */
			public mergeRecords(outputOversetReportFileParam: File): void;
			/**
			 * Removes the data source.
			 * @returns {void}
			 */
			public removeDataSource(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerDataMerge(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Specifies the file to use as the data source.
			 * @param {File} dataSourceFileParam The path to the data 
			 * source file.
			 * @returns {void}
			 */
			public selectDataSource(dataSourceFileParam: File): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Updates the data source file with the most current data.
			 * @returns {void}
			 */
			public updateDataSource(): void;
		}
	}
}