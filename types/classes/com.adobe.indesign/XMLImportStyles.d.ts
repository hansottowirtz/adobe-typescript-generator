/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLImportStyles extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Appends the imported content.
			 * @type {Adobe.Indesign.XMLImportStyles}
			 * @readonly
			 */
			public static readonly APPEND_IMPORT: Adobe.Indesign.XMLImportStyles;
			/**
			 * Alias for APPEND_IMPORT. Appends the imported content.
			 * @type {Adobe.Indesign.XMLImportStyles}
			 * @readonly
			 */
			public static readonly appendImport: Adobe.Indesign.XMLImportStyles;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Merges the imported content.
			 * @type {Adobe.Indesign.XMLImportStyles}
			 * @readonly
			 */
			public static readonly MERGE_IMPORT: Adobe.Indesign.XMLImportStyles;
			/**
			 * Alias for MERGE_IMPORT. Merges the imported content.
			 * @type {Adobe.Indesign.XMLImportStyles}
			 * @readonly
			 */
			public static readonly mergeImport: Adobe.Indesign.XMLImportStyles;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}