/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TagTextForm extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ABBREVIATED. Abbreviates tags; creates smaller 
			 * text files.
			 */
			public static readonly abbreviated: Adobe.Incopy.TagTextForm;
			/** Abbreviates tags; creates smaller text files. */
			public static readonly ABBREVIATED: Adobe.Incopy.TagTextForm;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for VERBOSE. Displays tags in long form; creates 
			 * larger text files.
			 */
			public static readonly verbose: Adobe.Incopy.TagTextForm;
			/** Displays tags in long form; creates larger text files. */
			public static readonly VERBOSE: Adobe.Incopy.TagTextForm;
			/** Constructor */
			public constructor();
		}
	}
}