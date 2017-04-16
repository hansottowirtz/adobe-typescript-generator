/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StyleConflict extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the publication style.
			 * @type {Adobe.Indesign.StyleConflict}
			 * @readonly
			 */
			public static readonly PUBLICATION_DEFINITION: Adobe.Indesign.StyleConflict;
			/**
			 * Alias for PUBLICATION_DEFINITION. Uses the publication 
			 * style.
			 * @type {Adobe.Indesign.StyleConflict}
			 * @readonly
			 */
			public static readonly publicationDefinition: Adobe.Indesign.StyleConflict;
			/**
			 * Uses the tag file style.
			 * @type {Adobe.Indesign.StyleConflict}
			 * @readonly
			 */
			public static readonly TAG_FILE_DEFINITION: Adobe.Indesign.StyleConflict;
			/**
			 * Alias for TAG_FILE_DEFINITION. Uses the tag file style.
			 * @type {Adobe.Indesign.StyleConflict}
			 * @readonly
			 */
			public static readonly tagFileDefinition: Adobe.Indesign.StyleConflict;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}