/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RecordsPerPage extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places as many records as fit on a page.
			 * @type {Adobe.Indesign.RecordsPerPage}
			 * @readonly
			 */
			public static readonly MULTIPLE_RECORD: Adobe.Indesign.RecordsPerPage;
			/**
			 * Alias for MULTIPLE_RECORD. Places as many records as fit on 
			 * a page.
			 * @type {Adobe.Indesign.RecordsPerPage}
			 * @readonly
			 */
			public static readonly multipleRecord: Adobe.Indesign.RecordsPerPage;
			/**
			 * Places each record on a new page.
			 * @type {Adobe.Indesign.RecordsPerPage}
			 * @readonly
			 */
			public static readonly SINGLE_RECORD: Adobe.Indesign.RecordsPerPage;
			/**
			 * Alias for SINGLE_RECORD. Places each record on a new page.
			 * @type {Adobe.Indesign.RecordsPerPage}
			 * @readonly
			 */
			public static readonly singleRecord: Adobe.Indesign.RecordsPerPage;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}