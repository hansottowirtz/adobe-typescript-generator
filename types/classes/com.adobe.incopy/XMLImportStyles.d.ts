/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLImportStyles extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Appends the imported content.
			 * @type {Adobe.Incopy.XMLImportStyles}
			 * @readonly
			 */
			public static readonly APPEND_IMPORT: Adobe.Incopy.XMLImportStyles;
			/**
			 * Alias for APPEND_IMPORT. Appends the imported content.
			 * @type {Adobe.Incopy.XMLImportStyles}
			 * @readonly
			 */
			public static readonly appendImport: Adobe.Incopy.XMLImportStyles;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Merges the imported content.
			 * @type {Adobe.Incopy.XMLImportStyles}
			 * @readonly
			 */
			public static readonly MERGE_IMPORT: Adobe.Incopy.XMLImportStyles;
			/**
			 * Alias for MERGE_IMPORT. Merges the imported content.
			 * @type {Adobe.Incopy.XMLImportStyles}
			 * @readonly
			 */
			public static readonly mergeImport: Adobe.Incopy.XMLImportStyles;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}