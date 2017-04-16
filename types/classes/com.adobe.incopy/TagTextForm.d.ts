/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TagTextForm extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ABBREVIATED. Abbreviates tags; creates smaller 
			 * text files.
			 * @type {Adobe.Incopy.TagTextForm}
			 * @readonly
			 */
			public static readonly abbreviated: Adobe.Incopy.TagTextForm;
			/**
			 * Abbreviates tags; creates smaller text files.
			 * @type {Adobe.Incopy.TagTextForm}
			 * @readonly
			 */
			public static readonly ABBREVIATED: Adobe.Incopy.TagTextForm;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for VERBOSE. Displays tags in long form; creates 
			 * larger text files.
			 * @type {Adobe.Incopy.TagTextForm}
			 * @readonly
			 */
			public static readonly verbose: Adobe.Incopy.TagTextForm;
			/**
			 * Displays tags in long form; creates larger text files.
			 * @type {Adobe.Incopy.TagTextForm}
			 * @readonly
			 */
			public static readonly VERBOSE: Adobe.Incopy.TagTextForm;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}