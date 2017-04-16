/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StyleConflict extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the publication style.
			 * @type {Adobe.Incopy.StyleConflict}
			 * @readonly
			 */
			public static readonly PUBLICATION_DEFINITION: Adobe.Incopy.StyleConflict;
			/**
			 * Alias for PUBLICATION_DEFINITION. Uses the publication 
			 * style.
			 * @type {Adobe.Incopy.StyleConflict}
			 * @readonly
			 */
			public static readonly publicationDefinition: Adobe.Incopy.StyleConflict;
			/**
			 * Uses the tag file style.
			 * @type {Adobe.Incopy.StyleConflict}
			 * @readonly
			 */
			public static readonly TAG_FILE_DEFINITION: Adobe.Incopy.StyleConflict;
			/**
			 * Alias for TAG_FILE_DEFINITION. Uses the tag file style.
			 * @type {Adobe.Incopy.StyleConflict}
			 * @readonly
			 */
			public static readonly tagFileDefinition: Adobe.Incopy.StyleConflict;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}