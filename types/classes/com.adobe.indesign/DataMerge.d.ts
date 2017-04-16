/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class DataMerge extends Adobe.Indesign.Preference {
			/** A collection of data merge fields. */
			public readonly dataMergeFields: Adobe.Indesign.DataMergeFields;
			/**
			 * The data merge preference properties that define the layout 
			 * and content of the target page.
			 */
			public readonly dataMergePreferences: Adobe.Indesign.DataMergePreference;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the DataMerge (a Document). */
			public readonly parent: any;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDataMerge(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Merges records and exports to PDF.
			 * @param {File} toParam The path of exported PDF file.
			 * @param {PDFExportPreset} usingParam The PDF export style to 
			 * use. (Optional)
			 * @param {File} outputOversetReportFileParam The path to the 
			 * file in which to store the overset report. (Optional)
			 */
			public exportFile(toParam: File, usingParam: PDFExportPreset, outputOversetReportFileParam: File): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Merges records and produces an optional overset report.
			 * @param {File} outputOversetReportFileParam The path to the 
			 * file in which to store the overset report. (Optional)
			 */
			public mergeRecords(outputOversetReportFileParam: File): void;
			/** Removes the data source. */
			public removeDataSource(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDataMerge(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Specifies the file to use as the data source.
			 * @param {File} dataSourceFileParam The path to the data 
			 * source file.
			 */
			public selectDataSource(dataSourceFileParam: File): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Updates the data source file with the most current data. */
			public updateDataSource(): void;
		}
	}
}