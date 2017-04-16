/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagTextForm extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ABBREVIATED. Abbreviates tags; creates smaller 
			 * text files.
			 */
			public static readonly abbreviated: Adobe.Indesign.TagTextForm;
			/** Abbreviates tags; creates smaller text files. */
			public static readonly ABBREVIATED: Adobe.Indesign.TagTextForm;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for VERBOSE. Displays tags in long form; creates 
			 * larger text files.
			 */
			public static readonly verbose: Adobe.Indesign.TagTextForm;
			/** Displays tags in long form; creates larger text files. */
			public static readonly VERBOSE: Adobe.Indesign.TagTextForm;
			/** Constructor */
			public constructor();
		}
	}
}