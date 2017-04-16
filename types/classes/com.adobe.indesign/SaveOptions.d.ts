/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SaveOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ASK. Displays a prompts asking whether to save 
			 * changes.
			 */
			public static readonly ask: Adobe.Indesign.SaveOptions;
			/** Displays a prompts asking whether to save changes. */
			public static readonly ASK: Adobe.Indesign.SaveOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NO. Does not save changes. */
			public static readonly no: Adobe.Indesign.SaveOptions;
			/** Does not save changes. */
			public static readonly NO: Adobe.Indesign.SaveOptions;
			/** Alias for YES. Saves changes. */
			public static readonly yes: Adobe.Indesign.SaveOptions;
			/** Saves changes. */
			public static readonly YES: Adobe.Indesign.SaveOptions;
			/** Constructor */
			public constructor();
		}
	}
}