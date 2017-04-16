/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpenOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Default based on the file type or extension.
			 * @type {Adobe.Indesign.OpenOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.OpenOptions;
			/**
			 * Alias for DEFAULT_VALUE. Default based on the file type or 
			 * extension.
			 * @type {Adobe.Indesign.OpenOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.OpenOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Open a copy of the document.
			 * @type {Adobe.Indesign.OpenOptions}
			 * @readonly
			 */
			public static readonly OPEN_COPY: Adobe.Indesign.OpenOptions;
			/**
			 * Open the document itself.
			 * @type {Adobe.Indesign.OpenOptions}
			 * @readonly
			 */
			public static readonly OPEN_ORIGINAL: Adobe.Indesign.OpenOptions;
			/**
			 * Alias for OPEN_COPY. Open a copy of the document.
			 * @type {Adobe.Indesign.OpenOptions}
			 * @readonly
			 */
			public static readonly openCopy: Adobe.Indesign.OpenOptions;
			/**
			 * Alias for OPEN_ORIGINAL. Open the document itself.
			 * @type {Adobe.Indesign.OpenOptions}
			 * @readonly
			 */
			public static readonly openOriginal: Adobe.Indesign.OpenOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}