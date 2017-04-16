/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagTextForm extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ABBREVIATED. Abbreviates tags; creates smaller 
			 * text files.
			 * @type {Adobe.Indesign.TagTextForm}
			 * @readonly
			 */
			public static readonly abbreviated: Adobe.Indesign.TagTextForm;
			/**
			 * Abbreviates tags; creates smaller text files.
			 * @type {Adobe.Indesign.TagTextForm}
			 * @readonly
			 */
			public static readonly ABBREVIATED: Adobe.Indesign.TagTextForm;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for VERBOSE. Displays tags in long form; creates 
			 * larger text files.
			 * @type {Adobe.Indesign.TagTextForm}
			 * @readonly
			 */
			public static readonly verbose: Adobe.Indesign.TagTextForm;
			/**
			 * Displays tags in long form; creates larger text files.
			 * @type {Adobe.Indesign.TagTextForm}
			 * @readonly
			 */
			public static readonly VERBOSE: Adobe.Indesign.TagTextForm;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}